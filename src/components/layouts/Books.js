/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-pagination-library';
import Loader from 'react-loader-spinner';
import BookItem from '../items/BookItem';
import { getbooks, discardHistory } from '../../redux/actions/index';
import '../../assets/sass/pagination.scss';

class Books extends Component {
  state = {
    currentPage: 1,
    books: {},
    query: '',
    isLoading: true,
    itemsCount: 10,
  };

  componentDidMount() {
    const { query } = this.state;
    this.props.getbooks(
      query || 'book',
      this.state.itemsCount,
      this.state.currentPage,
    );
  }

  componentWillReceiveProps(newProps) {
    const { books, query } = newProps;
    this.setState({
      books,
      query,
      isLoading: false,
    });
    if (query !== this.state.query) {
      this.props.getbooks(
        query || 'book',
        this.state.itemsCount,
        this.state.currentPage,
      );
    }
  }

  changeCurrentPage = (startIndex) => {
    this.props.discardHistory();
    this.props.getbooks(this.state.query || 'book', this.state.itemsCount, startIndex);
    this.setState({ currentPage: startIndex, isLoading: true });
  };

  render() {
    const { books } = this.state;
    if (books.items) {
      return (
        <div>
          <div>
            {books.items.map(bookInfo => (
              <BookItem bookInfo={bookInfo} />
            ))}
          </div>
          <div className="text-center container pagination-container">
            <Pagination
              currentPage={this.state.currentPage}
              totalPages={Math.ceil(books.totalItems / 20)}
              changeCurrentPage={this.changeCurrentPage}
            />
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
  books: state.bookoo.books,
  query: state.bookoo.query,
});

export default connect(mapStateToProps, { getbooks, discardHistory })(Books);
