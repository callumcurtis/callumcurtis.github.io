import React from 'react';
import { SchoolOutlined as SchoolIcon } from "@mui/icons-material";


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
    duration: "Jan 2022 - Present",
    brief: "Continuing: Software Engineering at the University of Victoria.",
    icon: <SchoolIcon />,
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
    organization: "FooBar Inc.",
    location: "Vancouver, BC, Canada",
    duration: "May 2021 - Dec 2021",
    achievements: [
      "Donec a dolor turpis.",
      "Aenean quis massa a magna egestas pellentesque.",
      "Sed tristique semper ante, a gravida ex auctor at.",
    ],
    showInExperience: true,
  },
  {
    position: "Software Engineering Intern",
    organization: "BazQux Inc.",
    location: "Toronto, ON, Canada",
    duration: "Aug 2020 - May 2021",
    brief: "Developed a web application in a team of three.",
    achievements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Nullam vel nunc et enim efficitur feugiat a eget dolor.",
      "Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh.",
      "Sed blandit non libero vitae bibendum.",
      "Sed suscipit interdum mi, in elementum neque aliquam at.",
    ],
    showInExperience: true,
  },
  {
    duration: "Jan 2019 - July 2020",
    brief: "Continuing: Software Engineering at the University of Victoria.",
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
    quote: "Callum is a big big helper and did a good job, all the time, yes indeed.",
    author: "John Doe",
    position: "CEO of FooBar Inc.",
  },
  {
    quote: "Callum is a super duper and did a good job, all the time, yes indeed.",
    author: "Jane Doe",
    position: "CEO of BazQux Inc.",
  },
  {
    quote: "Callum is a good student, all the time, yes indeed.",
    author: "John Smith",
    position: "Professor of Software Engineering at the University of Victoria",
  },
]

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
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc et enim efficitur feugiat a eget dolor. Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at.",
    link: "https://www.google.com",
    image: <img src="https://via.placeholder.com/600x400" alt="Project 1 Placeholder"/>,
    tags: ["React", "TypeScript"],
  },
  {
    name: "Project 2",
    description: "Fusce nec lobortis purus. Maecenas sollicitudin leo ut tincidunt maximus. Phasellus at sem luctus, aliquet dui in, ultrices purus. Maecenas.",
    link: "https://www.google.com",
    image: <img src="https://via.placeholder.com/600x400" alt="Project 2 Placeholder"/>,
    tags: ["Rust", "C++"],
  },
  {
    name: "Project 3",
    description: "Aliquam placerat, odio vel fermentum porttitor, velit nunc maximus nunc, in semper arcu sapien tempor turpis. Donec sed vulputate lacus.",
    link: "https://www.google.com",
    image: <img src="https://via.placeholder.com/600x400" alt="Project 3 Placeholder"/>,
    tags: ["Python", "Django"],
  },
];

const defaultContent = {
  hero: {
    heading: "Hi, I'm Callum",
    brief: "I'm a software engineering student, passionate about solving problems, challenging my skills, and pushing my expectations of myself. Currently, I'm continuing my studies at the University of Victoria.",
  },
  about: {
    heading: "About",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc et enim efficitur feugiat a eget dolor. Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at.",
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
  }
}

type Content = typeof defaultContent;

const ContentContext = React.createContext(defaultContent);

const ContentProvider = ({ children, content = defaultContent }: React.PropsWithChildren<{ content?: Content }>) => {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

const useContent = () => React.useContext(ContentContext);

export default defaultContent;
export { ContentProvider, useContent };
export type { Content, PositionContent, AsideContent, TestimonialContent, ProjectContent };
