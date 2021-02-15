import authenticated from "../../../src/isAuthenticated";

export default authenticated(async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json({ success: true });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});
