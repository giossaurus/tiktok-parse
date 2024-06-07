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
            {id: 'id', title: 'ID'},
            {id: 'uniqueId', title: 'UniqueId'},
            {id: 'nickname', title: 'Nickname'},
            {id: 'verified', title: 'Verified'},
            {id: 'title', title: 'Title'},
            {id: 'desc', title: 'Description'},
            {id: 'isCommerce', title: 'IsCommerce'},
            {id: 'stats', title: 'Stats'},
            {id: 'hashtagName', title: 'HashtagName'},
            {id: 'heartCount', title: 'HeartCount'},
            {id: 'videoCount', title: 'VideoCount'},
            {id: 'diggCount', title: 'DiggCount'},
            {id: 'shareCount', title: 'ShareCount'},
            {id: 'commentCount', title: 'CommentCount'},
            {id: 'playCount', title: 'PlayCount'},
            {id: 'collectCount', title: 'CollectCount'}
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
