import dbConnect from "../../mongodb/dbConnect";
import User from "../../mongodb/user";
import { hash } from "bcrypt";
import authenticated from "../../src/isAuthenticated";

export default authenticated(async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      hash(req.body.password, 10, async function (err, hash) {
        if (err) {
          console.log(err);
        } else if (!err && hash) {
          try {
            const data = await User.create({
              email: req.body.email,
              password: hash,
              name: req.body.name,
            });
            res.status(201).json({ success: true, data: data.name });
          } catch (err) {
            res.status(500).json({ success: false });
          }
        }
      });
      break;
    default:
      res.status(400).json({ message: "Bad request" });
      break;
  }
});
