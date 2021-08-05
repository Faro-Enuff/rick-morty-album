import FlipCardBack from "../Viewer/FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  charsList: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  flipCard: {
    backgroundColor: "rgba(226, 221, 230)",
    width: 300,
    height: 300,
    padding: 25,
    margin: 15,
    perspective: 1000,
    borderRadius: "25px 25px 25px 25px",
    border: "2px solid rgb(108, 25, 116)",
    boxShadow:
      "20px 20px 40px rgba(0, 0, 0, 0.15), -0.1em 0 0.3em rgba(108, 25, 116)",
  },
  flipCardInner: {
    borderRadius: "25px 25px 25px 25px",
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
  },
});

const FlipCard = ({ chars, searchTerm }) => {
  const classes = useStyles();
  return (
    <div className={classes.charsList}>
      <Grid container>
        {chars
          .filter((char) => {
            if (searchTerm === "") {
              return char;
            } else if (
              char.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return char;
            }
          })
          .map((char) => (
            <div className={classes.flipCard} key={char.id}>
              <div className={classes.flipCardInner}>
                <FlipCardFront char={char} />
                <FlipCardBack char={char} />
              </div>
            </div>
          ))}
        <span className="stretch"></span>
      </Grid>
    </div>
  );
};

export default FlipCard;