import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OngCard.css";
import { MdArrowBackIos } from "react-icons/md";

interface Ong {
  nome: string;
  imagem: string;
  proposito: string;
}

export function OngCard() {
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
    <section className="container_card">
      <div className="container_icone">
        <Link to="/" className="link">
          <MdArrowBackIos  className="icone" />
        </Link>
      </div>
      <h1 className="container_h1">Organizações Cadastradas</h1>
      <div className="container_info">
        <p>
          Nessa seção é visualizar e editar as Ongs...Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Provident sint voluptatem sed laudantium
          officiis, veritatis enim libero mollitia tenetur eligendi autem
          accusamus fugiat repellat. Ad repellat nam ea earum quaerat.
        </p>
      </div>
      <div className="container-ongs">
        {ongs.map((ong, index) => (
          <div key={index} className="container-ongs_box">
            <div className="containter-ongs_icone">
              <FaRegTrashAlt
                onClick={excluirOng}
                className="container-ongs_lixeira"
              />
            </div>
            <h2>{ong.nome}</h2>
            <img src={ong.imagem} alt={ong.nome} className="img" />
            <p>{ong.proposito}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
