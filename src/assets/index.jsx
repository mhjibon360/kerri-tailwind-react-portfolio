import heroiamge from "./hero-bg.webp";
import aboutprofile from "./about.webp";
import { FaChartLine } from "react-icons/fa6";
import { BsCupHot } from "react-icons/bs";
import { RiUploadCloud2Line } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { BiCustomize } from "react-icons/bi";
import w1 from "./works/1.webp";
import w2 from "./works/2.webp";
import w3 from "./works/3.webp";
import w4 from "./works/4.webp";
import w5 from "./works/5.webp";
import w6 from "./works/6.webp";
export { heroiamge, aboutprofile };
export const navLinks = [
  {
    id: 1,
    title: "home",
    link: "home",
    delay: 0.2,
  },
  {
    id: 2,
    title: "about",
    link: "about",
    delay: 0.4,
  },
  {
    id: 3,
    title: "services",
    link: "services",
    delay: 0.6,
  },
  {
    id: 4,
    title: "client",
    link: "client",
    delay: 0.8,
  },
  {
    id: 5,
    title: "portfolio",
    link: "portfolio",
    delay: 1.1,
  },
  {
    id: 6,
    title: "blog",
    link: "blog",
    delay: 1.3,
  },
  {
    id: 7,
    title: "contact",
    link: "contact",
    delay: 1.5,
  },
];

export const services = [
  {
    id: 1,
    icon: FaChartLine,
    title: "Graphic Design",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
  {
    id: 2,
    icon: BsCupHot,
    title: "Unlimited Color",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
  {
    id: 3,
    icon: RiUploadCloud2Line,
    title: "Media Marketing",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
  {
    id: 4,
    icon: LuLayers,
    title: "Unlimited Wifi",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
  {
    id: 5,
    icon: CgWebsite,
    title: "Responsive Design",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
  {
    id: 6,
    icon: BiCustomize,
    title: "Easy to customize",
    description:
      "There are many variations of passages of but the majority have suffered alteration in some form.",
  },
];

export const works = [
  {
    id: 1,
    image: w1,
    category: "seo",
    title: "Digital Marketing Strategy",
  },
  {
    id: 2,
    image: w2,
    category: "webdesign",
    title: "Creative Portfolio Design",
  },
  {
    id: 3,
    image: w3,
    category: "work",
    title: "Business Landing Page",
  },
  {
    id: 4,
    image: w4,
    category: "wordpress",
    title: "Modern WordPress Website",
  },
  {
    id: 5,
    image: w5,
    category: "seo",
    title: "SEO Optimization Project",
  },
  {
    id: 6,
    image: w6,
    category: "webdesign",
    title: "Responsive UI Design",
  },
];

import b1 from "./blogs/1.webp";
import b2 from "./blogs/2.webp";
import b3 from "./blogs/3.webp";

export const blogs = [
  {
    id: 1,
    image: b1,
    title: "There are many variations",
    date: "11 March 2018",
    author: "Kerri",
    description:
      "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
  },
  {
    id: 2,
    image: b2,
    title: "Contrary to popular belief",
    date: "18 March 2018",
    author: "Kerri",
    description:
      "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
  },
  {
    id: 3,
    image: b3,
    title: "Lorem Ipsum is not simply",
    date: "22 March 2018",
    author: "Kerri",
    description:
      "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
  },
];

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const contacts = [
  {
    id: 1,
    icon: FiPhoneCall,
    title: "Call Us On",
    info: "+985 123 7856",
  },
  {
    id: 2,
    icon: MdOutlineEmail,
    title: "Email Us At",
    info: "Website.Kerri@gmail.com",
  },
  {
    id: 3,
    icon: IoLocationOutline,
    title: "Visit Office",
    info: "202, Grasselli Street, Conway.",
  },
];
