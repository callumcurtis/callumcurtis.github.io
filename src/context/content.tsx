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
    position: "Machine Learning Intern",
    organization: "OpenText",
    location: "Kanata, ON, Canada",
    duration: "May 2024 - Dec 2024",
    brief:
      "Building unsupervised machine learning models and managing data to detect threats within customers' digital systems.",
    achievements: [
      "Traced erroneous output from an inference pipeline involving hundreds of millions of events and multiple steps, addressing the root cause and protecting the integrity of security threat detections used by downstream services.",
      "Productionized data science prototypes as incremental batch processing jobs using Apache Spark, Scala, and S3.",
      "Developed automations and dashboards to capture cloud costs of analytics across Databricks and AWS infrastructure.",
    ],
    showInExperience: true,
  },
  {
    duration: "Jan 2024 - Apr 2024",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Full-Stack Developer Intern",
    organization: "Barnacle Systems",
    location: "Victoria, BC, Canada",
    duration: "Sep 2023 - Dec 2023",
    brief:
      "Contributed to customer-facing data platforms and web applications for real-time collection, analysis, and visualization of data from sensors aboard recreational, industry, and government ships.",
    achievements: [
      "Designed and implemented RESTful APIs for managing integrations with sensors using Node.js and TypeScript.",
      "Maintained and evolved frontend views in collaboration with product managers using React and TypeScript.",
      "Leveraged object-oriented design principles and patterns in Python to ingest and process data from remote sensors.",
      "Led a full-stack project to construct new integrations, satisfying multiple contracts with Canadian federal agencies.",
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
      "Troubleshot inconsistent virtual memory usage in an automated data pipeline run frequently across a distributed high-performance computing (HPC) cluster, improving mean virtual memory usage by 30%.",
      "Optimized an extract, transform, and load (ETL) job in Python that prepared data from embedded devices for analysis, reducing mean batch processing time by more than five hours – a 40% improvement.",
      "Developed data analytics services in Python that performed batch processing on ETL results, producing high-level reports for decision makers, and enriched views for developers and quality assurance.",
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
      "Callum's ability to research, adapt, collaborate, and meet deadlines was excellent.",
    author: "Final Performance Review",
    position: "Barnacle Systems",
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
    name: "RestauWants",
    description:
      "Track, review, wishlist, and share restaurants with friends. A more trustworthy, private, and personal approach to reviewing.",
    link: "https://www.restauwants.com/",
    image: (
      <img
        src="./images/projects/restauwants/hero.png"
        alt="RestauWants Landing Page"
      />
    ),
    tags: [
      "TypeScript",
      "Drizzle ORM",
      "MySQL",
      "Tailwind CSS",
      "React",
      "Next.js",
    ],
  },
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
  {
    name: "Beeline Interpreter",
    description:
      "Tree-walk interpreter built from scratch using C++ for a custom language, supporting loops, logical operators, variables, and more.",
    link: "https://github.com/callumcurtis/beeline-interpreter",
    image: (
      <img
        src="./images/projects/beeline-interpreter/fibonnaci.png"
        alt="Fibonnaci Sequence Implemented Using Beeline"
      />
    ),
    tags: ["C++", "Boost", "Context-Free Grammar"],
  },
];

const defaultContent = {
  hero: {
    heading: "Hi, I'm Callum",
    brief:
      "I'm a fourth-year software engineering student with 18+ months of internship experience who loves building data-intensive systems and becoming a better developer every day.",
  },
  about: {
    heading: "About",
    description:
      "My passion for software comes from a place of growth and problem-solving: " +
      "I'm most fulfilled when I'm thinking hard, being creative, and challenging my own opinions on the best ways to do things. " +
      "I love that there's always something to learn and an infinite number of things to build — all only a few keypresses away.",
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
      link: "https://github.com/callumcurtis",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/callumcurtis",
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
