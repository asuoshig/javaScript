// url da api
const apiUrl = 'https://jsonplaceholder.typecode.com/users/';

//funçao para buscar usuários
async function fetchUsers(){
    try{
        //fazendo a solicitaçao GET para API
        const response = await fetch(apiUrl);

        //verificando se a resposta é bem sucedida
        if (!response.ok){
            throw new Error('erro ao recuperar usuarios');
        }

        //convertendo respostas para Json
        const users = await response.json();

        //imprimindo os usuários no console
        console.log('usuarios: ', users)   
    }catch(error){
        console.error('erro: ', error);
    }
}
//chamando a funçao para buscar os usuários
fetchUsers();
