import { lazy, Suspense } from "react";
import { CSSTransition } from "react-transition-group";
import Animation from "../../components/animation/Animation";

// Lazy load your components
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const PopularService = lazy(() => import("./PopularService"));
const OurBestServiceProvider = lazy(() => import("./OurBestServiceProvider"));
const Count = lazy(() => import("./Count"));
const QualityWork = lazy(() => import("./QualityWork"));
const Review = lazy(() => import("./review/Review"));
const Faq = lazy(() => import("./Faq"));
const ContactUs = lazy(() => import("./ContactUs"));
const NewsLetter = lazy(() => import("./newsLetter/NewsLetter"));

const Home = () => {
  return (
    <Suspense fallback={<Animation></Animation>}>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <Hero />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <About />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <PopularService />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <OurBestServiceProvider />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <Count />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <QualityWork />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <Review />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <Faq />
      </CSSTransition>
      <CSSTransition
        in={true} // Set to true to apply the animation when the component enters
        timeout={500} // Duration of the animation in milliseconds
        classNames="escalation" // CSS class for the animation
        unmountOnExit
      >
        <ContactUs />
      </CSSTransition>

      <CSSTransition
        in={true}
        timeout={500}
        classNames="escalation"
        unmountOnExit
      >
        <NewsLetter />
      </CSSTransition>
    </Suspense>
  );
};

export default Home;
