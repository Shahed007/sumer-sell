import Container from "../../components/Container";
import Title from "../../components/title/Title";
import img1 from "../../assets/gallery/1.webp";
import img2 from "../../assets/gallery/2.webp";
import img3 from "../../assets/gallery/3.webp";
import img4 from "../../assets/gallery/4.webp";
import img6 from "../../assets/gallery/6.webp";
import img8 from "../../assets/gallery/8.webp";
import GalleryItem from "../../components/galeryItem/GalleryItem";

const OurBestServiceProvider = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-center items-center mb-12">
          <Title>Our Best Service Provider</Title>
        </div>
      </Container>
      <div className="grid grid-cols-12">
        <div className="sm:h-72 h-48 md:col-span-3 col-span-6">
          <GalleryItem img={img1} name="Alexander"></GalleryItem>
        </div>
        <div className="sm:h-72 h-48 md:col-span-6 col-span-6">
          <GalleryItem img={img2} name="Benjamin"></GalleryItem>
        </div>
        <div className="sm:h-72 h-48 md:col-span-3 col-span-12">
          <GalleryItem img={img3} name="Christopher"></GalleryItem>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="sm:h-72 h-48 md:col-span-3 col-span-6">
          <GalleryItem img={img4} name="Emily"></GalleryItem>
        </div>
        <div className="sm:h-72 h-48 md:col-span-6 col-span-6">
          <GalleryItem img={img8} name="Sophia"></GalleryItem>
        </div>
        <div className="sm:h-72 h-48 md:col-span-3 col-span-12">
          <GalleryItem img={img6} name="Olivia"></GalleryItem>
        </div>
      </div>
    </section>
  );
};

export default OurBestServiceProvider;
