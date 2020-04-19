/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rater from 'react-rating';
import { connect } from 'react-redux';
import { setBookId, discardViewHistory } from '../../redux/actions/index';

const useStyles = makeStyles({
  root: {
    margin: 20,
    width: 150,
    '@media (max-width: 450px)': {
      width: '90%',
    },
    height: 350,
    float: 'left',
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: '15px',
  },
  theme: {
    color: '#ffd700',
    border: '1px solid #fff',
    fontSize: '10px',
  },
});

function BookItem(props) {
  const classes = useStyles();
  const { bookInfo, key } = props;
  const {
    id,
    volumeInfo: {
      imageLinks, title, averageRating,
    },
  } = bookInfo;
  const image = imageLinks
    ? imageLinks.thumbnail
    : 'https://indicbookclub.com/backendassets/book_images/default.png';
  return (
    <label
      key={key}
      onClick={() => {
        props.discardViewHistory();
        props.setBookId(id);
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.image}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title.length > 30 ? (
                <div>{`${title.substring(0, 30)}...`}</div>
              ) : (
                <p>{title}</p>
              )}
            </Typography>
            <Rater
              initialRating={averageRating || 0}
              style={{
                color: '#ffd700',
                border: '1px solid #fff',
                fontSize: '6px',
              }}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              readonly
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </label>
  );
}

export default connect(null, { setBookId, discardViewHistory })(BookItem);
