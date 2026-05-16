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
            <a
              href="https://www.dribble.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble profile"
              className="footer-social"
            >
              <FaDribbble />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              className="footer-social"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkdin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkdin profile"
              className="footer-social"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter profile"
              className="footer-social"
            >
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
