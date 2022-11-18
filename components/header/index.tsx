import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <Container>
      <Logo></Logo>
      <HeaderMenu></HeaderMenu>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 5;
  top: 0;
  left: 0;
  border-radius: 1px solid ${({ theme }) => theme.gray};
  padding: 0 10px;
`;

export default Header;
