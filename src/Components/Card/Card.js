import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    padding: "120px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ turnImg, pokemonDetails }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className="cardHeader"
        avatar={
          <Avatar className={classes.avatar}>
            <img className="imgAvatar" src={turnImg} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pokemonDetails && pokemonDetails.name}
        subheader={"N °  " + pokemonDetails && pokemonDetails?.id}
      />
      <CardMedia className={classes.media} image={turnImg} />

      <div className="containerIconButton">
        <IconButton>
          <FavoriteIcon className="icon" />
        </IconButton>
      </div>
    </Card>
  );
}
