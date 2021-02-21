import React, { Component } from 'react'
import projects from "./projects.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imdb from "../logos/imdb.png"
import foods from "../logos/foods.jpg"

export default class Projects extends Component {
  render() {
    return (
        <div className='projects' >

        <h1 className='project-heading'>Projects</h1>


<div className='card'>
<Card >
      <CardActionArea>
        <CardMedia
         className='imdb'
         component="img"
          image={imdb}
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Movie Sentimental Analysis (NLP)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ul>
                <li>Used Advanced NLP Classification Algorithm on 50,000 Reviews.</li>
                <li>Used Random Forest and TF-IDF on reviews.</li> 
                <li>Data Set:-IMDB ,Target (Sentiment):-Positive Or Negative.</li> 
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    


    <div className='card1'>
<Card >
      <CardActionArea>
        <CardMedia
         className='food'
         component="img"
          image={foods}      
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Food Categories Classification (Deep Learning)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ul>
                <li>Used Advanced CNN Algorithm on 4931 Images to classify 11 Food Categories.</li>
                <li>Used Advanced FastAi Image Classification Techniques.</li> 
                <li>Accuracy :- 93.956 (TestData-1671).</li> 
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

        </div>
     
    )
  }
}
