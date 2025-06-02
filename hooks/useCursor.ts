import { MotionValue, useSpring } from "motion/react";
import { MouseEvent, useState } from "react";
const SPRING_CONFIG = { mass: 1, damping: 38, stiffness: 260 };

export function useCursor<T extends HTMLElement>() {
  const [renderCursor, setRenderCursor] = useState(false);
  const top = useSpring(0, SPRING_CONFIG);
  const left = useSpring(0, SPRING_CONFIG);

  const onMouseEnter = (event: MouseEvent<T>) => {
    left.jump(event.clientX);
    top.jump(event.clientY);
    setRenderCursor(true);
  };

  const onMouseLeave = () => {
    setRenderCursor(false);
  };

  const onMouseMove = (event: MouseEvent<T>) => {
    if (!renderCursor) {
      onMouseEnter(event);
    }
    left.set(event.clientX);
    top.set(event.clientY);
  };

  const cursorProps: {
    renderCursor: boolean;
    style: {
      top: MotionValue<number>;
      left: MotionValue<number>;
    };
  } = {
    renderCursor,
    style: {
      top,
      left,
    },
  };
  return {
    cursorPlaneHandlers: {
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
    },
    cursorProps,
  };
}
