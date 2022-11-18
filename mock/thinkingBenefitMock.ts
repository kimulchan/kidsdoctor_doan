import image1 from "../assets/thinking/image1.png";
import image2 from "../assets/thinking/image2.png";
import image3 from "../assets/thinking/image3.png";
import image4 from "../assets/thinking/image4.png";
import image5 from "../assets/thinking/image5.png";
import image6 from "../assets/thinking/image6.png";
import { BenefitType } from "../model/benefitType";

const thinkingBenefitMock: BenefitType[] = [
  { name: "창의적\n문제해결능력", benefitImg: image1, color: "yellow50" },
  { name: "집중력 기억력", benefitImg: image2, color: "yellow100" },
  { name: "언어・수\n공간지각력", benefitImg: image3, color: "yellow300" },
  { name: "자기주도적 사고", benefitImg: image4, color: "yellow500" },
  { name: "과제집착력", benefitImg: image5, color: "yellow700" },
  { name: "전두엽 발달", benefitImg: image6, color: "yellow900" },
];

export default thinkingBenefitMock;
