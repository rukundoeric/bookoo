/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Rater from 'react-rating';
import { getbookDetails, discardViewHistory } from '../../redux/actions/index';

class BookDetails extends Component {
  state = {
    book: undefined,
  };

  componentDidMount() {
    const { bookId, getbookDetails: getBookDetails } = this.props;
    getBookDetails(bookId);
  }

  componentWillReceiveProps(newProps) {
    const { book } = newProps;
    this.setState({ book });
  }

  handleBack() {
    const { discardViewHistory: clearHistory } = this.props;
    clearHistory();
  }

  handleReadBook(url) {
    window.open(url, '_blank');
  }

  handleDownloadBook(url) {
    window.open(url, '_blank');
  }

  render() {
    const { book } = this.state;
    if (book) {
      const {
        volumeInfo: {
          imageLinks,
          title,
          averageRating,
          description,
          subtitle,
          pageCount,
          authors,
          categories,
          publisher,
          publishedDate,
        },
        accessInfo: {
          pdf: { acsTokenLink },
          webReaderLink,
        },
      } = book;
      return (
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-4">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src={imageLinks.thumbnail} />
                    </div>
                  </div>
                </div>
                <div className="details col-md-8">
                  <h3 className="product-title">{title}</h3>
                  <h6 className="product-title">{subtitle}</h6>
                  <div className="rating">
                    <Rater
                      initialRating={averageRating || 0}
                      style={{
                        color: '#ffd700',
                        border: '1px solid #fff',
                        fontSize: '10px',
                      }}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      readonly
                    />
                    {' '}
                    <br />
                    <span className="review-no">{`${pageCount} pages`}</span>
                  </div>
                  <div
                    className="product-description"
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                  <p className="vote">
                    <strong>Authors: </strong>
                    {authors}
                  </p>
                  <p className="vote">
                    <strong>Categories: </strong>
                    {categories || 'NONE'}
                  </p>
                  <p className="vote">
                    <strong>Publisher: </strong>
                    {publisher}
                  </p>
                  <p className="vote">
                    <strong>PublishedDate: </strong>
                    {publishedDate}
                  </p>
                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                      onClick={() => this.handleBack()}
                    >
                      <span className="fa fa-arrow-left" />
                      &nbsp;
                      <span>Back</span>
                    </button>
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                      onClick={() => this.handleReadBook(webReaderLink)}
                    >
                      <span className="fa fa-folder-open" />
                      &nbsp;
                      <span>Read</span>
                    </button>
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                      onClick={() => this.handleDownloadBook(acsTokenLink)}
                    >
                      <span className="fa fa-download" />
                    </button>

                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="Bars" color="#c5b100" height="100" width="100" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.bookoo.book,
  bookId: state.bookoo.bookId,
});

export default connect(mapStateToProps, { getbookDetails, discardViewHistory })(
  BookDetails,
);
