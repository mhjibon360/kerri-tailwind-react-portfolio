import { motion } from "motion/react";
const Detailsbanner = () => {
  return (
    <section  id="home" className="details-hero flex h-[50vh] w-full flex-col justify-center text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mx-auto flex w-full flex-col gap-4 text-white md:w-[600px]"
        >
          <h4 className="font-montserrat text-2xl capitalize">
            category:{" "}
            <span className="text-primary lowercase">design</span>{" "}
          </h4>
          <h1 className="font-montserrat text-2xl font-normal md:text-4xl">
            exploring the future of minimalist design
          </h1>
          <p className=" leading-relaxed text-sm text-dark2 capitalize">
            may 20 2026 . <span>By Kerri</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Detailsbanner;
