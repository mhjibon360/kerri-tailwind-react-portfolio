import Blog from "../components/blog/Blog";
import Details from "../components/details/Details";
import Detailsbanner from "../components/detailsbanner/Detailsbanner";
import Navbar from "../components/navbar/Navbar";

const Blogdetails = () => {
  return (
    <div>
      <Navbar />
      <Detailsbanner />
      <Details />
      <Blog />
    </div>
  );
};

export default Blogdetails;
