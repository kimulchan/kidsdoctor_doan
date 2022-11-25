import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const FullContainer = styled.section<{ src?: string }>`
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
      background-position: right 60%;
      background-size: auto 340px;
      background-repeat: no-repeat;
    `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  gap: 32px;
  min-height: 664px;
  min-width: 316px;
  z-index: 555;
`;
