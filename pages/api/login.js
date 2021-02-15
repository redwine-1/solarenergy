import dbConnect from "../../mongodb/dbConnect";
import User from "../../mongodb/user";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import cookie from "cookie";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const data = await User.findOne({ email: req.body.email });
        if (data.email === req.body.email) {
          compare(
            req.body.password,
            data.password,
            async function (err, result) {
              if (!err && result) {
                const claims = { sub: data._id, myPersonEmail: data.email };
                const jwt = await sign(claims, process.env.SECRET, {
                  expiresIn: "24h",
                });
                res.setHeader(
                  "set-Cookie",
                  cookie.serialize("auth", jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    sameSite: "strict",
                    maxAge: 86400,
                    path: "/",
                  })
                );
                res.json({ message: `Welcome Back ${data.name}` });
              } else if (!result) {
                res
                  .status(400)
                  .json({ success: false, data: "something went wrong" });
              }
            }
          );
        } else {
          res
            .status(400)
            .json({ success: false, data: "something went wrong" });
        }
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Bad request" });
      break;
  }
};
