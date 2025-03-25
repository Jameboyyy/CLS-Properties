import React, { useState, useEffect } from 'react';
import './ol.css'
import { fetchOurLeaders } from '../../services/api/ol';

const Ol = () => {

    const [leaderData, setLeaderData] = useState([]);

    useEffect(() => {
        async function loadLeaderData() {
            const data = await fetchOurLeaders();
            setLeaderData(data);
        }
        loadLeaderData();
    }, []);

    return (
        <section className='ol__container'>
            <h2 className="ol__heading">Our Leaders</h2>
            <div className="ol__wrapper">
                {leaderData.slice(0, 10).map((leader, index) => (
                    <div key={index} className="ol__card">
                        <div className="ol__img--wrapper">
                            <img src={leader.leader__img__url} alt="" className="ol__card--img" />
                        </div>
                        <h3 className="ol__card--name">{leader.name}</h3>
                        <h5 className="ol__card--position">{leader.position}</h5>
                        <h5 className="ol__card--dates">
                            {leader.startofwork}-{leader.endofwork || 'Present'}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Ol;
