import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={() => openInNewTab('https://www.linkedin.com/in/nanthakumarjj/')} >
      <BsLinkedin />
    </div>
    <div onClick={() => openInNewTab('https://github.com/jjnanthakumar/')} >
      <BsGithub />
    </div>
    <div onClick={() => openInNewTab('https://twitter.com/')}>
      <BsTwitter />
    </div>
    <div onClick={() => openInNewTab('https://www.facebook.com/nanthakumar.jj.98/')}>
      <FaFacebookF />
    </div>
    <div onClick={() => openInNewTab('https://www.instagram.com/jjnanthakumar/')}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
