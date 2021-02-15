import dbConnect from "../../../../mongodb/dbConnect";
import Message from "../../../../mongodb/contact";
import authenticated from "../../../../src/isAuthenticated";

export default authenticated(async (req, res) => {
  const { method } = req;
  const ID = req.query.contactId;
  await dbConnect();
  switch (method) {
    case "DELETE":
      try {
        const data = await Message.findByIdAndRemove(ID);
        res.json({ success: true, data: data });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const data = await Message.findByIdAndUpdate(ID, {
          $set: { isHandled: true },
        });
        res.json({ success: true, data: data });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    case "GET":
      try {
        const data = await Message.findById(ID);
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
