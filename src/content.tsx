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
export type { Content, PositionContent, AsideContent };
