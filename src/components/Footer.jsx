import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container '>
        <p>
          © 2024 <strong>DSC Purulia</strong>by Sandip Maji
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
