import { Keyframes, keyframes } from "@emotion/react";

const animationNames = ["fadeIn", "fadeRight"] as const;

export type AnimationNamesType = typeof animationNames[number];

export interface AnimationParamType
  extends Record<AnimationNamesType, unknown> {
  fadeRight: { translateX: number };
}

export type AnimationType = {
  [key in AnimationNamesType]: (param: AnimationParamType[key]) => Keyframes;
};

export const animation: AnimationType = {
  fadeIn: () => keyframes`
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-50px);
    }
`,
  fadeRight: ({ translateX }) => keyframes`
    0% {
        opacity: 0;
        transform: translateX(0);
    }
    100% {
        transform: translateX(${translateX}px);
    }
`,
};
