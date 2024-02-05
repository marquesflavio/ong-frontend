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

