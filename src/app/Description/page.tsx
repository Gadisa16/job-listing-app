'use client';

import { useSearchParams } from 'next/navigation';
import data from '../../../public/jobs.json';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import TimerOffOutlinedIcon from '@mui/icons-material/TimerOffOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

interface Responsibilities {
  responsibilities: string[];
}

interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

interface JobPosting {
  id: number;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  about: About;
}

interface JobsData {
  job_postings: JobPosting[];
}

const jobsData = data as JobsData;


function Description() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');  // Retrieve the id from search parameters

  // Convert the id from string to number for comparison
  const jobId = id ? parseInt(id) : null;

  // Ensure the data is typed correctly
  const jobsData = data as JobsData;

  const job = jobsData.job_postings.find(job => job.id === jobId);
  
  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className='pt-2 md:pt-10 pl-3 md:pl-10 block md:flex'>
      {/* Left-part of div
      ......Description */}
      <div className="w-[100%] md-w-[80%] p-[46px_0px]">
        <div>
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Description</p>
          <p className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[25.6px] text-left">{job.description}</p>
        </div>

        {/* responsibilities */}
        <div className='my-10'>
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Responsibilities</p>
          <ul className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[28px] text-left">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}><AddTaskOutlinedIcon className="w-[16px] mr-2 text-[#56CDAD]"/>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* ideal candidate */}
        <div className="mb-10">
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Ideal Candidate We Want</p>

          <ul className="list-disc ml-4 font-epilogue text-[16px] font-[550] leading-[25.6px] text-left">
            <li>In range of {job?.ideal_candidate?.age} age {job.ideal_candidate.gender} gender, {job.title} </li>

            {job?.ideal_candidate.traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
          </div>

        {/* when and where */}
        <div className="mt-10">
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">When and Where</p>
          <p className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[25.6px] text-left"><FmdGoodOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/>{job.when_where}</p>
        </div>
        
        
      </div>


      {/* right part */}
      <div className="mt-[50px] md:mt-0 md:ml-8">
        <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-7">About</p>
        {/* 1#icons and date */}
        <div className='w-[200px] h-[52px] flex'>
          <p><MoreTimeOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className='w-[122px]'>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Posted on</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.about.posted_on}</p>
          </div>
        </div>

        {/* 2#icons and date */}
        <div className='w-[200px] h-[52px] flex my-4'>
          <p><TimerOffOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className='w-[122px]'>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Deadline</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.about.deadline}</p>
          </div>
        </div>

        {/* 3#icons and date */}
        <div className='w-[250px] h-[52px] flex mb-7'>
          <p><FmdGoodOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className='w-[122px]'>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Location</p>
            <p className="text-[#25324B] font-epilogue text-[13px] font-semibold text-left">{job.about.location}</p>
          </div>
        </div>

        {/* 4#icons and date */}
        <div className='w-[200px] h-[52px] flex my-4'>
          <p><TodayOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className='w-[122px]'>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Start Date</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.about.start_date}</p>
          </div>
        </div>

        {/* 5#icons and date */}
        <div className='w-[200px] h-[52px] flex'>
          <p><EventAvailableOutlinedIcon className='w-[45px] h-[45px] p-[8px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className='w-[122px]'>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">End Date</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.about?.end_date}</p>
          </div>
        </div>

        <hr className='my-6 w-[85%] border text-[#D6DDEB]'/>

        <div className='w-[60%]'>
            <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-5">Categories</p>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {job.about.categories.map((cat, index) => (
                  <li
                    key={index}
                    className="text-[12px] px-3 py-1 bg-[#EB85331A] text-[#FFB836] border border-purpose rounded btn"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
        </div>

        <hr className='my-6 w-[85%] border text-[#D6DDEB]'/>

        <div className='w-[95%] h-[121px]'>
            <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-5">Required Skills</p>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {job.about.required_skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-[12px] px-3 py-1 bg-[#F8F8FD] text-[#4640DE] border border-purpose rounded btn"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Description;
