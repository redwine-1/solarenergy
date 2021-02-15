import dbConnect from "../../mongodb/dbConnect";
import Message from "../../mongodb/contact";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const data = await Message.create({
          fullName: req.body.fullName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          message: req.body.message,
        });
        res.status(201).json({ success: true, data: data });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
