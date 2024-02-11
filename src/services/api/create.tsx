import axios from "axios";

interface Data {
  name: string;
  imagem: string;
  proposito: string;
}

//@ se for ver todos os services são usando a url completa, se mudar a url tem que mudar em todos os lugares de uso, é bom criar um cliente com o axios e atribuir um baseUrl, assim só usa o complemente pra cada chamada.

//@ e em vez de nomes genéricos é bom criar nomes bem diretos para cada serviço, exemplo CrearOng
//@ se for criar uma abstração de serviço de post isso seria algo isolado, como uma infra, classe ou até um BaseCreateData. Então os services de post usariam esse BaseCreateData dentro deles.

const createData = async (data: Data): Promise<void> => {
  try {
    const response = await axios.post(
      "https://mockapi.io/projects/65c1f4b1f7e6ea59682a235e/",
      data
    );
    console.log("Data created:", response.data);
  } catch (error) {
    console.error("Error creating data:", error);
  }
};

// Exemplo: criar um novo item
const newData: Data = {
  name: "Novo Item",
  imagem: "https://loremflickr.com/640/480/nature",
  proposito: "Propósito do Novo Item",
};

createData(newData);
