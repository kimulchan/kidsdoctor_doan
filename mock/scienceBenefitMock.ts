import image1 from "../assets/science/image1.png";
import image2 from "../assets/science/image2.png";
import image3 from "../assets/science/image3.png";
import image4 from "../assets/science/image4.png";
import image5 from "../assets/science/image5.png";
import image6 from "../assets/science/image6.png";
import { BenefitType } from "../model/benefitType";

const scienceBenefitMock: BenefitType[] = [
  { name: "호기심 유발", benefitImg: image1, color: "pink50" },
  { name: "탐구심 발달", benefitImg: image2, color: "pink100" },
  { name: "과제 집착력", benefitImg: image3, color: "pink300" },
  { name: "협동심 리더쉽", benefitImg: image4, color: "pink500" },
  { name: "창의적\n문제해결능력", benefitImg: image5, color: "pink700" },
  { name: "든든한 과학지식", benefitImg: image6, color: "pink900" },
];

export default scienceBenefitMock;
