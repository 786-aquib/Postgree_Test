import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://rzgijigw:AGT1xDQqp980Larlm-ytUPcEwb3LIdzV@bubble.db.elephantsql.com/rzgixxxx");
    await client.connect();
    return client;
}