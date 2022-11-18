import { StaticImageData } from "next/image";
import { ThemeKeyType } from "../styles/theme";

export type BenefitType = {
  name: string;
  benefitImg: StaticImageData;
  color: ThemeKeyType;
};
