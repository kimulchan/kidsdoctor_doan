import styled from "@emotion/styled";
import { useAnimation } from "../../hooks/useAnimation";
import useMaps from "../../hooks/useMaps";
import { FullContainer } from "../common/FullContainer";

const InfoSection = () => {
  const { ref: titleRef } = useAnimation("fadeUp");
  const { ref: mapRef } = useAnimation("fadeDown", 0.3);

  return (
    <FullContainer>
      <Title ref={titleRef}>찾아오시는 길</Title>
    </FullContainer>
  );
};

const Title = styled.h2`
  color: ${({ theme }) => theme.main};
  font-size: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export default InfoSection;
