import styled from "@emotion/styled";
import { HTMLAttributes, LegacyRef, PropsWithChildren } from "react";

interface ButtonProps {
  onClick?: () => void;
  style?: HTMLAttributes<HTMLButtonElement>["style"];
  buttonRef?: LegacyRef<HTMLButtonElement>;
}

const Button = ({
  onClick,
  children,
  style,
  buttonRef,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonContainer onClick={onClick} style={style} ref={buttonRef}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  height: 53px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 12px;
  color: ${({ theme }) => theme.white};
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 600;
  :active {
    box-shadow: none;
  }
`;

export default Button;
