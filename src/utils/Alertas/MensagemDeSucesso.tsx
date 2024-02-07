import Swal from "sweetalert2";

export const mensagemDeSucesso = () => {
    return (
        Swal.fire({
            title: "Parabéns!",
            text: "Dados cadastrados com sucesso!",
            icon: "success"
        })
    );
}
export const mensagemDeAlerta = () => {
    return (
        Swal.fire({
            title: "Você tem certeza que deseja excluir essa ONG?",
            text: "Os dados serão apagados permanentemente!",
            icon: "question"
        })
    );
}

//existe alguma forma de melhorar esse alert?