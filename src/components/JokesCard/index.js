import React, { useState, useEffect }  from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { getJokes, loadJokes } from "../../redux/jokes/actions"
import { getImages, loadImages } from "../../redux/images/actions"

const mapStateToProps = ({ images, dispatch, jokes }) => ({
  dispatch,
  images: images.images,
  jokes: jokes.jokes,
  imageLoading: images.loading,
  jokeLoading: jokes.loading
})

const useStyles = makeStyles({
  root: {
    maxHeight: 545,
    boxShadow: "-1px 1px 15px -2px rgba(0,0,0,0.55)"
  },
  media: {
    height: 340,
    objectFit: "contain"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#e93578"
  },
});

const loadJokesNImages = (dispatch, loadImages, loadJokes) => {
  dispatch(loadImages())
  dispatch(loadJokes())
}

const pickAJoke = (jokes) => {
  if(jokes){
    const randomJoke = Math.floor(Math.random() * jokes.length)
    const joke = jokes[randomJoke]
    return joke
  } else {
    return {}
  }

}

const pickAnImage = (images) => {  
  if(images){
    const randomImage = Math.floor(Math.random() * images.length)
    const image = images[randomImage]
    return image
  } else {
    return {}
  }

}

const setJokeHandler = (jokes, setJoke) => {  
  const joke = pickAJoke(jokes)
  setJoke(joke)
}

const setImageHandler = (images, setImage) => {  
  const image = pickAnImage(images)
  setImage(image)
}

const setJokeNImageHandler = (jokes, setJoke, images, setImage, setRevealValue) => {  
  setImageHandler(images, setImage)
  setJokeHandler(jokes, setJoke)
  setRevealValue(false)
}

const punchLineRevealHandler = (shouldReveal, setRevealValue) => {
  setRevealValue(!shouldReveal)
}

const JokesCard = (props) => {
  const {dispatch, images, jokes, imageLoading, jokeLoading} = props  
  const classes = useStyles();

  const img = pickAnImage(images)
  const jke = pickAJoke(jokes)

  const [image, setImage] = useState(img);
  const [joke, setJoke] = useState(jke);
  const [reveal, setRevealValue] = useState(false);

  useEffect(() => {
    dispatch(getJokes())
    dispatch(getImages())
  }, [dispatch])

  return (
    <div> {
      image || joke ?
        <Card className={classes.root}>
          <CardActionArea onClick={() => setJokeNImageHandler(jokes, setJoke, images, setImage, setRevealValue)}>
            <CardMedia
              className={classes.media}
              image={image.url}
              title="Jokes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {joke.setup}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: "bold" }}>Punch line: </span>
                {reveal ? joke.punchline : "???"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <BottomNavigation
            className={classes.footer}
          >
            <BottomNavigationAction
              icon={!reveal ? <VisibilityOffIcon /> : <VisibilityIcon />}
              style={{ color: "#ffff" }}
              onClick={() => punchLineRevealHandler(reveal, setRevealValue)}
            />
          </BottomNavigation>
        </Card> 
        : <div>
            <h1 style={{color: "#ffff"}}>Would yoou like to load sample jokes. Let's get started!</h1>
            <Button 
              variant="contained" 
              color="primary"
              disabled={jokeLoading || imageLoading}
              onClick={() => loadJokesNImages(dispatch, loadImages, loadJokes)}
            >
              Load Jokes
            </Button>
        </div>
      }      
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(JokesCard))