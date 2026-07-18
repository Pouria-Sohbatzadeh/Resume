import React from 'react';

export default function ImgHolder({
  imgSize = '',
  imgAddress = '',
  imgAlt = '',
  className = ''
}) {
  return (
    <div className={`${imgSize} ${className} overflow-hidden`}>
      <img src={imgAddress} alt={imgAlt} className="w-full" />
    </div>
  );
}
