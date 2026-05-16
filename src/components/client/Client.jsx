import React from "react";
import Title from "../global/Title";
import { TfiQuoteLeft } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import c1 from "../../assets/clients/c1.webp";

const Client = () => {
  return (
    <section id="client" className="bg-lightwhite dark:bg-darklight py-20">
      <div className="container">
        <Title
          normalheading="Our"
          boldheading="Client"
          desc="It is a long established fact that a reader will be of a page when established fact looking at its layout"
        />

        <Swiper spaceBetween={30} slidesPerView={1}>
          {/* single slide */}
          <SwiperSlide>
            <div className="mx-auto flex w-full flex-col justify-center gap-8 text-center md:w-3xl">
              <div className="text-primary inline-flex justify-center text-5xl">
                <TfiQuoteLeft />
              </div>

              <img
                src={c1}
                className="mx-auto h-20 w-20 rounded-full"
                alt="client image"
              />

              <p className="text-darkblack text-lg leading-relaxed font-normal italic dark:text-white">
                " The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here."
              </p>

              <span className="text-slate-500 dark:text-white">
                - Ebony verty,{" "}
                <span className="text-primary font-medium">Envato</span>
              </span>
            </div>
          </SwiperSlide>

          {/* future more slides */}
          <SwiperSlide>
            <div className="mx-auto flex w-full flex-col justify-center gap-8 text-center md:w-3xl">
              <div className="text-primary inline-flex justify-center text-5xl">
                <TfiQuoteLeft />
              </div>

              <img
                src={c1}
                className="mx-auto h-20 w-20 rounded-full"
                alt="client image"
              />

              <p className="text-darkblack text-lg leading-relaxed font-normal italic dark:text-white">
                " Another client review goes here. You can add dynamic data
                too."
              </p>

              <span className="text-slate-500 dark:text-white">
                - John Doe,{" "}
                <span className="text-primary font-medium">Google</span>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Client;
