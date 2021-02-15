import dbConnect from "../../../mongodb/dbConnect";
import NewsLetter from "../../../mongodb/newsLetter";
import authenticated from "../../../src/isAuthenticated";

export default authenticated(async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const data = await NewsLetter.find({});
        res.json(data);
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});
