import { IoPeopleOutline } from "react-icons/io5";

const PopularJobsCard = ({
  role,
  companyIcon,
  companyName,
  peopleApplied,
  iconColor,
}) => {
  return (
    <div className='bg-white rounded-lg mt-4 p-4'>
      <div className='flex items-center '>
        <div className={iconColor}>{companyIcon}</div>
        <div className='ml-3'>
          <p className='m-0 text-sm'>{role}</p>
          <span className='text-xs text-gray-600'>{companyName}</span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center'>
          <IoPeopleOutline />
          <p className='ml-1 text-sm'>{peopleApplied} People applied</p>
        </div>
        <p className='py-2 px-4 rounded-md text-sm bg-sky-100 text-sky-600'>
          Close
        </p>
      </div>
    </div>
  );
};

export default PopularJobsCard;
