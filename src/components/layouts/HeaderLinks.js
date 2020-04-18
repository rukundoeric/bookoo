/*eslint-disable*/
import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Apps } from '@material-ui/icons';
import CustomDropdown from '../widgets/dropdown';

import styles from '../../assets/jss/headerLinks';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
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
            <Link href="/anthology">
              <a className={classes.dropdownLink}>Anthology</a>
            </Link>,
            <Link href="/class">
              <a className={classes.dropdownLink}>Class</a>
            </Link>,
            <Link href="/comic-and-graphic-Novel">
              <a className={classes.dropdownLink}>Comic and Graphic Novel</a>
            </Link>,
            <Link href="/crime-and-Detective">
              <a className={classes.dropdownLink}>Crime and Detective</a>
            </Link>,
            <Link href="/drama">
              <a className={classes.dropdownLink}>Drama</a>
            </Link>,
            <Link href="/science-fiction">
              <a className={classes.dropdownLink}>Science Fiction</a>
            </Link>,
            <Link href="/fairy-tale">
              <a className={classes.dropdownLink}>fairy-tale</a>
            </Link>,
            <Link href="/mythology">
              <a className={classes.dropdownLink}>Mythology</a>
            </Link>,
            <Link href="/biograph">
              <a className={classes.dropdownLink}>Biograph</a>
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
