# Desafio Sharenergy 2023-01

O projeto trata-se de um repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2023/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.

## Requerimentos

- Node.js 16.x ++
- NPM
- MongoDB
- Docker
- React

## Instalação

Faça um clone do projeto

        https://github.com/lipe474/desafio-sharenergy-2023-01.git

Instale as dependências na pasta do backend e do frontend usando o comando

        npm i
        
Altere o arquivo .env e coloque a variável de conexão do seu banco MongoDB, preferencialmente, utilize o MongoDB atlas que possui o ReplicaSet ativo por padrão, pois, o projeto foi construído utilizando o PrismaORM, que necessita que o MongoDB seja com ReplicaSet, se o seu banco local estiver com ReplicaSet ativo, é possível que funcione localmente.

Para pegar a variável de conexão no MongoDB Atlas, crie um cluster, em seguida clique em `connect` -> `Connect your application`

Vai ser disponibilizado uma váriável de conexão semelhante a `mongodb+srv://<user>:<password>@cluster0.wcbnavf.mongodb.net/?retryWrites=true&w=majority`

Coloque o usuário definido no cluster no lugar de `<user>` a senha definida no cluster no lugar de `<password>` e não se esqueça de definir o nome do banco entre o `/?`

Ao final sua variável será algo como `mongodb+srv://usuario_cluster:senha_cluster@cluster0.wcbnavf.mongodb.net/nome_banco?retryWrites=true&w=majority`

## Iniciar o projeto no backend
A incialização pode ser feita com o docker usando o comando:

        docker-compose up -d
        
E também pode ser feita sem o docker com o comando

        npm start

## Iniciar o projeto no frontend
A incialização pode ser feita com o comando

        npm run dev

Com a incialização feita, acesse `http://localhost:5173/` e utilize o username `desafiosharenergy` e a password `sh@r3n3rgy` para se autenticar

## Link para vídeo no youtube
https://www.youtube.com/watch?v=RrF1V802Ros&ab_channel=FelipeFerreiraRocha
