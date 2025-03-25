import React from 'react'

export default function HexButton({ children = "Launch Simulator", onClick }) {
  return (
    <div className='large-shadow large-shadow-hover'>
      <div className="hex-button-wrapper" onClick={onClick}>
        {children}
      </div>
    </div>
  );
}