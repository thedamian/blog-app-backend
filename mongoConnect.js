import { MongoClient } from 'mongodb'
import 'dotenv/config'

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('blog')
export const posts = database.collection('posts')

client.connect()
console.log('connected to mongo')
