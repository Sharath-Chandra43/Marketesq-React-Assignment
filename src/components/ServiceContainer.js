import React from 'react';
import { IoWifiOutline, IoHomeSharp, IoBicycle, IoMapSharp, IoCartSharp } from 'react-icons/io5';
import { FaBurger } from "react-icons/fa6";
import { FaCarAlt, FaFlag } from "react-icons/fa";

const ServiceContainer = ({ data }) => {
  const { icon, heading, description } = data;

  const IconComponent = () => {
    switch (icon) {
      case 'IoWifiOutline':
        return <IoWifiOutline className='size-14  text-gray-400'/>;
      case 'FaBurger':
        return <FaBurger className='size-14  text-gray-400'/>;
      case 'IoHomeSharp':
        return <IoHomeSharp className='size-14  text-gray-400'/>;
      case 'FaCarAlt':
        return <FaCarAlt className='size-14  text-gray-400'/>;
      case 'IoBicycle':
        return <IoBicycle className='size-14  text-gray-400'/>;
      case 'IoMapSharp':
        return <IoMapSharp className='size-14  text-gray-400'/>;
      case 'FaFlag':
        return <FaFlag className='size-14  text-gray-400'/>;
      case 'IoCartSharp':
        return <IoCartSharp className='size-14 text-gray-400'/>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center">
        <div>
      <IconComponent className="  text-blue-500 mb-4 mt-6"/>
      </div>
      <div>
      <h3 className="text-xl font-bold mb-2 text-center">{heading}</h3>
      
      <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceContainer;