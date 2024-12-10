import React from "react";
import PopularJobsCard from "./PopularJobsCard";
import { FaAirbnb, FaDiscord } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

const popularJobs = [
  {
    role: "Fullstack Web Developer",
    companyIcon: <SiNetflix size={"30px"} />,
    companyName: "Netflix",
    peopleApplied: 22,
    iconColor: "text-red-600",
  },
  {
    role: "Senior Web Developer",
    companyIcon: <FaDiscord size={"30px"} />,
    companyName: "Discord Inc",
    peopleApplied: 12,
    iconColor: "text-indigo-600",
  },
  {
    role: "Flutter Mobile Developer",
    companyIcon: <FaAirbnb size={"30px"} />,
    companyName: "Airbnb",
    peopleApplied: 55,
    iconColor: "text-red-400",
  },
];

const Home = () => {
  return (
    <section className='container mx-auto px-5 py-9'>
      <div>
        <p className='text-4xl'>
          Get the most exciting jobs from around the world
        </p>
      </div>
      <div className='mt-5 h-auto bg-sky-50 px-4 py-2 rounded-md'>
        <p className='w-full bg-cyan-600 border rounded-lg text-white text-center py-3'>
          Popular jobs
        </p>
        {popularJobs.map((job) => {
          return (
            <PopularJobsCard
              role={job.role}
              companyIcon={job.companyIcon}
              companyName={job.companyName}
              peopleApplied={job.peopleApplied}
              iconColor={job.iconColor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
