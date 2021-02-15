import dbConnect from "../../../../mongodb/dbConnect";
import NewsLetter from "../../../../mongodb/newsLetter";
import authenticated from "../../../../src/isAuthenticated";

export default authenticated(async (req, res) => {
  const { method } = req;
  const ID = req.query.newsLetterId;
  await dbConnect();
  switch (method) {
    case "DELETE":
      try {
        const data = await NewsLetter.findByIdAndRemove(ID);
        res.json({ success: true, data: data });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});
