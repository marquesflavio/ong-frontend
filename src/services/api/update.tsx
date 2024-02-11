import axios from "axios";

interface Data {
  name: string;
  imagem: string;
  proposito: string;
}

const updateData = async (id: string, newData: Data): Promise<void> => {
  try {
    const response = await axios.put(
      `https://mockapi.io/projects/65c1f4b1f7e6ea59682a235e/${id}`,
      newData
    );
    console.log("Data updated:", response.data);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

const updatedData: Data = {
  name: "Item Atualizado",
  imagem: "https://loremflickr.com/640/480/nature",
  proposito: "Novo propósito do item atualizado",
};

updateData("3", updatedData);
