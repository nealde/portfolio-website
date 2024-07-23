"use client";

import { useRouter } from "next/navigation";

// import { tools } from "@/constants";



export default function HomePage() {
  const router = useRouter();

  return (
    <div className='grid grid-cols-1 place-items-center w-[80%]'>
      <div className='p-20 w-[80%] max-w-4xl items-center'>
        <div className='items-center'>
          <h1 className='mb-3 font-bold text-4xl'>Director of Machine Learning Systems</h1>
          <h3 className='font-bold'>Nanoramic Laboratories</h3>
          <h3>Boston, MA</h3>
          <h3 className='mb-10'>2021 - Present</h3>
          <div className='items-center'>
            <p className='mb-3'>In this role, I wear many hats. I am the Head of Data, 
            the Lead Developer of a full-stack experiment tracking and analysis platform, 
            and a techno-economic modeler.  I build tools to make conducting 
            research on electrochemical systems easier to plan and analyze, more efficient, 
            and more organized, and am an evangelist for traceability at each level of experimentation.</p>
            <p className='mb-3'>I am responsible for developing and maintaining the cycler data ETL pipeline,
            which consists of nearly 100,000 files of timeseries data in 10 different formats which must be attributed to a cell, formatted,
            coerced into a common data structure, and made available to engineers, minimizing the access latency.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
