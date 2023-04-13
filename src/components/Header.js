/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return <header className='py-8 '>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <div>
          <h1 className='text-gradient text-2xl cursor-pointer'>
            Raphael<br />
          </h1>
          <h1 className='text-3xl cursor-pointer'>Busquet</h1>
        </div>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
    </header>;
};

export default Header;
