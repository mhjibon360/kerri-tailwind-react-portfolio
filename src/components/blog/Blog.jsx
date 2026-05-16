import Title from "../global/Title";
import b1 from "../../assets/blogs/1.webp";
import { blogs } from "../../assets";
const Blog = () => {
  return (
    <section id="blog" className="bg-lightwhite dark:bg-darkblack py-20">
      <div className="container">
        <Title
          normalheading="Our"
          boldheading="Blog"
          desc="It is a long established fact that a reader will be of a page when established fact looking at its layout"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* single blog */}
          {blogs.map(({ id, image, title, date, author, description }) => (
            <div
              key={id}
              className="dark:bg-darklight flex flex-col gap-3 rounded-md bg-white p-2 shadow-md"
            >
              <img
                src={image}
                className="h-60 w-full rounded-md object-cover"
                alt="blog image"
              />
              <div className="flex flex-col gap-3 px-2 md:px-8">
                <a href="/blog-details" rel="noopener noreferrer">
                  <h3 className="font-montserrat hover:text-primary text-xl font-semibold capitalize transition-all duration-700 dark:text-white">
                    {title}
                  </h3>
                </a>
                <h4 className="text-darklight text-base font-light dark:text-white">
                  {date} <span className="text-primary">{author}</span>
                </h4>
                <p className="text-base leading-relaxed dark:text-white">
                  {description}
                </p>
                <a href="#" rel="noopener noreferrer" className="pb-4">
                  <span className="group hover:text-primary relative pb-2 text-base font-medium capitalize">
                    read more...
                    <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
