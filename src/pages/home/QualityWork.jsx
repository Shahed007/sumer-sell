import Container from "../../components/Container";
import Title from "../../components/title/Title";
import Quality from "../../assets/image/quality-work.webp";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegCalendarCheck, FaShieldAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import {MdOutlinePayment} from "react-icons/md"

const QualityWork = () => {
  return (
    <section
      className="mt-20 py-10 relative"
      style={{
        backgroundImage: `url(${Quality})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-secondary_color/70  top-0 left-0 absolute w-full h-full"></div>
      <div className="relative z-50">
        <Container>
          <div className="flex justify-center items-center mb-12">
            <Title className="text-white border-b-white">
              Quality Work Every Time
            </Title>
          </div>

          <div className="max-w-2xl mx-auto bg-primary_color/50 backdrop-blur-md p-2 sm:p-4 rounded-md border shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-5 sm:text-start text-center">
              Why Choose Us
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 sm:flex-row flex-col">
                <p className="text-4xl text-purple-500">
                  <FaRegCalendarCheck />
                </p>

                <h4 className="sm:text-lg text-base font-medium text-black  sm:text-start text-center">
                  Offers Impeccable Customer Support
                </h4>
              </div>
              <div className="flex items-center gap-3 sm:flex-row flex-col">
                <p className="text-4xl text-purple-500">
                  <RiCustomerService2Line />
                </p>

                <h4 className="sm:text-lg text-base font-medium text-black  sm:text-start text-center">
                  Connects you to Verified and Trained Technicians
                </h4>
              </div>
              <div className="flex items-center gap-3 sm:flex-row flex-col">
                <p className="text-4xl text-purple-500">
                  <FaShieldAlt />
                </p>

                <h4 className="sm:text-lg text-base font-medium text-black  sm:text-start text-center">
                  Guarantees Secure Transactions
                </h4>
              </div>
              <div className="flex items-center gap-3 sm:flex-row flex-col">
                <p className="text-4xl text-purple-500">
                  <AiFillLike />
                </p>

                <h4 className="sm:text-lg text-base font-medium text-black  sm:text-start text-center">
                  Provides High-quality, Reliability and Safety
                </h4>
              </div>
              <div className="flex items-center gap-3 sm:flex-row flex-col">
                <p className="text-4xl text-purple-500">
                <MdOutlinePayment />
                </p>

                <h4 className="sm:text-lg text-base font-medium text-black  sm:text-start text-center">
                Ensures Cost-effectiveness
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default QualityWork;
