import Container from "../../components/Container";
import Title from "../../components/title/Title";

const Faq = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-center items-center">
          <Title>FAQ</Title>
        </div>
        <div className="mt-12">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How do I schedule a service appointment?
            </div>
            <div className="collapse-content">
              <p>
                To schedule a service appointment, you can easily book online
                through our website. Navigate to the "Book Now" section, select
                the type of service you need, provide necessary details, and
                choose a convenient date and time. Alternatively, you can
                contact our customer service team at [your contact number] for
                assistance in scheduling your appointment.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What areas do you serve for your home services?
            </div>
            <div className="collapse-content">
              <p>
                We currently provide our home services in [List of Cities or
                Regions]. If you are unsure whether we cover your area, please
                check our service area map on the homepage or contact our
                customer support team for more information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I track the status of my service request?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We offer a quick and easy cost estimate feature on
                our website. Visit the "Cost Estimate" section, enter relevant
                details such as service type and property size, and receive an
                instant estimate. Keep in mind that this is a general estimate,
                and the final cost may vary based on specific conditions at your
                location.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I track the status of my service request?
            </div>
            <div className="collapse-content">
              <p>
                You can easily track the status of your service request by
                logging into your account on our website. Once logged in,
                navigate to the "My Requests" section, where you will find
                real-time updates on the status of your service request,
                including whether it is pending, in progress, or completed.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What safety measures are in place during the COVID-19 pandemic?
            </div>
            <div className="collapse-content">
              <p>
                Your safety is our top priority. We have implemented rigorous
                safety measures in accordance with public health guidelines. Our
                service professionals undergo regular health screenings, wear
                protective equipment, and follow strict hygiene protocols.
                Additionally, we encourage contactless transactions, such as
                online payments, to minimize physical contact during service
                appointments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
