import React from 'react';
import { connect } from 'react-redux';
import { changeQuery, discardHistory } from '../../redux/actions/index';

function Search(props) {
  return (
    <div id="search-wrapper">
      <form action="#">
        <input
          type="text"
          id="search"
          placeholder="Search something..."
          onChange={(e) => {
            props.discardHistory();
            props.changeQuery(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default connect(null, { changeQuery, discardHistory })(Search);
