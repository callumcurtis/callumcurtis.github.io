import React from 'react';


const useOpenExternalLinksInNewPageWithProtection = () => {
  React.useEffect(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (link.host !== window.location.host) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }, []);
}

export { useOpenExternalLinksInNewPageWithProtection };