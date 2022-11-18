import styled from "@emotion/styled";
import { useAnimation } from "../../hooks/useAnimation";

interface TextHeaderProps {
  sub: string;
  title: string;
  contents: string;
  wrong: string;
}

const TextHeader = ({ wrong, contents, sub, title }: TextHeaderProps) => {
  const { ref: subRef } = useAnimation("fadeUp", 0);
  const { ref: titleRef } = useAnimation("fadeUp", 0.2);
  const { ref: contentsRef } = useAnimation("fadeUp", 0.4);
  const { ref: wrongRef } = useAnimation("fadeUp", 0.6);
  return (
    <TextContainer>
      <SubText ref={subRef}>{sub}</SubText>
      <TitleText ref={titleRef}>{title}</TitleText>
      <ContentsText ref={contentsRef}>{contents}</ContentsText>
      <WrongText ref={wrongRef}>{wrong}</WrongText>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.span`
  font-weight: 400;
  font-size: 22px;
  color: ${({ theme }) => theme.gray};
  line-height: 32px;
`;

const ContentsText = styled.p`
  font-weight: 500;
  font-size: 28px;
  color: ${({ theme }) => theme.black};
  line-height: 41px;
`;

const TitleText = styled.h1`
  color: ${({ theme }) => theme.main};
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
`;

const WrongText = styled.strong`
  color: ${({ theme }) => theme.main};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
`;
export default TextHeader;
