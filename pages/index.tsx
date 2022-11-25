import styled from "@emotion/styled";
import type { NextPage } from "next";
import Banner from "../components/banner";
import { FullContainer } from "../components/common/FullContainer";
import Header from "../components/header";
import ThinkingSection from "../components/section/ThinkingSection";
import MathSection from "../components/section/MathSection";
import ScienceBenefitSection from "../components/section/ScienceBenefitSection";
import FooterSection from "../components/section/FooterSection";

const Home: NextPage = () => {
  return (
    <FullPageScrollContainer>
      <Header></Header>
      <BannerContainer>
        <Banner></Banner>
      </BannerContainer>
      <ThinkingSection />
      <MathSection />
      <ScienceBenefitSection />
      {/* <InfoSection /> */}
      <FooterSection />
    </FullPageScrollContainer>
  );
};

const FullPageScrollContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const BannerContainer = styled(FullContainer)`
  padding: 0;
  gap: 60px;
  min-height: 0;
`;

export default Home;
