# Conversor de JSON do TikTok para CSV

Este projeto contém um script que lê dados de um arquivo JSON, neste caso do TikTok, coletados utilizando instruções do repositório [tiktok-hashtag-analysis](https://github.com/bellingcat/tiktok-hashtag-analysis) e [TikTok-Api](https://github.com/davidteather/TikTok-Api) com Python e posteriormente tratados aqui com Javascript.

O script selecionam campos específicos e escreve esses dados em um arquivo CSV e JSON formatados para posteriormente facilitar a análise dos dados coletados, como número de curtidas, hashtags, popularidade e frequência das hashtags, id do vídeo, comentários e dados gerais sobre a postagem.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Este projeto usa os seguintes módulos Node.js:
- `fs` (módulo nativo do Node.js)
- `csv-writer`

Você pode instalar o módulo `csv-writer` executando:
```bash
npm install csv-writer
````
## Como Usar
## Executar o Script
Execute o script fornecido para converter o arquivo JSON do TikTok em arquivos CSV e JSON formatados.
```bash
node convertToJsonAndCsv.js
```
## Funcionalidades do Script
## Formatação do JSON
O script ```convertToJsonAndCsv.js``` faz o seguinte:

- Lê o arquivo JSON do TikTok (input.json) e formata os dados.
- Seleciona campos específicos dos dados, como ID do vídeo, informações do autor, contagem de curtidas e estatísticas do vídeo.
- Cria um link para o vídeo TikTok usando o ID e o nome único do autor.
- Escreve os dados selecionados em um novo arquivo JSON (formattedFiles/formatted_data.json).
- Escreve os dados selecionados em um novo arquivo CSV (formattedFiles/formatted_data.csv).



## Observações
- Certifique-se de que o arquivo `input.json`esteja no mesmo diretório que o script.
- Os arquivos CSV e JSON gerados estarão no diretório `formattedFiles`.
## Exemplo de Arquivo input.json
```json
[
    {
        "id": "1",
        "uniqueId": "unique123",
        "author": {
            "uniqueId": "user123",
            "nickname": "JohnDoe",
            "verified": true
        },
        "music": {
            "title": "Sample Music"
        },
        "desc": "Sample Description",
        "challenges": [
            {
                "title": "challenge1",
                "isCommerce": false
            }
        ],
        "authorStats": {
            "heartCount": 100,
            "videoCount": 10
        },
        "stats": {
            "diggCount": 50,
            "shareCount": 5,
            "commentCount": 10,
            "playCount": 200,
            "collectCount": 15
        }
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