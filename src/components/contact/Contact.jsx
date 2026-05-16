import { contacts } from "../../assets";
import Title from "../global/Title";
import { CiMobile4 } from "react-icons/ci";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <Title
          normalheading="Contact"
          boldheading="Us"
          desc="It is a long established fact that a reader will be of a page when established fact looking at its layout"
        />
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* single contact info */}
          {contacts.map(({ id, icon: Icon, title, info }) => (
            <div key={id} className="flex flex-col gap-4 text-center">
              <div className="inline-flex justify-center">
                <Icon className="text-primary text-2xl md:text-4xl" />
              </div>
              <div>
                <h3 className="font-montserrat text-lg font-semibold">
                  {title}
                </h3>
                <p className="text-sm">{info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* form */}
        <form className="mt-20 flex flex-col gap-6">
          <div className="flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Your name..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="Your email..."
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Your Subject.."
            />
          </div>
          <div>
            <textarea
              className="form-control"
              rows={6}
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="bg-primary cursor-pointer rounded-md px-8 py-4 text-sm font-normal text-white uppercase"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
