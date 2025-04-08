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
  achievements?: string[] | React.ReactNode[];
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
    organization: "Shopify",
    location: "Toronto, ON, Canada",
    duration: "Jan. 2025 - April 2025",
    achievements: [
      <p>
        Implemented a deep learning recommendation system to enhance home feed
        personalization for the Shop app using PyTorch, BigQuery, Airflow, and
        Kubernetes.
      </p>,
      <p>
        Built a matrix factorization recommendation system using Spark and
        Vertex AI.
      </p>,
      <p>
        Created a data pipeline producing product embeddings daily for LLM
        recommendation systems.
      </p>,
      <p>
        Personally ideated and prototyped a tool for comparing internal
        recommendation systems using Streamlit over a weekend, driving
        company-wide adoption and executive-level visibility, including demos to
        the <strong>CEO</strong> and <strong>CTO</strong>.
      </p>,
      <p>
        Tuned, trained, and evaluated multiple baselines for recommendation
        systems including matrix factorization and linear models.
      </p>,
    ],
    showInExperience: true,
  },
  {
    position: "Machine Learning Intern",
    organization: "OpenText",
    location: "Ottawa, ON, Canada",
    duration: "May 2024 - Dec. 2024",
    achievements: [
      <p>
        Evolved distributed pipelines responsible for detecting security threats
        in customers' digital systems through unsupervised machine learning
        methods using Spark.
      </p>,
      <p>
        Created a service for fine-grained monitoring of data workload costs.
      </p>,
      <p>Constructed a REST API for third-party integrations.</p>,
      <p>
        Established CI workflows and developer tools to audit data pipeline
        results.
      </p>,
    ],
    showInExperience: true,
  },
  {
    duration: "Jan. 2024 - April 2024",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Full-Stack Intern",
    organization: "Barnacle Systems",
    location: "Victoria, BC, Canada",
    duration: "Sept. 2023 - Dec. 2023",
    achievements: [
      <p>
        Developed full-stack features for fleets of sensor hubs sold by{" "}
        <strong>100+</strong> retailers, allowing end-users to remotely monitor
        their property from anywhere in the world through real-time video and
        sensor readings.
      </p>,
      <p>Implemented support for an additional third-party sensor type.</p>,
      <p>
        Architected a unified framework for implementing persistence, analytics,
        and REST APIs for sensor integrations using Express, Node.js,
        TypeScript, and SQLite.
      </p>,
      <p>
        Constructed front-end views for sensor configuration and data monitoring
        using React and TypeScript, achieving performant video playback and
        dashboards with <strong>80k+</strong> data points hosted by
        resource-constrained edge devices.
      </p>,
    ],
    showInExperience: true,
  },
  {
    duration: "May 2023 - Aug. 2023",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    duration: "Jan. 2023 - April 2023",
    brief:
      "Self-Directed Term: personal projects, grant-funded research, and online courses/certifications.",
    showInExperience: true,
  },
  {
    duration: "Jan. 2022 - Dec. 2022",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineer Intern",
    organization: "Garmin",
    location: "Cochrane, AB, Canada",
    duration: "May 2021 - Dec. 2021",
    achievements: [
      <p>
        Expanded pipelines for processing data from <strong>110k+</strong> hours
        of device telemetry, generating high-level reports for team leads and
        enriched views for engineers and quality assurance.
      </p>,
      <p>
        Wrote a simulator for embedded software algorithms, reducing resolution
        time for a release-blocking bug by <strong>70%+</strong>.
      </p>,
      <p>
        Traced performance degradation in a compute cluster back to BLAS
        libraries used by third-party dependencies, addressing the root cause
        and reducing memory usage by <strong>30%</strong>.
      </p>,
      <p>
        Received <strong>100%</strong> performance ratings, including commitment
        to quality and ability to handle ambiguity.
      </p>,
    ],
    showInExperience: true,
  },
  {
    duration: "Sept. 2020 - April 2021",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Developer Intern",
    organization: "OGMA",
    location: "Victoria, BC, Canada",
    duration: "May 2020 - Aug. 2020",
    brief:
      "Built a data visualization web application leveraging TypeScript, Python, Flask, and Dash.",
    showInExperience: true,
  },
  {
    duration: "Sept. 2019 - April 2020",
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
    link: "https://www.restauwants.com",
    image: (
      <img
        src="./images/projects/restauwants/hero.png"
        alt="RestauWants Landing Page"
      />
    ),
    tags: [
      "TypeScript",
      "Drizzle",
      "MySQL",
      "Tailwind CSS",
      "React",
      "Next.js",
    ],
  },
  {
    name: "RAG Stack",
    description:
      "Cloud-hosted API to embed and store text uploads, facilitating semantic search and retrieval of personal or organizational knowledge for input to GPT-4 and other language models.",
    link: "https://github.com/callumcurtis/llm-retrieval-stack",
    image: (
      <img
        src="./images/projects/llm-retrieval-stack/aws-system-architecture.png"
        alt="System Architecture Diagram"
      />
    ),
    tags: ["AWS (Lambda, SQS, S3, API Gateway)", "Pinecone", "Python"],
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
    tags: ["Python", "Go", "PyTorch", "PettingZoo"],
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
    tags: ["C++"],
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
      "My passion for software comes from a place of growth and problem-solving. I'm most fulfilled when I'm thinking hard, being creative, and challenging my own opinions on the best ways to do things. I love that there's always something to learn and an infinite number of things to build \u2014 all only a few (or more...) keypresses away. ",
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
