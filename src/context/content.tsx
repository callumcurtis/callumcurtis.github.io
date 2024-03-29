import React from "react";
import {
  SchoolOutlined as SchoolIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

interface PositionContent {
  position: string;
  organization: string;
  location: string;
  duration: string;
  brief?: string;
  achievements?: string[];
  icon?: React.ReactNode;
  showInExperience: boolean;
}

interface AsideContent {
  duration: string;
  brief: string;
  icon?: React.ReactNode;
  showInExperience: boolean;
}

const experienceHistory: (PositionContent | AsideContent)[] = [
  // order: most recent first
  {
    position: "Full-Stack Developer Intern",
    organization: "Barnacle Systems",
    location: "Victoria, BC, Canada",
    duration: "Sep 2023 - Present",
    brief:
      "Development of Internet of things (IoT) hub products for remote security and monitoring of recreational, industrial, and government vessels using C, Python, TypeScript, React, Node.js, and Google Cloud.",
    achievements: [
      "Established continuous delivery processes using GitHub Actions workflows, automatically updating changelogs, bumping version numbers, building services, and staging services for deployment to production.",
    ],
    showInExperience: true,
  },
  {
    duration: "May 2023 - Aug 2023",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    duration: "Jan 2023 - Apr 2023",
    brief:
      "Self-Directed Term: personal projects, grant-funded research, and online courses/certifications.",
    showInExperience: true,
  },
  {
    duration: "Jan 2022 - Dec 2022",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineer Intern",
    organization: "Garmin",
    location: "Cochrane, AB, Canada",
    duration: "May 2021 - Dec 2021",
    achievements: [
      "Diagnosed inconsistent virtual memory usage in a parallel workload run frequently across a high-performance computing (HPC) cluster with 15+ nodes and 200+ CPU cores, reducing mean virtual memory usage by 30%.",
      "Optimized an extract, transform, and load (ETL) tool in Python that prepared embedded device logs for analysis, reducing mean batch processing time by more than five hours – a 40% improvement.",
      "Developed modular data analytics tools in Python that consumed ETL tool output and produced detailed reports on defect, usage, and performance metrics for engineers, product managers, and quality assurance personnel.",
      "Effectively communicated ideas during team brainstorming sessions for key large-scale data processing projects.",
      "Implemented a multi-threaded Python library that submitted resource usage telemetry from an HPC cluster to a PostgreSQL server, informing hardware requirements and tracking changing resource demands.",
      "Received the highest possible rating for all twelve technical and non-technical criteria in final performance evaluation.",
    ],
    showInExperience: true,
  },
  {
    duration: "Sep 2020 - Apr 2021",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Developer Intern",
    organization: "OGMA Consulting",
    location: "Victoria, BC, Canada",
    duration: "May 2020 - Sep 2020",
    brief:
      "Built a data visualization web application leveraging Python, Dash, pandas, NumPy, HTML5, and CSS3.",
    showInExperience: true,
  },
  {
    duration: "Sep 2019 - Apr 2020",
    brief: "Beginning: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
];

interface TestimonialContent {
  quote: string;
  author: string;
  position: string;
}

const testimonialList: TestimonialContent[] = [
  // priority order: first is highest priority
  {
    quote:
      "Callum quickly became an integral part of the Rally team.... He is consistently performing above intern level with his code quality and thoroughness.",
    author: "Final Performance Review",
    position: "Garmin",
  },
  {
    quote:
      "Callum often raised questions about software design best practices to improve his knowledge on the subject. He consistently came prepared with thoughts on different approaches to solving a problem, and asked for feedback on his designs.",
    author: "Final Performance Review",
    position: "Garmin",
  },
  {
    quote:
      "Callum always has a positive attitude even in challenging situations and is respectful towards other teammates.",
    author: "Final Performance Review",
    position: "Garmin",
  },
];

interface ProjectContent {
  name: string;
  description: string;
  link: string;
  image: React.ReactNode;
  tags: string[];
}

const projectList: ProjectContent[] = [
  // priority order: first is highest priority
  {
    name: "LLM Retrieval Stack",
    description:
      "Cloud-based system to embed and store arbitrary user data, facilitating semantic search and retrieval of personal or organizational knowledge for input to GPT-4 and other language models.",
    link: "https://github.com/callumcurtis/llm-retrieval-stack",
    image: (
      <img
        src="./images/projects/llm-retrieval-stack/aws-system-architecture.png"
        alt="System Architecture Diagram"
      />
    ),
    tags: ["AWS", "Python", "OpenAI API", "Pinecone API"],
  },
  {
    name: "ML Battlesnake",
    description:
      "Applying reinforcement learning to the competitive multiplayer game Battlesnake, where developers around the world compete to build the best AI-controlled snake.",
    link: "https://github.com/callumcurtis/ml-battlesnake",
    image: (
      <img
        src="./images/projects/ml-battlesnake/battlesnake-gameplay.gif"
        alt="Battlesnake Gameplay GIF"
      />
    ),
    tags: ["Python", "PyTorch", "NumPy", "PettingZoo"],
  },
];

const defaultContent = {
  hero: {
    heading: "Hi, I'm Callum",
    brief:
      "I'm a fourth-year software engineering student, passionate about solving problems, challenging my skills, and pushing the expectations I set for myself.",
  },
  about: {
    heading: "About",
    description:
      "My passion for software comes from a place of curiosity and problem-solving: " +
      "I love thinking hard and creatively and am continuously searching for better ways to design and develop code. " +
      "I am driven by a keen desire for excellence, both academically and professionally. " +
      "With twelve months of internships completed, I've had the opportunity to develop and optimize data pipelines, " +
      "offline data analytics tools, and data visualization applications. " +
      "I am excited to grow, now and during my entire career, and can't wait to see where my journey takes me in the wide world of tech.",
  },
  experience: {
    heading: "Experience",
    history: experienceHistory,
  },
  testimonials: {
    heading: "Testimonials",
    list: testimonialList,
  },
  projects: {
    heading: "Projects",
    list: projectList,
  },
  socials: [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/callumcurtis?tab=repositories",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/callumcurtis/",
    },
  ],
  credit: {
    brief: "Created by Callum Curtis using React and TypeScript.",
    link: "https://github.com/callumcurtis/callumcurtis.github.io",
  },
};

type Content = typeof defaultContent;

const ContentContext = React.createContext(defaultContent);

const ContentProvider = ({
  children,
  content = defaultContent,
}: React.PropsWithChildren<{ content?: Content }>) => {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

const useContent = () => React.useContext(ContentContext);

export default defaultContent;
export { ContentProvider, useContent };
export type {
  Content,
  PositionContent,
  AsideContent,
  TestimonialContent,
  ProjectContent,
};
