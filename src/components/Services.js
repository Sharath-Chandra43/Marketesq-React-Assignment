import React, { useEffect, useState } from 'react';
import { IoWifiOutline, IoHomeSharp, IoBicycle, IoMapSharp, IoCartSharp } from 'react-icons/io5';
import { FaBurger } from "react-icons/fa6";
import { FaCarAlt, FaFlag } from "react-icons/fa";

const ServicesContainer = ({ icon, heading, description }) => {
  const IconComponent = {
    IoWifiOutline: IoWifiOutline,
    FaBurger: FaBurger,
    IoHomeSharp: IoHomeSharp,
    FaCarAlt: FaCarAlt,
    IoBicycle: IoBicycle,
    IoMapSharp: IoMapSharp,
    FaFlag: FaFlag,
    IoCartSharp: IoCartSharp
  }[icon];

  return (
    <div className="flex flex-wrap">
      {IconComponent && <IconComponent />}
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

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
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="p-52">
      <h1 className="font-mono text-3xl text-center text-black">Services</h1>
      <div className="flex flex-wrap">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <ServicesContainer key={service.id} data={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;