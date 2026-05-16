import { aboutprofile } from "../../assets";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darklight py-10">
      <div className="container">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a href="#" rel="noopener noreferrer" className="footer-social">
              <FaDribbble />
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" className="footer-social">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" className="footer-social">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" className="footer-social">
              <FaTwitter />
            </a>
          </li>
        </ul>

        <p className="text-dark2 mt-8 block text-center">
          2026 &copy; Kerri. Design by MEHEDI HASSAN JIBON.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
