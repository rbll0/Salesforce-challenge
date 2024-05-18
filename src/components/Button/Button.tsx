import { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inverse?: boolean;
  size?: "large" | "small" | undefined;
  variant?: "info" | "danger" | undefined;
  onClick?: (event: React.FormEvent) => void | Promise<void>;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  children,
  inverse,
  size,
  onClick,
  type = "button",  // Define um valor padrão para type
}: ButtonProps) => {
  return (
    <ButtonElement
      size={size}
      inverse={inverse}
      onClick={onClick}
      type={type}  // Passa o tipo para o botão
    >
      {children}
    </ButtonElement>
  );
};
