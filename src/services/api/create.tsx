import axios from 'axios';

interface Data {
  name: string;
  imagem: string;
  proposito: string;
}

const createData = async (data: Data): Promise<void> => {
  try {
    const response = await axios.post('https://mockapi.io/projects/65c1f4b1f7e6ea59682a235e/', data);
    console.log('Data created:', response.data);
  } catch (error) {
    console.error('Error creating data:', error);
  }
};

// Exemplo: criar um novo item
const newData: Data = {
  name: 'Novo Item',
  imagem: 'https://loremflickr.com/640/480/nature',
  proposito: 'Propósito do Novo Item'
};

createData(newData);
