import React from "react";
import image from "../assets/background-2.jpg";

const HeroSection = () => {
  return (
    <div>
      <div
        className="w-[100%] h-[800px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "auto",
          backgroundRepear: "no-repeat",
        }}
      >
        <div className="m-auto pt-20 w-[800px]">
          <h3 className="text-4xl pl-10 border-l-4">
            WE HAVE EXTREMELY EFFECTIVE IT SOLUTIONS FOR YOUR INDUSTRY
          </h3>
          <p className="text-white mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
          </p>
          <p className="text-white mt-10">
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
