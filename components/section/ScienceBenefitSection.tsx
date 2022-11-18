import scienceBackground from "../../assets/science/scienceBackground.png";
import { scienceBenefitMock } from "../../mock";
import BenefitContainer from "../benefit/BenefitContainer";
import BenefitItem from "../benefit/BenefitItem";
import { FullContainer } from "../common/FullContainer";
import ProgramContainer from "../subject/ProgramContainer";
import ProgramItem from "../subject/ProgramItem";
import TextHeader from "../subject/TextHeader";

const ScienceBenefitSection = () => {
  return (
    <FullContainer src={scienceBackground.src}>
      <TextHeader
        sub="과제 집착력을 높여주는"
        title="닥터 과학"
        contents="실험중심의 체험과학"
        wrong="*6세~11세 대상"
      />
      <ProgramContainer>
        <ProgramItem color="pink100" delay={0}>
          탐구심을 키워주는 프로그램
        </ProgramItem>
        <ProgramItem color="pink500" delay={0.3}>
          과제 집착력 향상 프로그램
        </ProgramItem>
        <ProgramItem color="pink900" delay={0.6}>
          실험을 통한 발견학습 프로그램
        </ProgramItem>
      </ProgramContainer>
      <BenefitContainer>
        {scienceBenefitMock.map((benefit, idx) => (
          <BenefitItem key={idx} {...benefit} />
        ))}
      </BenefitContainer>
    </FullContainer>
  );
};

export default ScienceBenefitSection;
