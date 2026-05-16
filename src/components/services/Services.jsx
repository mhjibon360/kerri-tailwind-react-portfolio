import { services } from "../../assets";
import Title from "../global/Title";
import { GiChart } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services" className="bg-lightwhite dark:bg-darkblack py-20">
      <div className="container">
        <Title
          normalheading="Our"
          boldheading="Services"
          desc="It is a long established fact that a reader will be of a page when established fact looking at its layout"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* single services */}
          {services.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group dark:bg-darklight flex flex-col items-center justify-between gap-4 rounded-lg border border-slate-300 px-12 py-12 text-center"
            >
              <span className="text-primary text-3xl md:text-5xl">
                <Icon />
              </span>
              <h3 className="text-darkblack font-montserrat mb-0 text-xl font-semibold md:text-2xl dark:text-white">
                {title}
              </h3>
              <div className="bg-primary h-0.5 w-14 rounded-full transition-all duration-700 group-hover:w-18"></div>
              <p className="text-darkblack text-base leading-relaxed dark:text-white">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
