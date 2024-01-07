import About from "./About";
import ContactUs from "./ContactUs";
import Count from "./Count";
import Faq from "./Faq";
import Hero from "./Hero";
import OurBestServiceProvider from "./OurBestServiceProvider";
import PopularService from "./PopularService";
import QualityWork from "./QualityWork";

import NewsLetter from "./newsLetter/NewsLetter";
import Review from "./review/Review";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <PopularService></PopularService>
      <OurBestServiceProvider></OurBestServiceProvider>
      <Count></Count>
      <QualityWork></QualityWork>
      <Review></Review>
      <Faq></Faq>
      <ContactUs></ContactUs>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
