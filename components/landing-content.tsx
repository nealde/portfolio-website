"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const experience = [
  {
    name: "University of Washington",
    avatar: "J",
    title: "Graduate Student",
    description: "CombinedMachine Learning and Continuum-scale Modeling to Predict the Behavior of Li Ion Batteries",
    link: "/experience/uw"
  },
  {
    name: "PayScale",
    avatar: "A",
    title: "Data Engineer",
    description: "Maintained ETL Pipelines, builtData Warehouses, and productionized Data Science workflows using microservices on kubernetes",
    link: "/experience/ps"
  },
  {
    name: "Nanoramic Laboratories",
    avatar: "M",
    title: "Director of Machine Learning Systems",
    description: "Scoped and lead development of in-house predictive analytics platform and data warehouse for battery data",
    link: "/experience/nl"
  },
];


const top_projects = [
  {
    title: "What Can Electrochemistry Learn From Chess?",
    date: "2018",
    description: "Improving the process of fitting electrochemical models with inspiration from machine-learning-based Chess Engines.  Reduced in-house Li-Ion model calibration time by 60% and improved fit by 30x over Genetic Algorithm",
    link: "https://iopscience.iop.org/article/10.1149/MA2018-02/25/860/meta",
    projectType: "Publication",
  },
  {
    title: "Physics-Guided Neural Networks",
    date: "2019",
    description: "Generated Ensembled Neural Networks that can accurately represent internal battery states while enforcing physical constraints, including monotonicity.  Sped up implementation 5x leveraging JIT-compiled functions on NumPy arrays.",
    link: "/posts",
    projectType: "Application"
  },
  {
    title: "Jazz Flow",
    date: "2024",
    description: "A platform for learning music theory and building your piano repertoire leveraging advanced analytics and spaced repetition.",
    link: "https://jazz-flow.vercel.app/",
    projectType: "Application",
  },
  // {
  //   title: "Blog",
  //   date: "2024",
  //   description: "A collection of posts on machine learning, ML engineerring, and anything else that I find interesting.",
  //   link: "/blog",
  //   projectType: "Application"
  // },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {experience.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white hover:scale-105 transform transition duration-500 hover:cursor-pointer" onClick={event =>  window.location.href=item.link}>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h2 className="text-center text-4xl text-white font-extrabold mb-10 mt-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {top_projects.map((item) => (
          
            <Card key={item.description} className="bg-[#192339] border-none text-white hover:scale-105 transform transition duration-500 hover:cursor-pointer" onClick={event =>  window.location.href=item.link}>
              {/* <Link to={item.link}> */}
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.title}</p>
                    <p className="text-zinc-400 text-sm">{item.date}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}<br></br><br></br>
                    <p className="mt-3">{item.projectType}</p>
                </CardContent>
              </CardHeader>
              {/* </Link> */}
            </Card>
          
        ))}
      </div>
    </div>
  )
}