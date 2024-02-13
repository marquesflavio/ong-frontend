import Swal, { SweetAlertOptions } from "sweetalert2";

//@ Se todos os textos são hardCode isso acopla o componente a mensagem, o ideal é receber o title e text por props.
//@ ccaso queira ir  além ainda da pra fazer o icon também ser via props e tipar ele com o type da lib
export const mensagemDeSucesso = () => {
  return Swal.fire({
    title: "Parabéns!",
    text: "Dados cadastrados com sucesso!",
    icon: "success",
  });
};

/**
  //_ exemplo:
  //? export const mensagemDeSucesso = (props: SweetAlertOptions) => {
  //? return Swal.fire(props);

  Dessa forma se torna uma inversão de dependência, enquanto respeita o uso da lib com props.
  Se acaso queira limitar coisas é só fazer algo quanto ao tipo
};
*/
//@ se usado como abaixo só aceitaria as três props que você usa  na  função
export type mySwalProp = Pick<SweetAlertOptions, "title" | "icon" | "text">;
