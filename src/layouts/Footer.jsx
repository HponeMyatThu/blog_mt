import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ background: 'black', color: 'white', marginTop: '50px' }}>
      <div style={{ width: '100%', overflow: 'auto', display: 'flex' }}>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
        <div className='mx-2 px-2'>nav</div>
      </div>
      <div
        style={{
          height: '100px',
          width: '100%',
          background: 'black',
          zIndex: '10',
          transform: 'translateY(-17px)',
        }}
      >
      </div>

      <div style={{ width: '70%', margin: '0px auto' }}>
        <h1
          style={{
            margin: '10px auto',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          NORDIC ROSE
        </h1>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.{' '}
        </p>
      </div>
      <div
        style={{
          margin: '10px auto',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <a style={{ margin: '0px 5px', textDecoration: 'underline' }}>
          Facebook
        </a>
        <a style={{ margin: '0px 5px', textDecoration: 'underline' }}>
          Instagram
        </a>
        <a style={{ margin: '0px 5px', textDecoration: 'underline' }}>
          Twitter
        </a>
      </div>
      <div
        style={{
          margin: '10px auto',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p style={{ marginBottom: '-5px' }}>© 2012–2020 Nordic Rose Co. </p>
        <p style={{ marginTop: '-5px' }}>all rights reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
