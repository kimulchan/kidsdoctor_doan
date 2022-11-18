import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { useAnimation } from "../../hooks/useAnimation";
import { ThemeKeyType } from "../../styles/theme";

interface ProgramItemProps {
  color: ThemeKeyType;
  delay?: number;
  marginLeft?: number;
}

const ProgramItem = ({
  color,
  children,
  delay = 0,
  marginLeft = 0,
}: PropsWithChildren<ProgramItemProps>) => {
  const { ref } = useAnimation("fadeLeft", delay);
  return (
    <ItemWrapper color={color} ref={ref} marginLeft={marginLeft}>
      {children}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div<{ color: ThemeKeyType; marginLeft: number }>`
  width: 280px;
  height: 52px;
  border-radius: 12px;
  background-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
  margin-left: ${({ marginLeft }) => marginLeft}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

export default ProgramItem;
