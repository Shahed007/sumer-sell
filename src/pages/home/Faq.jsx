import { useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import { accordion } from "../../../util/api";
import Accordion from "../../components/accordion/Accordion";

const Faq = () => {
  const [data] = useState(accordion);
  return (
    <section className="my-20 ">
      <Container>
        <div className="flex justify-center items-center ">
          <Title>FAQ</Title>
        </div>

        <div className="mt-12 grid grid-cols-1  gap-7">
          <div className="flex flex-col gap-2">
            {data?.map((item) => (
              <Accordion key={item.id} {...item}></Accordion>
            ))}
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
