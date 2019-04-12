import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.300734591226!2d24.02036641577723!3d49.81801267939303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae78ccd82f67d%3A0xe17b61fd3753d7b5!2z0KbQtdC90YLRgCDQqNC10L_RgtC40YbRjNC60L7Qs9C-INCj0JrQow!5e0!3m2!1suk!2sua!4v1555093347753!5m2!1suk!2sua"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen></iframe> 
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location;
