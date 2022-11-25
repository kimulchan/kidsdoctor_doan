import styled from "@emotion/styled";
import { BenefitType } from "../../model/benefitType";
import { ThemeKeyType } from "../../styles/theme";

const BenefitItem = ({ benefitImg, name, color }: BenefitType) => {
  return (
    <BenefitBox>
      <ImageBox src={benefitImg.src} color={color} />
      <p>{name}</p>
    </BenefitBox>
  );
};

const BenefitBox = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 80px;
  gap: 8px;
  > p {
    text-align: center;
    white-space: pre;
    font-size: 14px;
  }
`;

const ImageBox = styled.div<{ src: string; color: ThemeKeyType }>`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-color: ${({ theme, color }) => theme[color]};
  background-size: 40px;
  background-position: center;
  background-repeat: no-repeat;
`;

export default BenefitItem;
