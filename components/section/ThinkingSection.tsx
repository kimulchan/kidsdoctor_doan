import thoughBackground from "../../assets/thinking/backgroundImage.png";
import { thinkingBenefitMock } from "../../mock";
import BenefitContainer from "../benefit/BenefitContainer";
import BenefitItem from "../benefit/BenefitItem";
import { FullContainer } from "../common/FullContainer";
import ProgramContainer from "../subject/ProgramContainer";
import ProgramItem from "../subject/ProgramItem";
import TextHeader from "../subject/TextHeader";

const ThinkingSection = () => {
  return (
    <FullContainer src={thoughBackground.src}>
      <TextHeader
        sub="창의력을 키워주는"
        title="닥터 사고"
        contents="교구 중심의 사고력 발달"
        wrong="*4세~6세 대상"
      />
      <ProgramContainer>
        <ProgramItem color="yellow100" delay={0}>
          사고력 발달 프로그램
        </ProgramItem>
        <ProgramItem color="yellow500" delay={0.3}>
          창의성 발달 프로그램
        </ProgramItem>
        <ProgramItem color="yellow900" delay={0.6}>
          세계유명교구 보드게임
        </ProgramItem>
      </ProgramContainer>
      <BenefitContainer>
        {thinkingBenefitMock.map((benefit, idx) => (
          <BenefitItem key={idx} {...benefit} />
        ))}
      </BenefitContainer>
    </FullContainer>
  );
};

export default ThinkingSection;
