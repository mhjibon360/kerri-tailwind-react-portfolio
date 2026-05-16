import { IoMdArrowUp } from "react-icons/io";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Arrowup = () => {
  const { scrollY, scrollYProgress } = useScroll();

  const [show, setShow] = useState(false);

  // show button after scroll
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShow(latest > 10);
    });
  }, [scrollY]);

  // smooth progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const circumference = 2 * Math.PI * 26;

  // circle progress
  const strokeDashoffset = useTransform(
    smoothProgress,
    [0, 1],
    [circumference, 0],
  );

  // scroll top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed right-10 bottom-10 z-50 lg:right-20 lg:bottom-20"
    >
      <div className="relative flex items-center justify-center">
        {/* Progress Circle */}
        <svg
          className="pointer-events-none absolute -rotate-90"
          width="60"
          height="60"
          viewBox="0 0 60 60"
        >
          {/* Background */}
          <circle
            cx="30"
            cy="30"
            r="26"
            stroke="#2a2a2a"
            strokeWidth="4"
            fill="transparent"
          />

          {/* Progress */}
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            stroke="#e65f78"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
        </svg>

        {/* Button */}
        <button
          aria-label="scroll to top"
          onClick={scrollTop}
          className="bg-darkblack inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg"
        >
          <IoMdArrowUp className="text-2xl" />
        </button>
      </div>
    </motion.div>
  );
};

export default Arrowup;
