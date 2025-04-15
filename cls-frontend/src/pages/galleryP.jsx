import React, { useState, useEffect, useRef } from "react";
import "./galleryP.css";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { fetchPropertyImages } from "../services/api/propertyImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


const mineNow = "/images/minenow.jpg";

function fromSlug(slug) {
  return slug
    .split("-")
    .map((word) =>
      word.toLowerCase() === "and" ? "and" : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ")
    .replace(" 26 3", " 26-3")
    .replace(" 24 12", " 24-12")
    .replace(" 27 19", " 27-19");
}

const GalleryP = () => {
  const [images, setImages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageSpans, setImageSpans] = useState([]);
  const hasInitializedSpans = useRef(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const { city, property } = useParams();

  useEffect(() => {
    const fetchPropertyAndImages = async () => {
      const formattedName = fromSlug(property);

      const { data: propData, error: propError } = await supabase
        .from("properties")
        .select("id")
        .ilike("property_name", formattedName)
        .single();

      if (propError || !propData) {
        console.error("Property not found:", propError);
        return;
      }

      const images = await fetchPropertyImages(propData.id);
      setImages(images);
    };

    if (property) {
      fetchPropertyAndImages();
    }
  }, [property]);

  const rowLayouts = [[1, 1, 1], [2, 1], [1, 2]];

  const getRandomRowLayout = () =>
    rowLayouts[Math.floor(Math.random() * rowLayouts.length)];

  const setGridSpans = () => {
    const spans = [];
    let currentRowWidth = 0;
    let rowIndex = 0;
    const totalCards = images.length;
    let previousRowLayout = null;

    while (rowIndex * 3 < totalCards) {
      let rowLayout = getRandomRowLayout();
      while (rowLayout === previousRowLayout) {
        rowLayout = getRandomRowLayout();
      }

      rowLayout.forEach((span) => {
        if (currentRowWidth + span <= 3) {
          spans.push(span);
          currentRowWidth += span;
        }
      });

      previousRowLayout = rowLayout;
      rowIndex += 1;
      if (currentRowWidth === 3) {
        currentRowWidth = 0;
      }
    }

    setImageSpans(spans);
  };

  useEffect(() => {
    if (images.length && !hasInitializedSpans.current) {
      setGridSpans();
      hasInitializedSpans.current = true;
    }
  }, [images]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(true);
  };

  const handleCloseExpandedImage = () => {
    setIsExpanded(false);
    setActiveIndex(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const honeypot = e.target.honeypot.value;
    if (honeypot) return;

    setSending(true);

    emailjs
      .sendForm('service_7qzpels', 'template_bsqr1uv', formRef.current, {
        publicKey: 'Oap0hlrzyVN5GbZdF',
      })
      .then(() => {
        alert("Inquiry sent successfully!");
        formRef.current.reset();
        setIsInquiryOpen(false);
      })
      .catch((error) => {
        alert(`Error: ${error.text}`);
      })
      .finally(() => setSending(false));
  };

  const capitalizedProperty =
    property &&
    property
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <>
      <section className="carousel-container">
        <motion.div 
          className="carousel-heading"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 1 }}
          >
          <h2 className="property__heading">{capitalizedProperty}</h2>
        </motion.div>

        <div className="image-grid">
          {images.map((img, index) => {
            const columnSpan = imageSpans[index] || 1;
            return (
              <motion.div
                key={img.id || index}
                className="image-card"
                initial= {{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 0.8, delay: index * 0.4}}
                viewport={{ once: true }}
                style={{ gridColumn: `span ${columnSpan}` }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img.image_url}
                  alt={`Image ${index + 1}`}
                  className="card-image"
                />
              </motion.div>
            );
          })}
        </div>

        {isExpanded && activeIndex !== null && (
          <div className="expanded-image-container" onClick={handleCloseExpandedImage}>
            <div className="expanded-card">
              <img
                src={images[activeIndex].image_url}
                alt={`Expanded Image ${activeIndex + 1}`}
                className="expanded-image"
              />
            </div>
          </div>
        )}
      </section>

      <button className="inquiryBtn" onClick={() => setIsInquiryOpen(true)}>
        <FontAwesomeIcon icon={faEnvelope} />
      </button>

      {isInquiryOpen && (
        <div className="inquiry__overlay" onClick={() => setIsInquiryOpen(false)}>
          <div className="inquiry__modal" onClick={(e) => e.stopPropagation()}>
            <div className="inquiry__modal--content">
              <div className="inquiry__text">
                <h3 className="inquiry__title">Checkout the area!</h3>
                <div className="inquiry__imgHolder">
                  <img src={mineNow} className="inquiry__img" alt="mine now" />
                </div>
              </div>
              <form ref={formRef} onSubmit={sendEmail} className="inquiry__form">
                <input
                  type="text"
                  name="honeypot"
                  className="inquiry__honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="inquiry__fields">
                  <div className="inquiry__group">
                    <label>Property Name:</label>
                    <input
                      type="text"
                      name="project"
                      value={fromSlug(property)}
                      readOnly
                    />
                  </div>

                  <div className="inquiry__group">
                    <label>Your Name:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="inquiry__group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="inquiry__group">
                    <label>Message:</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="I'm interested in this property..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inquiry__submitBtn"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryP;
