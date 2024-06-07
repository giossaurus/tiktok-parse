# Conversor de JSON do TikTok para CSV

Este projeto contém dois scripts que leem dados de um arquivo JSON, neste caso do TikTok, coletados utilizando instruções do repositório [texto do link](URL) e [texto do link](URL) com Python e posteriormente tratados aqui com Javascript.

Os scripts selecionam campos específicos e escrevem esses dados em um arquivo CSV para posteriormente facilitar a análise dos dados coletados, como número de curtidas, hashtags, popularidade e frequência das hashtags, id do vídeo, comentários e dados gerais sobre a postagem.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Este projeto usa os seguintes módulos Node.js:
- `fs` (módulo nativo do Node.js)
- `csv-writer`

Você pode instalar o módulo `csv-writer` executando:
```bash
npm install csv-writer
````
## Scripts

## Script 1: formatJson.js
Este script lê um arquivo JSON (input.json), formata os dados, e salva em um arquivo CSV (formatted_data.csv).

```javascript
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

// Função para formatar o JSON em arrays de objetos
function formatJson(jsonData) {
    try {
        const data = JSON.parse(jsonData);
        if (!Array.isArray(data)) {
            throw new Error('O arquivo JSON não contém um array de objetos.');
        }
        return data;
    } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
        process.exit(1); // Termina o processo em caso de erro
    }
}

// Ler o arquivo JSON
try {
    const jsonData = fs.readFileSync('input.json', 'utf8');
    const data = formatJson(jsonData);

    // Selecionar elementos específicos
    const selectedData = data.map(item => {
        return {
            id: item.id,
            uniqueId: item.uniqueId,
            nickname: item.nickname,
            verified: item.verified,
            title: item.title,
            desc: item.desc,
            isCommerce: item.isCommerce,
            stats: item.stats,
            hashtagName: item.hashtagName,
            heartCount: item.heartCount,
            videoCount: item.videoCount,
            diggCount: item.diggCount,
            shareCount: item.shareCount,
            commentCount: item.commentCount,
            playCount: item.playCount,
            collectCount: item.collectCount
        };
    });

    // Escrever os dados selecionados em um arquivo CSV
    const csvWriter = createObjectCsvWriter({
        path: 'formatted_data.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'uniqueId', title: 'UniqueId' },
            { id: 'nickname', title: 'Nickname' },
            { id: 'verified', title: 'Verified' },
            { id: 'title', title: 'Title' },
            { id: 'desc', title: 'Description' },
            { id: 'isCommerce', title: 'IsCommerce' },
            { id: 'stats', title: 'Stats' },
            { id: 'hashtagName', title: 'HashtagName' },
            { id: 'heartCount', title: 'HeartCount' },
            { id: 'videoCount', title: 'VideoCount' },
            { id: 'diggCount', title: 'DiggCount' },
            { id: 'shareCount', title: 'ShareCount' },
            { id: 'commentCount', title: 'CommentCount' },
            { id: 'playCount', title: 'PlayCount' },
            { id: 'collectCount', title: 'CollectCount' }
        ]
    });

    csvWriter.writeRecords(selectedData)
        .then(() => {
            console.log('CSV formatado salvo em formatted_data.csv');
        });

} catch (error) {
    console.error('Erro ao ler ou processar o arquivo JSON:', error);
    process.exit(1); // Termina o processo em caso de erro
}
````
## Script 2: convertToCsv.js

Este script lê o arquivo JSON (formatted_data.json) gerado pelo primeiro script, seleciona campos específicos, e salva em um arquivo CSV (output.csv).

```javascript
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Ler o arquivo JSON
let data;
try {
    const jsonData = fs.readFileSync('formatted_data.json');
    data = JSON.parse(jsonData);
} catch (error) {
    console.error('Erro ao ler ou analisar o arquivo JSON:', error);
    process.exit(1); // Termina o processo em caso de erro
}

// Selecionar elementos específicos
const selectedData = data.map(item => {
    return {
        id: item.id,
        uniqueId: item.uniqueId,
        nickname: item.nickname,
        verified: item.verified,
        title: item.title,
        desc: item.desc,
        isCommerce: item.isCommerce,
        stats: item.stats,
        hashtagName: item.hashtagName,
        heartCount: item.heartCount,
        videoCount: item.videoCount,
        diggCount: item.diggCount,
        heart: item.heart
    };
});

// Escrever os dados selecionados em um arquivo CSV
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        { id: 'id', title: 'ID' },
        { id: 'uniqueId', title: 'Unique ID' },
        { id: 'nickname', title: 'Nickname' },
        { id: 'verified', title: 'Verified' },
        { id: 'title', title: 'Title' },
        { id: 'desc', title: 'Description' },
        { id: 'isCommerce', title: 'Is Commerce' },
        { id: 'stats', title: 'Stats' },
        { id: 'hashtagName', title: 'Hashtag Name' },
        { id: 'heartCount', title: 'Heart Count' },
        { id: 'videoCount', title: 'Video Count' },
        { id: 'diggCount', title: 'Digg Count' },
        { id: 'heart', title: 'Heart' }
    ]
});

csvWriter.writeRecords(selectedData)
    .then(() => console.log('Arquivo CSV criado com sucesso'))
    .catch(err => console.error('Erro ao escrever no arquivo CSV:', err));
````

# Como Usar
## Executar o Script 1:

Este script lê input.json e gera formatted_data.csv.
Execute o comando:
```bash
node formatJson.js
````
## Executar o Script 2:

Este script lê formatted_data.json (gerado manualmente a partir do formatted_data.csv) e gera output.csv.
Execute o comando:
```bash
node convertToCsv.js
````
## Observações
- Certifique-se de que os arquivos input.json e formatted_data.json estejam no mesmo diretório que os scripts.
- Os arquivos CSV gerados (formatted_data.csv e output.csv) estarão no mesmo diretório que os scripts.
## Exemplo de Arquivo input.json
```json
[
    {
        "id": "1",
        "uniqueId": "unique123",
        "nickname": "user123",
        "verified": true,
        "title": "Sample Title",
        "desc": "Sample Description",
        "isCommerce": false,
        "stats": {},
        "hashtagName": "samplehashtag",
        "heartCount": 100,
        "videoCount": 10,
        "diggCount": 50,
        "shareCount": 5,
        "commentCount": 10,
        "playCount": 200,
        "collectCount": 15
    }
]
````
## Contribuição
Sinta-se à vontade para contribuir com melhorias para este projeto. Faça um fork, crie uma branch e envie um pull request.

## Licença
Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo LICENSE para mais detalhes.
```javascript 

Este `README.md` fornece uma visão geral do projeto, incluindo a descrição dos scripts, como configurá-los, e como usá-los para converter JSON em CSV. Ele também inclui um exemplo de entrada JSON para ajudar os usuários a entender o formato esperado dos dados.
```