import Title from "../global/Title";
import { works } from "../../assets";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Work = () => {
  const [active, setActive] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered =
    active === "all" ? works : works.filter((item) => item.category === active);

  const selected = selectedIndex !== null ? filtered[selectedIndex] : null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <Title
          normalheading="Our"
          boldheading="Works"
          desc="It is a long established fact that a reader will be of a page when established fact looking at its layout"
        />

        <ul className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap">
          <li>
            <button className="work-btn" onClick={() => setActive("all")}>
              all
            </button>
          </li>
          <li>
            <button className="work-btn" onClick={() => setActive("seo")}>
              seo
            </button>
          </li>
          <li>
            <button className="work-btn" onClick={() => setActive("webdesign")}>
              webdesign
            </button>
          </li>
          <li>
            <button className="work-btn" onClick={() => setActive("work")}>
              work
            </button>
          </li>
          <li>
            <button className="work-btn" onClick={() => setActive("wordpress")}>
              wordpress
            </button>
          </li>
        </ul>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  className="rounded-sm transition-transform duration-500 group-hover:scale-110"
                  alt=""
                />
                <div className="work-overly"></div>
                <div className="work-overly-content">
                  <span className="text-sm font-normal text-white/50 capitalize">
                    {item.category}
                  </span>
                  <h3 className="font-montserrat text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative w-full max-w-4xl px-5"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.image}
                  className="w-full rounded-lg"
                  alt=""
                />

                <button
                  onClick={closeLightbox}
                  className="absolute top-3 right-3 text-3xl text-white"
                >
                  <IoClose />
                </button>

                <button
                  onClick={prevImage}
                  className="bg-dark2 absolute top-1/2 -left-10 h-10 w-10 -translate-y-1/2 rounded-sm text-4xl text-white"
                >
                  <IoIosArrowBack />
                </button>

                <button
                  onClick={nextImage}
                  className="bg-dark2 absolute top-1/2 -right-10 h-10 w-10 -translate-y-1/2 rounded-sm text-4xl text-white"
                >
                  <IoIosArrowForward />
                </button>

                <div className="mt-3 text-center text-white">
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <p className="text-sm text-white/60 capitalize">
                    {selected.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
