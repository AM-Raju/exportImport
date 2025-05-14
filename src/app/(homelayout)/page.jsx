import CoreValues from "@/components/home/coreValues/CoreValues";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";
import HomeContact from "@/components/home/homeContact/HomeContact";
import Slider from "@/components/home/slider/Slider";
import VideoGallery from "@/components/home/videoGallery/VideoGallery";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import WorldMap from "@/components/home/worldMap/WorldMap";

export const metadata = {
  title: "Home | MK Engineering",
  description: "",
};

const homePage = () => {
  return (
    <div>
      <Slider></Slider>
      <CoreValues></CoreValues>
      <FeaturedProducts></FeaturedProducts>
      <WorldMap></WorldMap>
      <WhyChooseUs></WhyChooseUs>
      <VideoGallery></VideoGallery>
      <HomeContact></HomeContact>

      <div className="h-52"></div>
    </div>
  );
};

export default homePage;
