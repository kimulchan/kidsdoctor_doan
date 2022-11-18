import styled from "@emotion/styled";
import logo from "../../assets/common/logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <Image
      height={40}
      width={150}
      objectFit="contain"
      src={logo}
      priority={true}
      alt="키즈닥터 로고"
    />
  );
};

export default Logo;
