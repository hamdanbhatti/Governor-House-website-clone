import React from "react";
import Image from "next/image";
const Content = () => {
  return (
    <>
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10 ">
        <h1 className="text-center xl:text-[32px] sm:text-[30px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-[#044e83] font-extrabold m-auto md:w-[95%]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="mt-7 sm:mt-10 xl:leading-[1.75rem] xl:text-[1.2rem] sm:tracking-wider tracking-normal text-justify my-10">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in
          this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or other team members.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 m-3 sm:m-0 gap-5">
          <Image
            src={"/images/imageWebsite.5c6ae62f.jpg"}
            width={377}
            height={300}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          ></Image>
          <Image
            src={"/images/imageWebsite2.a102c7b5.jpg"}
            width={377}
            height={300}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          ></Image>
          <Image
            src={"/images/imageWebsite3.b845fe78.jpg"}
            width={377}
            height={300}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Content;
