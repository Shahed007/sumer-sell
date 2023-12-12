import About from "./About";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import Hero from "./Hero";
import PopularService from "./PopularService";
import Review from "./review/Review";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <PopularService></PopularService>
      <Review></Review>
      <Faq></Faq>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
