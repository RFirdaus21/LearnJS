const { MongoClient } = require('mongodb');


async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://127.0.0.1:27017";


    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);


    const dbs = "informatika";
    const cols = "mahasiswa";


    try {
        // Connect to the MongoDB cluster
        await client.connect();


        // Make the appropriate DB calls
        await listDatabases(client);


        await getAllDataMahasiswa(client, dbs, cols);


    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}


main().catch(console.error);


/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();


    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function getAllDataMahasiswa(client, databs, collection){


    // database and collection code goes here
    const db = client.db(databs);
    const coll = db.collection(collection);


    const cursor = coll.find();


    // iterate code goes here
    await cursor.forEach(console.log);


}
