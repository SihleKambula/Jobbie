import JobsCard from "../../../components/JobsCard";
import { useGetData } from "../../../firebase/db";

const RecentJobs = () => {
  const { data, loading, error } = useGetData("jobs", { limit: 3 });

  return (
    <div className='w-sreen bg-sky-100 mt-10 text-center py-3 px-3'>
      <p className='text-2xl text-cyan-600'>Recent Jobs</p>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {data.map((job) => (
        <JobsCard
          key={job.id}
          type={job.type}
          title={job.title}
          description={job.description}
          salary={job.salary}
        />
      ))}
    </div>
  );
};

export default RecentJobs;
