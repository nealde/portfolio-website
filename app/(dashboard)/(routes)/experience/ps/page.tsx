"use client";

import { useRouter } from "next/navigation";

// import { tools } from "@/constants";



export default function HomePage() {
  const router = useRouter();

  return (
    <div className='grid grid-cols-1 place-items-center w-[80%]'>
      <div className='p-20 w-[80%] max-w-4xl items-center'>
        <div className='items-center'>
          <h1 className='mb-3 font-bold text-4xl'>Data Engineer</h1>
          <h3 className='font-bold'>Payscale</h3>
          <h3>Seattle, WA</h3>
          <h3 className='mb-10'>2019 - 2021</h3>
          <div className='items-center'>
            <p className='mb-3'>PayScale is the best place to go for compensation reporting, modeling, and skill tracking.  At PayScale, my role was
              a hybridization of Machine Learning Engineering and Data Engineering.  I worrked closely with the Data Science team, helping them
              productionize their models, refactor and test their code to be more maintainable, and supported their systems in production hosted as Docker microservices in Kubernetes.
            </p>
            <p className='mb-3'>The Data Engineering work focused on maintaining and developing ETL pipelines into a version-controlled Snowflake Data Warehouse which powered the Data Science team's access
              to PayScale's historical Profile data.  
            </p>
            <p>Highlights include:</p>
            <ul style={{"list-style-type": "disc"}}>
              <li>Refactored a legacy quarterly-run analysis to ensure maintainability, performance, and auditability</li>
              <li>Re-Architected the JobMatching data science pipeline for a 10x performance improvement and a 3x reduction in cost</li>
              <li>Developed and optimized multiple high-throughput microservices on Kubernetes</li>
              <li>Architected several new services, including a traffic auditing system for external API clients</li>
              <li>Created a Human-In-The-Loop Active Learning framework, maximizing the benefit of human intervention on machine learning decision boundaries through intelligent point selection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
