import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "15px",
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ val }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKaZKQzyvW_sHTSG-4L2PI_uS1rLnot9A9g&usqp=CAU"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className="text" gutterBottom variant="h5" component="h2">
            {val.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detailsPokemon/${val.name}`} className="link">
          <Button size="small" color="primary">
            <img
              className="imgCard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLytQIur6UQRvhobjVybTe1uAhphjYJ8gXQ&usqp=CAU"
            />
          </Button>
          <Button size="large" color="secondary">
            READ MORE
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
