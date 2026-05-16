import React from "react";
import { aboutprofile } from "../../assets";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* left */}
          <Tilt>
            <div>
              <img
                src={aboutprofile}
                className="rounded-sm border p-1"
                alt="about profile image"
              />
            </div>
          </Tilt>
          {/* right */}
          <div className="flex flex-col justify-between gap-y-3 px-0 md:gap-y-0 md:px-8">
            <h2 className="font-montserrat text-3xl font-normal capitalize">
              <span className="text-darkblack font-semibold dark:text-white">
                About
              </span>{" "}
              Me
            </h2>
            <h3 className="font-montserrat text-2xl font-normal">
              Hello!{" "}
              <span className="text-primary font-medium">I'M Kerri Deo.</span>
            </h3>
            <p className="text-base leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="text-base leading-relaxed">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-base leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" rel="noopener noreferrer" className="social-link">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="social-link">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="social-link">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer" className="social-link">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
