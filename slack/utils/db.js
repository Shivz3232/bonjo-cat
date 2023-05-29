const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function accessible() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getChannel(channelId) {
  accessible();

  const db = client.db("prod");
  const collection = db.collection("channels");

  const result = await collection.findOne({ channelId });

  return result;
}

async function saveTrackId(trackId) {
  accessible();

  const db = client.db("prod");
  const collection = db.collection("channels");

  const doc = {
    trackId,
    added: new Date().toISOString(),
  };

  const result = await collection.insertOne(doc)

  return result;
}

module.exports = {
  getChannel,
  saveTrackId
}
