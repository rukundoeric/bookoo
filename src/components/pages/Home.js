/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classNames from 'classnames';
import compose from 'recompose/compose';
import Loader from 'react-loader-spinner';
import Rater from 'react-rating';
import Button from '@material-ui/core/Button';
import Header from '../layouts/Header';
import HeaderLinks from '../layouts/HeaderLinks';
import GridContainer from '../layouts/GridContainer';
import GridItem from '../items/GridItem';
import Parallax from '../layouts/Parallax';
import styles from '../../assets/jss/home';
import Books from '../layouts/Books';
import BookDetails from '../layouts/BookDetails';
import { setBookId, discardViewHistory } from '../../redux/actions/index';

class Home extends Component {
  state = {
    query: '',
    books: {},
    bookId: undefined,
    bookIndex: Math.floor(Math.random() * (9 - 0 + 1)) + 0,
  };

  componentDidMount() {
    const {
      match: {
        params: { bookId },
      },
    } = this.props;
    this.setState({ bookId });
  }

  componentWillReceiveProps(newProps) {
    const { books, query, bookId } = newProps;
    this.setState({
      books,
      query,
      bookId,
    });
  }

  handleViewBook(id) {
    console.log(id);
    this.props.discardViewHistory();
    this.props.setBookId(id);
  }

  render() {
    const { classes } = this.props;
    const {
      books, bookIndex, query, book, bookId,
    } = this.state;
    return (
      <div>
        <Header
          brand="../../assets/images/logo.png"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white',
          }}
        />
        <Parallax image={require('../../assets/images/parallox1.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  {!books.items ? (
                    <div
                      style={{
                        width: '60',
                        height: '50',
                        display: 'flex',
                      }}
                    >
                      <Loader
                        type="Bars"
                        color="#c5b100"
                        height="100"
                        width="200"
                      />
                    </div>
                  ) : (
                    <div>
                      {books.items[bookIndex].volumeInfo.title.length > 30 ? (
                        <h1 className={classes.title}>
                          {`${books.items[bookIndex].volumeInfo.title.substring(
                            0,
                            30,
                          )}...`}
                        </h1>
                      ) : (
                        <h1 className={classes.title}>
                          {books.items[bookIndex].volumeInfo.title}
                        </h1>
                      )}
                      <div>
                        {books.items[bookIndex].volumeInfo.subtitle ? (
                          <div>
                            {books.items[bookIndex].volumeInfo.subtitle.length
                            > 40 ? (
                              <h3 className={classes.subtitle}>
                                {`${books.items[
                                  bookIndex
                                ].volumeInfo.subtitle.substring(0, 40)}...`}
                              </h3>
                              ) : (
                                <h3 className={classes.subtitle}>
                                  {books.items[bookIndex].volumeInfo.subtitle}
                                </h3>
                              )}
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                      <h4 className={classes.authors}>
                        {`By ${books.items[bookIndex].volumeInfo.authors
                          || ''}`}
                      </h4>
                      <Rater
                        initialRating={
                          books.items[bookIndex].volumeInfo.averageRating || 0
                        }
                        style={{
                          color: '#ffd700',
                          fontSize: '6px',
                        }}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        readonly
                      />
                      <div>
                        <Button
                          className={classNames(classes.ViewButton)}
                          variant="outlined"
                          onClick={() => this.handleViewBook(
                            books.items[bookIndex].id,
                          )
                          }
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {!bookId ? <Books /> : <BookDetails />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.bookoo.books,
  query: state.bookoo.query,
  bookId: state.bookoo.bookId,
});

export default compose(
  withStyles(styles, { ...styles }),
  connect(mapStateToProps, { setBookId, discardViewHistory }),
)(Home);
