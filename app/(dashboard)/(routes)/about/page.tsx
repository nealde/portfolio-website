"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
// import { Col, Row } from "react-bootstrap";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github}  from "@/components/github";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiVisualstudio,
  DiSpark,
  DiRust,
  DiGo,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPolars,
  SiScipy,
  SiPlotly,
  SiKubernetes,
  SiDocker,
  SiAwslambda,
  SiReact,
  SiMlflow,
  SiScikitlearn,
  SiCondaforge,
  SiCplusplus,
} from "react-icons/si";

// import { tools } from "@/constants";

const professionalSkillset = [
  {
    label: "Python",
    href: "https://www.python.org/",
    icon: DiPython,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "PyTorch",
    href: "https://pytorch.org/",
    icon: SiPytorch,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "SciKit-Learn",
    href: "https://scikit-learn.org",
    icon: SiScikitlearn,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Pandas",
    href: "https://pandas.pydata.org/",
    icon: SiPandas,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "SciPy",
    href: "https://scipy.org//",
    icon: SiScipy,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "NumPy",
    href: "https://pandas.pydata.org/",
    icon: SiPandas,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Plotly/Dash",
    href: "https://plotly.com/",
    icon: SiPlotly,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Docker",
    href: "https://www.docker.com/",
    icon: SiDocker,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Kubernetess",
    href: "https://kubernetes.io/",
    icon: SiKubernetes,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "AWS Serverless",
    href: "https://aws.amazon.com/lambda/serverless-architectures-learn-more/",
    icon: SiAwslambda,
    color: "white",
    // bgColor: "bg-python",
  },
];

const coding_tools = [
  {
    label: "Python",
    href: "https://www.python.org/",
    icon: DiPython,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Git",
    href: "https://www.github.com",
    icon: DiGit,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "VSCode",
    href: "https://code.visualstudio.com/",
    icon: DiVisualstudio,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Conda",
    href: "https://docs.conda.io/en/latest/",
    icon: SiCondaforge,
    color: "white",
    // bgColor: "bg-python",
  },

];

const tools_learning_next = [
  {
    label: "Polars",
    href: "https://pola.rs/",
    icon: SiPolars,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Spark",
    href: "https://spark.apache.org/",
    icon: DiSpark,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "React",
    href: "https://react.dev/",
    icon: SiReact,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "MLFlow",
    href: "https://mlflow.org/",
    icon: SiMlflow,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "Rust",
    href: "https://www.rust-lang.org/",
    icon: DiRust,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "C++",
    href: "https://www.rust-lang.org/",
    icon: SiCplusplus,
    color: "white",
    // bgColor: "bg-python",
  },
  {
    label: "GoLang",
    href: "https://www.rust-lang.org/",
    icon: DiGo,
    color: "white",
    // bgColor: "bg-python",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
          About Me
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          I extract value from data, and then build tools to allow others to do the same.
        </p>
      </div>
      <div className="text-center">
        <h1 className="project-heading text-white pb-5 pt-3">
          Professional <strong className="purple">skillset </strong>
        </h1>
        {/* <div className="items-center justify-center">
          <Row>
            {professionalSkillset.map((tool) => (
              <Col key={tool.href} className="tech-icons">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 rounded-md")}>
                    <tool.icon className={cn("w-8 h-8 fill-white", tool.color)} />
                  </div>
                  <div className="font-semibold text-white">
                    {tool.label}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div> */}
        {/* <div className="px-4 md:px-20 lg:px-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"> */}
        <div className="px-4 md:px-20 lg:px-32 flex flex-wrap justify-center gap-4">
          {professionalSkillset.map((tool) => (
            <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4  border-white bg-inherit flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 transform duration-500 w-52">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 rounded-md")}>
                  <tool.icon className={cn("w-8 h-8 fill-white", tool.color)} />
                </div>
                <div className="font-semibold text-white p-2 ">
                  {tool.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
      </div>

      <div className="text-center">
        <h1 className="project-heading text-white pb-5">
          <strong className="purple">Learning </strong> next
        </h1>
        <div className="px-4 md:px-20 lg:px-32 flex flex-wrap justify-center gap-4">
          {tools_learning_next.map((tool) => (
            <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-white bg-inherit flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 transform duration-500 w-52">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 rounded-md")}>
                  <tool.icon className={cn("w-8 h-8 fill-white", tool.color)} />
                </div>
                <div className="font-semibold text-white p-2">
                  {tool.label}
                </div>
              </div>
              {/* <ArrowRight className="w-5 h-5" /> */}
            </Card>
          ))}
        </div>
        
      </div>

      <div className="text-center">
        <h1 className="project-heading text-white pb-5">
          <strong className="text-purple">Tools</strong> I use
        </h1>
        {/* <div className="px-4 md:px-20 lg:px-32 space-y-4"> */}
        <div className="px-4 md:px-20 lg:px-32 flex flex-wrap justify-center gap-4">
        {coding_tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-white bg-inherit flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 transform duration-500 w-52">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 rounded-md")}>
                <tool.icon className={cn("w-8 h-8 fill-white", tool.color)} />
              </div>
              <div className="font-semibold text-white">
                {tool.label}
              </div>
            </div>
            {/* <ArrowRight className="w-5 h-5" /> */}
          </Card>
        ))}
      </div>
        
      </div>

      <Github />

    </div>
  );
}
