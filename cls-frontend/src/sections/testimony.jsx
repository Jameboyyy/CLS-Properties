import React, { useState, useEffect} from 'react';
import { fetchTestimonies } from '../services/api/testimonies';
import './testimony.css';

const Testimony = () => {

    const [testimonyData, setTestimonyData] = useState([]);

    useEffect(() => {
        async function loadTestimonyData() {
            const data = await fetchTestimonies();
            setTestimonyData(data);
        }
        loadTestimonyData();
    }, []);

    return (
        <section id='testimony__container'>
            <h2 className="testimony__heading">What Our Clients Say</h2>
            <div className="testimony__wrapper">
                <div className="t__wrapper--container">
                    {testimonyData.slice(0, 3).map((testimony, index) => (
                        <div key={index} className="testimony__card">
                            <div className="t__img__wrapper">
                                <img src={testimony.testimony__img__url} alt="" className="t__img" />
                            </div>
                            <h4 className="t__name">{testimony.name}</h4>
                            <p className="t__descr">{testimony.testimony}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimony;
