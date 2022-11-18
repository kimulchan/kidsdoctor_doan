import { mathBenefitMock } from "../../mock";
import BenefitContainer from "../benefit/BenefitContainer";
import BenefitItem from "../benefit/BenefitItem";
import { FullContainer } from "../common/FullContainer";
import ProgramContainer from "../subject/ProgramContainer";
import ProgramItem from "../subject/ProgramItem";
import TextHeader from "../subject/TextHeader";
import mathBackground from "../../assets/math/mathBackground.png";
const MathSection = () => {
  return (
    <FullContainer src={mathBackground.src}>
      <TextHeader
        sub="창의력을 키워주는"
        title="닥터 수학"
        contents="구체물 중심의 활동수학"
        wrong="*5세~10세 대상"
      />
      <ProgramContainer>
        <ProgramItem color="green100" delay={0}>
          구체물 중심 활동수학 프로그램
        </ProgramItem>
        <ProgramItem color="green500" delay={0.3}>
          유추 추론 능력발달 프로그램
        </ProgramItem>
        <ProgramItem color="green900" delay={0.6}>
          두정엽 개발 두뇌능력 향상 프로그램
        </ProgramItem>
      </ProgramContainer>
      <BenefitContainer>
        {mathBenefitMock.map((benefit, idx) => (
          <BenefitItem key={idx} {...benefit} />
        ))}
      </BenefitContainer>
    </FullContainer>
  );
};

export default MathSection;
