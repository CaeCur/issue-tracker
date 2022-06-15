import clientPromise from "../../../lib/mongodb";

export default async function getIssues(req, res) {
  const client = await clientPromise;
  const db = client.db("IssueTracker");

  if (req.method === "GET") {
    const issues = await db.collection("issues").find({}).toArray();
    res.status(200).json({ issues });
  }

  if (req.method === "POST") {
    const issue = req.body;
    const result = await db.collection("issues").insertOne(issue);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.status(201).json({ issue });
  }
}
