import React, { useEffect, useState } from 'react';
import '../App.css';
const Hero = () => {
  const [event, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/getEvents')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div>
        <h2>Upcoming Events</h2>

        {event.map((Events) => (
          <div key={Events.id}>
            <div>
            </div>

            <div id="events">
              <ul>
                <li><h3>{Events.title}</h3></li>
              </ul>
              <ul>
              <p>{Events.description}</p>
              <p>{Events.date}</p>
              <p>{Events.location}</p>
              <p>{Events.price}</p>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
