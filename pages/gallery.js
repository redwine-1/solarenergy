import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
/gallery/;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 120px",
    margin: "150px auto",
    [theme.breakpoints.up("md")]: {
      padding: "0 80px",
      margin: "120px auto",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "0 20px",
      margin: "100px auto",
    },
  },


}));

function StandardImageList(props) {
  const classes = useStyles();

  const getCols = (screenWidth) => {
    if (isWidthUp("lg", screenWidth)) {
      return 3;
    } else if (isWidthUp("sm", screenWidth)) {
      return 2;
    } else {
      return 1;
    }
  };
  const cols = getCols(props.width);
  return (
    <ImageList cols={cols} className={classes.root}>
      {itemData.map((item) => (
        <ImageListItem  key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
          
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default withWidth()(StandardImageList);
const itemData = [
  {
    img:
      "https://images.unsplash.com/photo-1574360773950-133867861ae9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Working in solar project",
  },
  {
    img:
      "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title: "Working in solar project",
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939551_1280.jpg",
    title: "Solar Panel on roof",
  },
  {
    img:
      "https://images.freeimages.com/images/large-previews/10c/solar-panel-in-the-field-5-1415227.jpg",
    title: "Solar Post",
  },
  {
    img:
      "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    title: "Inverter",
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_1280.jpg",
    title: "Solar Panel on roof",
  },
  {
    img:
      "https://images.unsplash.com/photo-1574360773950-133867861ae9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Working in solar project",
  },
  {
    img:
      "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title: "Working in solar project",
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939551_1280.jpg",
    title: "Solar Panel on roof",
  },
  {
    img:
      "https://images.freeimages.com/images/large-previews/10c/solar-panel-in-the-field-5-1415227.jpg",
    title: "Solar Post",
  },
  {
    img:
      "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    title: "Inverter",
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_1280.jpg",
    title: "Solar Panel on roof",
  },
];
