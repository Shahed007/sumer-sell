import Swal from "sweetalert2";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import InputFiled from "../../components/inputFiled/InputFiled";
import ButtonPrimary from "../../components/button/ButtonPrimary";

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
          }
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  // const handaleSubmit = (e) => {
  //   e.preventDefault();

  //   Swal.fire({
  //     title: "Masse send success fully",
  //     text: "Please wetting for response",
  //     icon: "success",
  //   });
  // };
  return (
    <section className="mb-20">
      <Container>
        <div className="flex justify-center items-center mb-12">
          <Title>Contact Us</Title>
        </div>

        <div className="md:max-w-3xl mx-auto">
          <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <InputFiled
                  required={true}
                  type="text"
                  name="form_text"
                  placeholder="Enter your Name"
                ></InputFiled>
              </div>
              <div>
                <InputFiled
                  required={true}
                  type="text"
                  name="form_email"
                  placeholder="Enter your Email"
                ></InputFiled>
              </div>
            </div>
            <div className="h-52 ">
              <textarea
                required
                name="message"
                cols="30"
                rows="10"
                className="shadow-sm border min-h-[200px] resize-none w-full p-2 rounded-md focus-within:outline-secondary_color focus-within:shadow-lg focus-within:transition-all focus-within:duration-200"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="mt-12 flex justify-center items-center">
              <ButtonPrimary
                type="submit"
                disabled={loading}
                className="text-center justify-center items-center h-12 w-56"
              >
                {loading ? <span className="loader "></span> : "Send Message"}
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
