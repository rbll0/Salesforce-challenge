import { HeaderElement, HeaderWrapperElement,LogoElement,} from "./Header.styles";
import Logo from "../../assets/icone-salesforce (1) 11.33.46.png";
import { MainMenu, UserMenu } from "..";

export const Header = () => {
  return (
    <HeaderElement>
      <HeaderWrapperElement>
        <LogoElement to="/">
          <img src={Logo} alt="Salesforce Logo" />
          Salesforce
        </LogoElement>

        <MainMenu />
        <UserMenu />
      </HeaderWrapperElement>
    </HeaderElement>
  );
};
