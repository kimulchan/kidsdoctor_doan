import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { useAnimation } from "../../hooks/useAnimation";

const BenefitContainer = ({ children }: PropsWithChildren) => {
  const { ref } = useAnimation("fadeDown", 0);
  return <BenefitRow ref={ref}>{children}</BenefitRow>;
};

const BenefitRow = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  overflow: scroll;
  padding: 0 20px;

  @media screen and (min-width: 580px) {
    justify-content: center;
  }
`;

export default BenefitContainer;
