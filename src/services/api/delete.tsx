import axios from "axios";

const deleteData = async (id: string): Promise<void> => {
  try {
    const response = await axios.delete(
      `https://mockapi.io/projects/65c1f4b1f7e6ea59682a235e/${id}`
    );
    console.log("Data deleted:", response.data);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

deleteData("2");
