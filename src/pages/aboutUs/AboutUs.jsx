import Container from "../../components/Container";
import PageHeader from "../../components/pageHeader/PageHeader";

const AboutUs = () => {
  return (
    <section className="mt-16">
      <PageHeader>About US</PageHeader>
      <Container>
        <div className="space-y-6 my-12">
          <div className="">
            <p className="text-base text-black">
              Welcome to HomeCareHub, your trusted partner in creating homes
              that radiate comfort, safety, and well-being. At HomeCareHub, we
              understand the importance of a well-maintained and harmonious
              living environment, and we're here to make that a reality for you.
            </p>
          </div>
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-black mb-4">Our Mission</h2>
            <p className="text-base text-black">
              We are on a mission to redefine home care by providing a seamless
              and comprehensive platform that connects homeowners with top-notch
              service providers. Whether it's plumbing, electrical work, garden
              cleaning, or any other home service, we strive to match you with
              skilled professionals who share our commitment to excellence.
            </p>
          </div>
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-black mb-4">
              Why Choose HomeCareHub?
            </h2>
            <p className="text-base text-black mb-4">
              <span className="font-bold">Expertise:</span> Our curated network
              of service providers comprises experienced professionals who excel
              in their respective fields.
            </p>
            <p className="text-base text-black mb-4">
              <span className="font-bold">Convenience:</span> Booking a service
              with HomeCareHub is easy and convenient. Simply browse our
              services, choose the one that suits your needs, and schedule an
              appointment at your convenience.
            </p>
            <p className="text-base text-black mb-4">
              <span className="font-bold">Reliability:</span> We prioritize
              reliability and transparency. Our service providers undergo
              thorough screening to ensure that you receive reliable and
              trustworthy assistance for your home.
            </p>
          </div>
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-black mb-4">
              What Sets Us Apart?
            </h2>
            <p className="text-base text-black mb-4">
              At HomeCareHub, we believe in fostering long-lasting
              relationships. Our dedication to customer satisfaction, paired
              with cutting-edge technology, allows us to deliver unparalleled
              service experiences. We're not just a service provider; we're your
              partner in maintaining the heart of your home.
            </p>
          </div>
          <div>
            <h2 className="sm:text-xl text-lg font-bold text-black mb-4">
              Connect With Us:
            </h2>
            <p className="text-base text-black mb-4">
              Have questions or need assistance? Our customer support team is
              ready to help. Contact us anytime through our website, and let us
              take care of your home needs. Thank you for choosing HomeCareHub –
              where your home's well-being is our top priority.
            </p>
            <p className="text-base text-black">
              Welcome to a world of seamless home care solutions!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
