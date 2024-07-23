"use client";

import { useRouter } from "next/navigation";

// import { tools } from "@/constants";



export default function HomePage() {
  const router = useRouter();

  return (
    <div className='grid grid-cols-1 place-items-center w-[80%]'>
      <div className='p-20 w-[80%] max-w-4xl items-center'>
        <div className='items-center'>
          <h1 className='mb-3 font-bold text-4xl'>Graduate Student</h1>
          <h3 className='font-bold'>University of Washington</h3>
          <h3>Seattle, WA</h3>
          <h3 className='mb-10'>2015-2019</h3>
          <div className='items-center'>
            <p className='mb-3'>In graduate school, I conducted research in Venkat Subramanian&apos;s lab, aiming to blend high-performance multiphysics
              models of Li-Ion battery systems and Data Science to enable more efficient and robust calibration, design, and deployment of models in battery
              management systems.
            </p>
            <p className='mb-3'>My Thesis, titled The Role of Data Science in Numerical Modeling of Lithium Ion Batteries, focused on reviewing and building upon the 
              state-of-the-art in physics-guided neural networks, timeseries forecasting, model calibration techniques, and the opportunities for data-driven methods
              in li-ion battery modeling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
