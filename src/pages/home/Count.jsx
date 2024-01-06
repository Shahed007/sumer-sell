import CountUp from "react-countup";
import Container from "../../components/Container";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDesignServices, MdOutlinePendingActions } from "react-icons/md";

const Count = () => {
  return (
    <section className="mt-20 bg-gradient-to-l from-secondary_color/80 to-secondary_color py-4">
      <Container>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col  justify-center items-center">
            <FaPeopleGroup className="lg:text-6xl text-4xl text-white mb-3" />
            <div className="lg:text-4xl text-3xl font-bold text-white flex items-center gap-2">
              <CountUp start={0} end={40000} duration={10}></CountUp> +
            </div>
            <h4 className="text-white font-medium lg:text-3xl text-2xl">Happy Client</h4>
          </div>
          <div className="flex flex-col  justify-center items-center">
            <MdDesignServices className="lg:text-6xl text-4xl text-white mb-3" />
            <div className="lg:text-4xl text-3xl font-bold text-white flex items-center gap-2">
              <CountUp start={0} end={10000} duration={10}></CountUp> +
            </div>
            <h4 className="text-white font-medium md:text-3xl text-2xl">
              Service Provider
            </h4>
          </div>
          <div className="flex flex-col  justify-center items-center">
            <MdOutlinePendingActions className="lg:text-6xl text-4xl text-white mb-3" />
            <div className="lg:text-4xl text-3xl font-bold text-white flex items-center gap-2">
              <CountUp start={0} end={5000} duration={10}></CountUp> +
            </div>
            <h4 className="text-white font-medium lg:text-3xl text-2xl">Pending Work</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Count;
