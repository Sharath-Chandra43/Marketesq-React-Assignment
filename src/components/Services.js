import React, { useEffect, useState } from 'react';
import ServiceContainer from './ServiceContainer';



const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://www.jsonkeeper.com/b/7M3R');
        if (!response.ok) {
          throw new Error('Failed to fetch services data');
        }
        const json = await response.json();
        setServices(json);
        console.log(json);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="p-10">
      <h1 className="font-mono text-3xl text-center text-black mb-9">Services</h1>
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {services.length > 0 ? (  // Check if services array has elements
          services.map((service) => (
            <div key={service?.id} className="container mx-auto flex flex-wrap">
              <ServiceContainer key={service.id} data={service} />
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </div>
  );
};

export default Services;