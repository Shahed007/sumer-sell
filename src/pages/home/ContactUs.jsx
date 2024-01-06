import Swal from "sweetalert2";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import InputFiled from "../../components/inputFiled/InputFiled";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_o4zckjj",
        "template_sowrg2o",
        form.current,
        "Nnx00uEhziE8ovVZD"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setLoading(false);
            Swal.fire({
              title: "Masse send success fully",
              text: "Please wetting for response",
              icon: "success",
            });
            e.target.reset();
          }
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <section className="mb-20">
      <Container>
        <div className="flex justify-center items-center mb-12">
          <Title>Contact Us</Title>
        </div>

        <div className="md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 ">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="grid grid-cols-1 gap-2 col-span-3 shadow-sm border rounded-l-md px-4 py-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputFiled
                required={true}
                type="text"
                name="form_text"
                placeholder="Enter your Name"
              ></InputFiled>

              <InputFiled
                required={true}
                type="email"
                name="form_email"
                placeholder="Enter your Email"
              ></InputFiled>
            </div>
            <div className="mt-6">
              <InputFiled
                required={true}
                type="text"
                name="subject"
                placeholder="Subject"
              ></InputFiled>
            </div>
            <div>
              <label htmlFor="" className="text-white">
                Message
              </label>
              <textarea
                required
                name="message"
                cols="30"
                rows="10"
                className="shadow-sm border h-[150px] overflow-y-auto dark:text-white dark:bg-dark_component resize-none w-full p-2 rounded-md focus-within:outline-secondary_color focus-within:shadow-lg focus-within:transition-all focus-within:duration-200"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className=" flex justify-start items-center">
              <ButtonPrimary
                type="submit"
                disabled={loading}
                className="text-center justify-center items-center h-12 w-28"
              >
                {loading ? <span className="loader "></span> : "Send "}
              </ButtonPrimary>
            </div>
          </form>
          <div className="bg-primary_color col-span-2 py-4 px-4 sm:px-8 flex flex-col justify-center gap-6 md:mt-0 mt-6 md:shadow-none shadow-sm md:border-none border md:rounded-none rounded-sm">
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <BsFillTelephoneFill className=" sm:text-2xl text-xl" />
              <h4 className="font-bold sm:text-lg text-base">+880183970327</h4>
            </div>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <MdEmail className="sm:text-2xl text-xl " />
              <h4 className="sm:text-lg text-base font-bold">mdshahed.contacts@gmail.com</h4>
            </div>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <FaMapLocationDot className="sm:text-2xl text-xl" />
              <h4 className="sm:text-lg text-base font-bold">Gazipur, Dahaka, Bangladesh</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
