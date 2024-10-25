import Content from "./components/content";
import Courses from "./components/courses";
import HeroSection from "./components/heroSection";
import ImageSlider from "./components/imageSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Content />
      <ImageSlider />
      <Courses
        heading="Core Courses"
        courses={[
          {
            imageUrl: "/images/programming_fundamentals.49cca4e9.jpg",
            subHeading: "Programming Fundamentals",
          },
          {
            imageUrl: "/images/nextjs.3dff0f70.jpg",
            subHeading: "Web2 Using NextJS",
          },
          {
            imageUrl: "/images/earn_as_your_learn.b8248a49.jpg",
            subHeading: "Earn as You Learn",
          },
        ]}
      />

      <Courses
        heading="Advanced Courses"
        courses={[
          {
            imageUrl: "/images/AI.39397d24.jpg",
            subHeading: "Artificial Intelligence",
          },
          {
            imageUrl: "/images/metaverse.06eccb60.jpg",
            subHeading: "Web3 Metaverse",
          },
          {
            imageUrl: "/images/cloudComputing.7260492c.jpg",
            subHeading: "Cloud Native Computing",
          },
          {
            imageUrl: "/images/iot.16f7b003.jpg",
            subHeading: "Ambient Computing and IoT",
          },
          {
            imageUrl: "/images/genomics.b87789f1.jpg",
            subHeading: "Genomics and Bioinformatics",
          },
          {
            imageUrl: "/images/automation.a77dbbe8.jpg",
            subHeading: "Networking Programmability and Automation",
          },
          // Add more courses here for the specialized section
        ]}
      />
    </>
  );
}
