import image1 from "../assets/thinking/image1.png";
import image2 from "../assets/thinking/image2.png";
import image3 from "../assets/thinking/image3.png";
import image4 from "../assets/thinking/image4.png";
import image5 from "../assets/thinking/image5.png";
import image6 from "../assets/thinking/image6.png";
import { BenefitType } from "../model/benefitType";

const mathBenefitMock: BenefitType[] = [
  { name: "수학적\n문제해결 능력", benefitImg: image1, color: "green50" },
  { name: "수학적 사고력", benefitImg: image2, color: "green100" },
  { name: "원리이해・\n추론능력", benefitImg: image3, color: "green300" },
  { name: "공간지각력", benefitImg: image4, color: "green500" },
  { name: "과제집착력", benefitImg: image5, color: "green700" },
  { name: "두정엽 발달", benefitImg: image6, color: "green900" },
];

export default mathBenefitMock;
