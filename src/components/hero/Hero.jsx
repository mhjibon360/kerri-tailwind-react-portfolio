import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "motion/react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Mehedi Hassan Jibon",
        "Full stack Web Developer",
        "Graphics Designer",
        "AI Expert",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      backDelay: 900,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className="hero flex min-h-screen w-full flex-col justify-center text-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mx-auto flex w-full flex-col gap-6 text-white md:w-[600px]"
        >
          <h4 className="font-montserrat text-2xl capitalize">welcome</h4>
          <h1 className="font-montserrat text-4xl font-normal md:text-5xl">
            I'M <span ref={el} className="text-primary font-bold"></span>
          </h1>
          <p className="text-base leading-relaxed">
            It is a long established fact that a reader will be of a page when
            established fact looking at its layout.
          </p>
          <div className="mt-6">
            <a href="#" className="btn" rel="noopener noreferrer">
              download cv
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
