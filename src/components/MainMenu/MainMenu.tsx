import { Link } from "react-router-dom";
import { MainMenuListElement, MainMenuListItemElement } from "./MainMenu.style";

export const MainMenu = () => {
  const menuItems = [
    { id: 0, label: "Produto", link: "/" },
    { id: 1, label: "Industrias", link: "/" },
    { id: 2, label: "Aprendizado", link: "/" },
    { id: 3, label: "Contato", link: "/contact" },
  ];

  return (
    <nav>
      <MainMenuListElement>
        {menuItems.map((item) => (
          <MainMenuListItemElement key={item.id}>
            <Link to={item.link}>{item.label}</Link>
          </MainMenuListItemElement>
        ))}
      </MainMenuListElement>
    </nav>
  );
};
