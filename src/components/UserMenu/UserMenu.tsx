import { Button } from "..";
import { UserLoginButton, UserMenuElement } from "./UserMenu.style";
import UserIcon from "../../assets/user-solid.svg";
import { useNavigate } from "react-router-dom";


export const UserMenu = () => {
  const token = false;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/contact");
  }

 
  return (
    <UserMenuElement>
      {!token ? (
        <>
          <Button size="small" onClick={handleLogout}>
            Cadastre-se
          </Button>
          <Button size="small" inverse onClick={handleClick}>
            Login
          </Button>
        </>
      ) : (
        <>
          <span>Login</span>
        </>
      )}
      <UserLoginButton onClick={() => {}}>
        <img src={UserIcon} alt="" />
      </UserLoginButton>
    </UserMenuElement>
  );
};
