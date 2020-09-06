import React, { useState } from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 1300,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {



    const { userId, id, title, body } = props.post;

    const classes = useStyles();

    return (

        <div  className="posts-section">
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://antitrustlair.files.wordpress.com/2013/02/post_danmark.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            ID Number: {id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title: {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Link style={{textDecoration:'none'}} to = {`/post/${id}`}>
                        <Button variant="contained" color="primary">Post Detail</Button>
                    </Link>
                
                </CardActions>
            </Card>

        </div>
    );
};

export default Post;