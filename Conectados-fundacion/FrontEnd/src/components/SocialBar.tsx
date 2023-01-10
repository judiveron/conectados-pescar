import React from 'react';
import '../styles/SocialBar.css';
const social = [
  {
    path: "mailto:conectados.fundation@gmail.com?subject=Quiero%20ayudar!",
    name: 'Gmail',
    classname: 'icon gmail',
    iclassname: 'fig fig-gmail',
    spanclassname: 'colorsocialG social-img',
  },
  {
    path: 'https://www.instagram.com/bancodealimentosbalcarce/',
    name: 'Instagram',
    classname: 'icon instagram',
    iclassname: 'fig fig-instagram',
    spanclassname: 'colorsocialI social-img',
  },
  {
    path: "https://api.whatsapp.com/send?phone=541133557184&text=¡Hola!%20Quiero%20colaborar%20con%20Conectados%20",
    name: 'Whatsapp',
    classname: 'icon whatsapp',
    iclassname: 'fig fig-whatsapp',
    spanclassname: 'colorsocialW social-img',
  },
];

const SocialBar = () => {
  return (
    <div className="social-container absolute">
      {social.map((page, index) => (
        <a
          key={index}
          href={page.path}
          className={page.classname}
          target="_blank"
          rel="noreferrer"
        >
          <span className={page.spanclassname}>
            <i className={page.iclassname}></i>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
