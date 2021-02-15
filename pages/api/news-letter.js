import dbConnect from "../../mongodb/dbConnect";
import NewsLetter from "../../mongodb/newsLetter";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const exist = await NewsLetter.findOne({ email: req.body.email });
        if (exist) {
          res.status(201).json({ success: true, data: "Already exists" });
        } else {
          const data = await NewsLetter.create({ email: req.body.email });
          res.status(201).json({ success: true, data: data });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
