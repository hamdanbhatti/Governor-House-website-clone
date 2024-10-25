import React from "react";
import Image from "next/image";

type Course = {
  imageUrl: string;
  subHeading: string;
};

interface CoursesProps {
  heading: string;
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ heading, courses }) => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 max-w-[1300px] mx-auto mt-10 lg:ml-72">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-[#044e83] font-extrabold mt-10">
        {heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {courses.map((course: Course, index: number) => (
          <div 
            key={index} 
            className="overflow-hidden shadow-lg shadow-slate-200 rounded-lg w-full hover:scale-105 transition duration-300"
          >
            <div className="relative aspect-video">
              <Image 
                src={course.imageUrl} 
                alt="Course" 
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="p-4 text-center text-lg md:text-xl font-bold">
              {course.subHeading}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
