import { ButtonHTMLAttributes } from "react";
import "./Botao.css";

interface BotaoProps {
  children: string;
  type: "submit" | "reset" | "button";
  onClick: () => void;
  className?: "botaoPrincipal" | "voltar" | "danger";
}

export function Botao(props: BotaoProps) {
  return <button type={props.type}>{props.children}</button>;
}

//@ recomendo usar elementos atômicos do html como componentes extensíveis do html, daí fica customizável, aceita classname, id e demais props de um button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}
