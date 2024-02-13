import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OngsCadastradas.css";

interface Ong {
  name: string;
  imagem: string;
  proposito: string;
}

export function OngsCadastradas() {
  const [ongs, setOngs] = useState<Ong[]>([]);

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await fetch(
          "https://65c1f4b1f7e6ea59682a235d.mockapi.io/api/v1/ongs"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar as ONGs");
        }
        const data = await response.json();
        setOngs(data);
      } catch (error) {
        console.error("Erro", error);
      }
    };
    fetchOngs();
  }, []);

  const excluirOng = () => {
    //inserir modal da exclusão, caso o usuário decida excluir, ou anular.
  };

  return (
    <main className="container">
      <div className="container_icone">
        <Link to="/" className="link">
          <FaArrowCircleLeft className="icone" />
          Voltar para a página inicial
        </Link>
      </div>
      <h1>ONGs Cadastradas</h1>
      <div className="container-ongs">
        {ongs.map((ong, index) => (
          <div key={index} className="container-ongs_box">
            <div className="containter-ongs_icone">
              <FaRegTrashAlt
                onClick={excluirOng}
                className="container-ongs_lixeira"
              />
            </div>
            <h2>{ong.name}</h2>
            <img src={ong.imagem} alt={ong.name} className="img" />
            <p>{ong.proposito}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
