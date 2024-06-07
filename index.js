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
    alwaysQuote: true,
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
