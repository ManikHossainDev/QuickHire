import heroImage from '@/assets/herosection/herorightside.png';
import rightUser from '@/assets/herosection/herouserImage.png';
import jobsVector from '@/assets/herosection/Vector.png';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const HeroBannerSection = () => {
  return (
    <div
      className="relative w-full min-h-[80vh] "
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="xl:container  mx-auto relative z-10 w-full px-12 flex items-center justify-between">

        {/* Left: Text & Search */}
        <div className="z-10 max-w-xl mt-24">

          {/* Headline — Clash Display, 72px, 600 weight, 110% line-height */}
          <h1
            className="text-[72px] font-semibold leading-[110%] tracking-normal text-[#1a1a2e] m-0"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Discover
            <br />
            more than
          </h1>

          {/* Colored headline with vector underline */}
          <div className="relative inline-block mb-2">
            <h1
              className="text-[72px] font-semibold leading-[110%] tracking-normal text-[#4640DE] m-0"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              5000+ Jobs
            </h1>
            <Image
              src={jobsVector}
              alt=""
              className="absolute -bottom-3 left-0 w-full h-auto"
            />
          </div>

          {/* Subtext */}
          <p className="text-base text-[#515B6F] leading-relaxed mt-7 mb-8 max-w-sm">
            Great platform for the job seeker that searching for
            new career heights and passionate about startups.
          </p>

          {/* Search Bar — 852×89px, padding 16px */}
          <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden w-full md:w-[800px] xl:w-[1100px] h-[89px] p-4">

            {/* Job Title Input */}
            <div className="flex items-center gap-2 px-4 flex-1 border-r border-gray-200 h-full">
              <FiSearch size={20} className="text-[#9AA4B2] shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="border-none outline-none text-sm text-[#515B6F] bg-transparent w-full placeholder:text-[#9AA4B2] focus:outline-none"
              />
            </div>

            {/* Location Select */}
            <div className="flex items-center gap-2 px-4 border-r border-gray-200 h-full">
              <MdLocationOn size={20} className="text-[#9AA4B2] shrink-0" />
              <select className="border-none outline-none text-sm text-[#515B6F] bg-transparent cursor-pointer focus:outline-none">
                <option>Florence, Italy</option>
                <option>Rome, Italy</option>
                <option>Milan, Italy</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-[#4640DE] hover:bg-[#3730c7] transition-colors duration-200 text-white px-7 h-full text-sm font-semibold whitespace-nowrap cursor-pointer border-none rounded-r-md">
              Search my job
            </button>
          </div>

          {/* Popular Tags */}
          <p className="mt-4 text-sm text-[#515B6F]">
            <span className="font-semibold text-[#1a1a2e]">Popular : </span>
            UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* Right side */}
        <div className=" flex justify-end mt-8">
          <Image
            src={rightUser}
            alt="Job seeker"
            className=" md:w-[510px] xl:w-[600px] h-[707px]"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroBannerSection;