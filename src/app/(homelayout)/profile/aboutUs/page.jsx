import ProfileHeading from "@/components/ui/ProfileHeading";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className=" container mx-auto">
      <div className=" relative bg-[url('https://i.ibb.co/Xfpkf4cZ/About-Us.webp')] w-full h-96 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black/50 "></div>
        <div className="  flex items-center justify-center gap-10 z-20">
          <div className="w-1 h-20  bg-primary-green"></div>
          <ProfileHeading>About Us</ProfileHeading>
        </div>
      </div>

      <div className="my-12 max-w-5xl mx-auto space-y-8 px-4 sm:px-8 lg:max-xl:px-16">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatem odit minima quis. Accusamus ratione minima eos cumque,
          voluptatibus nihil quia assumenda omnis nulla cum odio modi
          consequuntur molestias nisi atque alias distinctio laborum tempora
          quidem fugiat. Quisquam provident asperiores doloremque sint aut eaque
          reiciendis labore facilis veniam consectetur soluta error amet, optio
          unde fuga. Dolorem incidunt qui, enim at voluptate cum neque obcaecati
          laborum culpa. Pariatur corrupti adipisci obcaecati?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          similique non incidunt rerum fugit accusantium, deleniti odio nulla
          doloribus quaerat pariatur earum laborum sed quam tempore. Vero,
          consequatur facere vitae praesentium labore numquam omnis nemo impedit
          doloremque perferendis ducimus in ut qui obcaecati nesciunt quia
          itaque cupiditate voluptates! Maxime at, dolorem aut quos velit labore
          pariatur perspiciatis reprehenderit recusandae hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          expedita nesciunt exercitationem perferendis perspiciatis ut earum
          nisi a nostrum nam?
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
