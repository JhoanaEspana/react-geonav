import React from 'react';
import Button from '../../Buton/Button';
import './HeaderContent';
import imgbanner from '../../../assets/imgbanner.png';
import './HeaderContent.css'


const HeaderContent = () => {
  return (
      <section className='header-content'>
        <div className='header-content_text'>
          <h1>Unlock the full potential of location data</h1>
          <p>With our API, you can find the exact location of any place and use that information to power your applications and services.</p>
          <Button title={'Get Started'} />
          <p>Not sure when to start? <a href='#'>Learn more</a></p> 
        </div> 
        <div className='header-content-img'>
          <img src={imgbanner} alt='location' />
        </div>
      </section>
  );
};

export default HeaderContent;
