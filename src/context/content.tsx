import React from "react";
import {
  SchoolOutlined as SchoolIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LightbulbOutlined as LightBulbIcon,
} from "@mui/icons-material";

interface AnimatedImage {
  src: string;
  alt: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationType?: "float" | "pulse" | "rotate" | "sway" | "bounce" | "none";
  delay?: number;
  rotation: number;
  size: number;
  duration?: number;
}

interface PositionContent {
  position: string;
  organization: string;
  location: string;
  duration: string;
  brief?: string;
  achievements?: string[] | React.ReactNode[];
  icon?: React.ReactNode;
  showInExperience: boolean;
  images?: AnimatedImage[];
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
    duration: "Sept. 2025 - Dec. 2025",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
    organization: "Skyflow",
    location: "Palo Alto, CA, United States",
    duration: "May 2025 - Aug. 2025",
    brief: "Developed data privacy vaults.",
    achievements: [
      <p>
        Expanded support for Skyflow's data vault product by delivering a
        BigQuery integration using Go, Gin, GCP Cloud Run, and Terraform for a
        Fortune <strong>10</strong> customer.
      </p>,
      <p>
        Built an evaluation framework for named entity recognition (NER) models
        responsible for redacting personally identifiable information (PII) in
        unstructured data using seqeval, nervaluate, Hugging Face Tokenizers,
        and spaCy.
      </p>,
      <p>
        Instrumented cryptographic operations across <strong>4+</strong>{" "}
        microservices using Go, Prometheus, and Grafana.
      </p>,
    ],
    showInExperience: true,
    images: [
      {
        src: "./images/experience/skyflow/logo.svg",
        alt: "Skyflow Logo",
        position: { top: "10%", right: "-27rem" },
        animationType: "float",
        rotation: 10,
        size: 20,
        duration: 5,
      },
      {
        src: "./images/golang-gopher.svg",
        alt: "Golang Gopher",
        position: { bottom: "10%", left: "-44rem" },
        animationType: "bounce",
        rotation: -6,
        size: 15,
      },
      {
        src: "./images/bigquery.svg",
        alt: "BigQuery Logo",
        position: { bottom: "-15%", right: "-50rem" },
        animationType: "none",
        rotation: 4,
        duration: 6,
        size: 12,
      },
    ],
  },
  {
    position: "Machine Learning Intern",
    organization: "Shopify",
    location: "Toronto, ON, Canada",
    duration: "Jan. 2025 - April 2025",
    brief: "Built recommendation systems for the Shop app.",
    achievements: [
      <p>
        Implemented a two-tower neural network to enhance home feed
        personalization for the Shop app using PyTorch, TorchRec, BigQuery,
        Airflow, and Kubernetes.
      </p>,
      <p>
        Designed complementary-product models to improve recommendations for
        cold-start users using co-purchase data and BigQuery.
      </p>,
      <p>
        Trained, tuned, and evaluated an ALS recommendation model using Spark
        and MLlib.
      </p>,
      <p>
        Created a pipeline producing product embeddings daily for LLM
        recommendation models.
      </p>,
      <p>
        Personally ideated and prototyped a tool for comparing internal
        recommendation systems using Streamlit over a weekend, driving
        company-wide adoption and executive-level visibility, including demos to
        the <strong>CEO</strong> and <strong>CTO</strong>.
      </p>,
    ],
    showInExperience: true,
    images: [
      {
        src: "./images/experience/shopify/logo.svg",
        alt: "Shopify Logo",
        position: { top: "28%", left: "-24rem" },
        animationType: "sway",
        rotation: 0,
        duration: 20,
        size: 15,
      },
      {
        src: "./images/pytorch.svg",
        alt: "PyTorch Logo",
        position: { bottom: "-3%", right: "-27rem" },
        animationType: "pulse",
        rotation: -5,
        duration: 5,
        size: 14,
      },
    ],
  },
  {
    position: "Machine Learning Intern",
    organization: "OpenText",
    location: "Ottawa, ON, Canada",
    duration: "May 2024 - Dec. 2024",
    brief:
      "Implemented machine learning models and managed data to detect threats within customers\u2019 digital environments.",
    achievements: [
      <p>
        Developed and scaled unsupervised machine learning models for detecting
        insider threats across customer networks and devices through behavioral
        analysis using Spark and Scala.
      </p>,
      <p>
        Constructed a fine-grained monitoring service for data pipeline and
        model serving costs.
      </p>,
      <p>
        Built an API for LLMs to interact with threat detections using FastAPI,
        increasing monetization on the Azure Marketplace by enabling integration
        with Microsoft Copilot for Security.
      </p>,
      <p>
        Established CI workflows and developer tools to validate data pipelines.
      </p>,
    ],
    showInExperience: true,
    images: [
      {
        src: "./images/apache-spark.svg",
        alt: "Apache Spark Logo",
        position: { top: "28%", left: "-54rem" },
        animationType: "none",
        rotation: 10,
        duration: 8,
        size: 14,
      },
    ],
  },
  {
    duration: "Jan. 2024 - April 2024",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
    organization: "Barnacle Systems",
    location: "Victoria, BC, Canada",
    duration: "Sept. 2023 - Dec. 2023",
    brief:
      "Contributed to web applications for real-time collection, analysis, and visualization of data from sensors aboard recreational, industrial, and government ships.",
    achievements: [
      <p>
        Developed full-stack features for fleets of sensor hubs sold by{" "}
        <strong>100+</strong> retailers, allowing end-users to remotely monitor
        their property from anywhere in the world through real-time video and
        sensor readings.
      </p>,
      <p>
        Architected a unified framework for implementing persistence, analytics,
        and REST APIs for sensor integrations using Express, Node.js,
        TypeScript, and SQLite.
      </p>,
      <p>
        Constructed frontend views for sensor configuration and data monitoring
        using React and TypeScript, achieving performant video playback and
        dashboards with <strong>80k+</strong> data points hosted by
        resource-constrained edge devices.
      </p>,
      <p>
        Implemented support for an additional third-party sensor type using
        Python.
      </p>,
    ],
    showInExperience: true,
    images: [
      {
        src: "./images/react.svg",
        alt: "React Logo",
        position: { bottom: "-3%", right: "-50rem" },
        animationType: "float",
        rotation: 2,
        duration: 8,
        size: 15,
      },
      {
        src: "./images/nodejs.svg",
        alt: "Node.js Logo",
        position: { top: "-3%", left: "-24rem" },
        animationType: "bounce",
        rotation: -2,
        duration: 5,
        size: 16,
      },
      {
        src: "./images/typescript.svg",
        alt: "TypeScript Logo",
        position: { top: "-3%", right: "-18rem" },
        animationType: "none",
        rotation: 12,
        duration: 50,
        size: 10,
      },
    ],
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
    icon: <LightBulbIcon />,
  },
  {
    duration: "Jan. 2022 - Dec. 2022",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
    organization: "Garmin",
    location: "Cochrane, AB, Canada",
    duration: "May 2021 - Dec. 2021",
    brief:
      "Constructed data workloads analyzing sessions from embedded devices.",
    achievements: [
      <p>
        Expanded pipelines for processing data from <strong>110k+</strong> hours
        of device telemetry, generating high-level reports for team leads and
        enriched views for engineers and quality assurance.
      </p>,
      <p>
        Wrote a simulator for embedded software, reducing resolution time for a
        release-blocking bug by <strong>70%+</strong>.
      </p>,
      <p>
        Traced performance degradation in a computer cluster back to BLAS
        libraries used by third-party Python dependencies, addressing the root
        cause and reducing memory usage by <strong>30%</strong>.
      </p>,
      <p>
        Received <strong>100%</strong> performance ratings, including commitment
        to quality and ability to handle ambiguity.
      </p>,
    ],
    showInExperience: true,
    images: [
      {
        src: "./images/experience/garmin/logo.svg",
        alt: "Garmin Logo",
        position: { bottom: "-3%", right: "-30rem" },
        animationType: "pulse",
        rotation: 1,
        duration: 10,
        size: 15,
      },
      {
        src: "./images/c.svg",
        alt: "C Logo",
        position: { top: "-3%", left: "-39rem" },
        animationType: "rotate",
        rotation: 0,
        duration: 20,
        size: 11,
      },
    ],
  },
  {
    duration: "Sept. 2020 - April 2021",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
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
    name: "TenaDiff",
    description:
      "Tensor library with dynamic computation graph generation and reverse-mode automatic differentiation written in C++23 with no extra dependencies, designed to mirror the API of popular deep learning frameworks like PyTorch.",
    link: "https://github.com/callumcurtis/tenadiff",
    image: (
      <img
        src="./images/projects/tenadiff/heightmap.gif"
        alt="Model Training GIF"
      />
    ),
    tags: ["C++"],
  },
  {
    name: "BigQuery <> Skyflow",
    description:
      "Serverless function allowing customers to exchange secure tokens stored in BigQuery for sensitive data stored in Skyflow's data privacy vault.",
    link: "https://github.com/skyflowapi/skyflow-integrations/tree/8a0338ae65c9f4f5755709bf58830fbf3f1d8a3c/bigquery/detokenize",
    image: (
      <img
        src="./images/projects/bigquery-skyflow-integration/system-architecture.png"
        alt="System Architecture Diagram"
      />
    ),
    tags: ["Go", "Gin", "GCP Cloud Run", "BigQuery", "Terraform"],
  },
  {
    name: "RestauWants",
    description:
      "Review, wishlist, and share restaurants with friends. A more trustworthy, private, and personal approach to reviewing.",
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
      "Interpreter built from scratch using C++20 for a custom programming language, supporting loops, logical operators, variables, and more.",
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
      "I'm a fourth-year software engineering student with 2+ years of industry experience building data-intensive systems.",
  },
  about: {
    heading: "A bit about me",
    description: (
      <p>
        I'm an avid fantasy reader (<i>The Way of Kings</i> is a personal
        favorite) and love soccer and video games (recently{" "}
        <i>Echoes of Wisdom</i>, <i>Elden Ring</i>, and <i>Satisfactory</i>).
        <br />
        <br />
        I'm passionate about building data-intensive systems. I've pursued this
        interest from multiple angles: generating product recommendations,
        detecting security threats, monitoring sensors onboard ships, rethinking
        how people share and review restaurants, and more.
        <br />
        <br />
        Curiosity drives this broad scope of interest. I love peeling back
        abstractions and diving into new problems, gaining perspectives and
        skills that compound and transfer. I'm committed to constantly improving
        my craft, and strive to become an exceptional generalist.
      </p>
    ),
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
