'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <div className="mobile-phone">
      <div className="status-bar"></div>
      <div className="screen">
        <iframe
          {...props}
          ref={setContentRef}
          src="https://datalawcompanion.org/"
          style={{
            width: '100%',
            border: 'none',
            height: '100%'
          }}
        >
          {/* {mountNode && createPortal(children, mountNode)} */}
        </iframe>
      </div>
      <div className="home-button"></div>
    </div>
  );
};

export default CustomIframe;
