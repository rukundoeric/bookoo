/*eslint-disable*/
import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Apps } from '@material-ui/icons';
import CustomDropdown from '../widgets/dropdown';
import { connect } from 'react-redux';
import { changeQuery, discardHistory } from '../../redux/actions/index';

import styles from '../../assets/jss/headerLinks';

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Categories"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Anthology');
              }}
            >
              <a className={classes.dropdownLink}>Anthology</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Class');
              }}
            >
              <a className={classes.dropdownLink}>Class</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Comic and Graphic Novel');
              }}
            >
              <a className={classes.dropdownLink}>Comic and Graphic Novel</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Crime and Detective');
              }}
            >
              <a className={classes.dropdownLink}>Crime and Detective</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Drama');
              }}
            >
              <a className={classes.dropdownLink}>Drama</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Science Fiction');
              }}
            >
              <a className={classes.dropdownLink}>Science Fiction</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('fairy tale');
              }}
            >
              <a className={classes.dropdownLink}>Fairy tale</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Mythology');
              }}
            >
              <a className={classes.dropdownLink}>Mythology</a>
            </label>,
            <label
              onClick={() => {
                props.discardHistory();
                props.changeQuery('Biograph');
              }}
            >
              <a className={classes.dropdownLink}>Biograph</a>
            </label>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default connect(null, { changeQuery, discardHistory })(HeaderLinks);