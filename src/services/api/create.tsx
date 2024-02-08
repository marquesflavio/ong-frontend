import axios, { AxiosResponse } from 'axios';

// Definindo a interface para o objeto de usuário
interface User {
    id?: number;
    name: string;
    imagem: string;
    proposito: string;
}

// URL da API
const apiUrl: string = 'https://65c1f4b1f7e6ea59682a235d.mockapi.io/api/v1/ongs';

// Função para criar um novo usuário
async function createUser(user: User): Promise<void> {
    try {
        const response: AxiosResponse<User> = await axios.post(apiUrl, user);
        console.log('Novo usuário criado:', response.data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}

// Função para obter todos os usuários
async function getUsers(): Promise<void> {
    try {
        const response: AxiosResponse<User[]> = await axios.get(apiUrl);
        console.log('Usuários obtidos:', response.data);
    } catch (error) {
        console.error('Erro ao obter usuários:', error);
    }
}

// Função para atualizar um usuário existente
async function updateUser(userId: number, updatedUserData: User): Promise<void> {
    try {
        const response: AxiosResponse<User> = await axios.put(`${apiUrl}/${userId}`, updatedUserData);
        console.log('Usuário atualizado:', response.data);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

// Função para deletar um usuário
async function deleteUser(userId: number): Promise<void> {
    try {
        const response: AxiosResponse<User> = await axios.delete(`${apiUrl}/${userId}`);
        console.log('Usuário deletado:', response.data);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

// Exemplo de uso das funções
createUser({ name: 'João', imagem: 'Imagem João', proposito: 'joao@example.com' });
getUsers();
updateUser(1, { name: 'João da Silva', imagem: 'Imagem Joao Silva', proposito: 'joaodasilva@example.com' });
deleteUser(1);
