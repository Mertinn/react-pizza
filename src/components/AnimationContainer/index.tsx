import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

interface IProps {
  animationName: string;
  duration?: number;
  children: React.ReactNode;
}

const AnimationContainer = ({
  animationName,
  duration = 500,
  children,
}: IProps) => {
  useEffect(() => {
    AOS.init({ duration, offset: 100 });
  }, [duration]);

  return <div data-aos={animationName}>{children}</div>;
};

export default AnimationContainer;
