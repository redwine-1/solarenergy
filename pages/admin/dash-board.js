import { myGet } from "../../src/myGet";
import Messages from "../../src/dashboard/Messages";
import NewsLetter from "../../src/dashboard/NewsLetter";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacing: {
    margin: "1rem",
  },
});
const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;

export default function DashBoard({ newsletters, messages }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.spacing}>
        <Messages messages={messages} />
      </Box>
      <Box className={classes.spacing}>
        <NewsLetter newsletters={newsletters} />
      </Box>
    </React.Fragment>
  );
}
DashBoard.getInitialProps = async (ctx) => {
  const cookie = await ctx.req.headers.cookie;
  const newsletters = await myGet(`${Base_Url}/api/admin/news-letter`, ctx, cookie);
  const messages = await myGet(`${Base_Url}/api/admin/contact`, ctx, cookie);
  return { newsletters: newsletters, messages: messages };
};
