import styled from "@emotion/styled";
import { FullContainer } from "../common/FullContainer";
import Image from "next/image";
import whiteLogo from "../../assets/common/whiteLogo.png";
const FooterSection = () => {
  return (
    <FooterFullContainer>
      <Copywriting>{`가장 소중한 우리 아이에게\n가장 소중한 선물\n\n지혜로운 학부모님의\n현명한 선택`}</Copywriting>
      <InfomationContainer>
        <BusinessContainer>
          <p>키즈닥터 도안원</p>
          <p>대전 서구 도안북로93번길 31 더블루힐401호</p>
          <br />
          <p>대표자: 박황현</p>
          <p>사업자번호: 314-92-72825</p>
          <br />
          <p>TEL: 042-825-8896</p>
        </BusinessContainer>
        <Image width={150} height={30} src={whiteLogo} alt="하얀색 로고" />
      </InfomationContainer>
    </FooterFullContainer>
  );
};

const FooterFullContainer = styled(FullContainer)`
  background-color: ${({ theme }) => theme.main};
  padding: 20px 0;
  justify-content: space-between;
  gap: 0;
`;

const Copywriting = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  width: 100%;
  padding: 20px;
  white-space: pre;
  text-align: center;
  font-weight: 600;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  white-space: pre;
  text-align: center;
  color: ${({ theme }) => theme.white};
`;

const InfomationContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  > p {
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    white-space: nowrap;
    line-height: 1.5;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  width: 80%;
  max-width: 400px;
  border-radius: 16px;
  filter: drop-shadow(0px 8px 5px rgba(255, 255, 255, 0.25));
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default FooterSection;
