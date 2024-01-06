
import InputFiled from "../../../components/inputFiled/InputFiled";
import Title from "../../../components/title/Title";

const NewsLetter = () => {
  return (
    <section className="my-20 max-w-2xl mx-auto 2xl:p-0 px-4">
      <div className="flex justify-center mb-12">
        <Title> News Letter</Title>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
       <input type="email" required placeholder="Enter your email" className="border shadow-sm rounded-l-md w-full sm:px-2 px-1 py-[13px]  focus-within:outline-secondary_color" />
        <button type="submit" className="sm:px-2 px-3 sm:py-3 py-[11px] active:scale-95 hover:bg-transparent hover:text-red-500  transition-all ease-linear duration-150 border-2 border-red-500 bg-red-500 rounded-r-md text-white text-base font-semibold">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
