import React from 'react';

import DiscoverCard from './DiscoverCard';

const Discover = () => {
  return (
    <div className='p-16'>
    <h1 className="text-center text-4xl mb-10">Discover</h1>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <DiscoverCard />
        <div>
        <img src='https://ecstaticexplorers.com/wp-content/uploads/2024/08/cq5dam.web_.1024.576.jpeg' alt='discover' className='w-[320px] text-center'/>
        </div>       
      <DiscoverCard/>
      <DiscoverCard/>
      <DiscoverCard/>
    </div>
    </div>
  );
};

export default Discover;