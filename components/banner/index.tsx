import styled from "@emotion/styled";
import { useRouter } from "next/router";
import backgroundImage from "../../assets/common/backgroundImage.png";
import { useAnimation } from "../../hooks/useAnimation";
import Button from "../common/Button";
const Banner = () => {
  const { ref: MainRef } = useAnimation("fadeUp", 0);
  const { ref: BodyRef } = useAnimation("fadeUp", 0.5);
  const { ref: ButtonRef } = useAnimation("fadeUp", 1);
  const router = useRouter();
  return (
    <BannerContainer src={backgroundImage.src}>
      <TextContainer>
        <MainText ref={MainRef}>
          <i> 놀이</i>가 곧 <i>학습</i>입니다
        </MainText>
        <BodyText ref={BodyRef}>
          도안동의 영재교육은
          <br />
          <i>키즈닥터</i>에서 시작합니다.
        </BodyText>
      </TextContainer>
      <Button
        buttonRef={ButtonRef}
        onClick={() => router.push("https://open.kakao.com/o/s22iEEOe")}
      >
        무료로 상담하기
      </Button>
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 0 15px;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: black;
  > i {
    color: #cf000d;
  }
`;

const BodyText = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: black;
  > i {
    font-weight: 600;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const CustomButton = styled(Button)``;

export default Banner;
