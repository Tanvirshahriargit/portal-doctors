const { MongoClient } = require('mongodb');
const express = require('express')
let admin = require("firebase-admin");
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;

// jwt 
var serviceAccount = require("./doctor-portal-b0f25-firebase-adminsdk-hmbi0-9e85993262.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

// envconfig
require('dotenv').config()

// middleware 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l5n9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// middleware for JWt Tokwn 
async function veryfyToken(req, res, next) {
    if (req.headers.authorization?.startsWith('Bearer ')) {
        const token = req.headers.authorization.split(' ')[1]


        try {
            const decodedUser = await admin.auth().verifyIdToken(token)
            req.decodedEmail = decodedUser.email;
        }
        catch {
            
        }
    }

    
    next()
}

async function run() {
    try {
        await client.connect();
        // console.log("database connect");
        const database = client.db("doctors_portal");
        const appointmentsCollection = database.collection("appointment");
        const userCollection = database.collection("users")

        // get all user paibo
        app.get('/appointments', veryfyToken, async (req, res) => {
            const email = req.query.email;
            const date = req.query.date;
            // console.log(date);
            const quary = { email: email , date: date}
            console.log(quary);
            const cursor = appointmentsCollection.find(quary);
            const appointments = await cursor.toArray();
            res.json(appointments)
        });

        // post api
        app.post('/appointments', async (req, res) => {
            const appointments = req.body;
            const result = await appointmentsCollection.insertOne(appointments)
            res.json(result)
        })

        // user get admin
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const user = await userCollection.findOne(query)
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true
            }
            res.json({admin : isAdmin})
        })

        // POST Users
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user)
            console.log(result);
            res.json(result)
        })
        // Users put and check user Upsert
        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const results = await userCollection.updateOne(filter, updateDoc, options)
            res.json(results)
        })
        // Admin Post 
        app.put('/users/admin', veryfyToken, async (req, res) => {
            const user = req.body;
            const requester=  req.decodedEmail;
            if (requester) {
                const requesterAccount = await userCollection.findOne({ email: requester })
                if (requesterAccount.role === 'admin') {
                    const filter = { email: user.email };
                    const updateDoc = { $set: { role: "admin" } }
                    const result = await userCollection.updateOne(filter, updateDoc)
                    res.json(result)
                }
            }
            else {
                res.status(403).json({message : "You Do not Have acess to make admin"})
            }
            

        })

    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello From Doctor Portal')
})

app.listen(port, () => {
    console.log(`App listening at here http://localhost:${port}`)
})