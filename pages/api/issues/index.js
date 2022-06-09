import clientPromise from "../../../lib/mongodb";

export default async function getIssues(req, res) {
  const client = await clientPromise;
  const db = client.db("IssueTracker");

  if (req.method === "GET") {
    const issues = await db.collection("issues").find({}).toArray();
    res.status(200).json({ issues });
  }
}
