const {MongoClient} = require('mongodb')

const url='mongodb://localhost:27019'
const client = new MongoClient(url)

const dbName = 'game';

async function main() {
    await client.connect();
    console.log('connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('game');
    collection.findOne({_id:678071}).then((result)=>(
        console.log(result)
    ))
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());