import { useState } from "react";
import Container from "../../components/Container";
import InputFiled from "../../components/inputFiled/InputFiled";
import { Rating } from "@smastrom/react-rating";
import feedBackImage from "../../assets/image/feedback.jpg";

import "@smastrom/react-rating/style.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import ButtonPrimary from "../../components/button/ButtonPrimary";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  return (
    <section className="my-16">
      <PageHeader>Give Us Your Valuable FeedBack</PageHeader>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 md:gap-0 gap-8">
          <div className="border shadow-sm p-4 rounded-sm">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputFiled
                  type="text"
                  name="name"
                  placeholder="Full Name"
                ></InputFiled>
                <InputFiled
                  type="email"
                  name="email"
                  placeholder="Email"
                ></InputFiled>
              </div>
              <div className="flex justify-between items-center shadow-sm border px-2 py-1">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating}
                  onChange={setRating}
                />
                <h4 className="font-bold text-xl">{rating}</h4>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  cols="30"
                  rows="10"
                  className="shadow-sm border h-[150px] overflow-y-auto dark:text-white dark:bg-dark_component resize-none w-full p-2 rounded-md focus-within:outline-secondary_color focus-within:shadow-lg focus-within:transition-all focus-within:duration-200"
                  placeholder="Enter your FeedBack"
                ></textarea>
              </div>
              <div>
                <ButtonPrimary>Send</ButtonPrimary>
              </div>
            </form>
          </div>
          <div className=" md:rounded-r-sm md:rounded-l-none md:rounded-t-none md:rounded-b-none rounded-l-sm rounded-t-sm rounded-b-sm border shadow-sm">
            <img
              className="h-full w-full md:rounded-r-sm md:rounded-l-none md:rounded-t-none md:rounded-b-none rounded-l-sm rounded-t-sm rounded-b-sm"
              src={feedBackImage}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeedBack;
