/*
  Is a given element currently in the viewport?
  This hook tracks that information using
  IntersectionObserver.
*/
import React from 'react';
function useIsOnscreen(
  elementRef,
  defaultState = false
) {
  const [isOnscreen, setIsOnscreen] = React.useState(defaultState);
  React.useEffect(() => {
    if (!elementRef.current) {
      return null;
    }
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        setIsOnscreen(entry.intersectionRatio > 0);
      }
    );
    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, [elementRef]);
  return isOnscreen;
}
export default useIsOnscreen;