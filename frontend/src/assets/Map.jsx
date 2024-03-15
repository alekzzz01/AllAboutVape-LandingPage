import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3602734911574!2d121.0544237760384!3d14.521373279009563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c965c2ef5795%3A0x21066ef4c6e20351!2sALL%20ABOUT%20VAPE!5e0!3m2!1sen!2sph!4v1709971374141!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
