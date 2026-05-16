import React from "react";

const Title = ({ normalheading, boldheading, desc }) => {
  return (
    <div className="mx-auto mb-12 w-full text-center md:w-[600px]">
      <h2 className="font-montserrat mb-4 text-3xl font-bold capitalize">
        <span className="font-normal">{normalheading}</span> {boldheading}
      </h2>
      <p className="text-darkblack leading-relaxed dark:text-white">{desc}</p>
    </div>
  );
};

export default Title;
