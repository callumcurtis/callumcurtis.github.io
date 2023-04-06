import React from 'react';


const defaultContent = {
  hero: {
    heading: "Hi, I'm Callum",
    brief: "I'm a software engineering student, passionate about solving problems, challenging my skills, and pushing my expectations of myself. Currently, I'm continuing my studies at the University of Victoria.",
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
export type { Content };
