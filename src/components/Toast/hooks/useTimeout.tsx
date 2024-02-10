import { useEffect, useRef } from "react";

export const useTimeout = (callback: any, delay: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);

  // useEffect(() => {
  //   if (delay === null) return;

  //   const id = setTimeout(() => savedCallback.current(), delay);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (delay !== null) {
  //     const id = setTimeout(savedCallback.current(), delay);
  //     return () => clearTimeout(id);
  //   }
  // }, []);
};
