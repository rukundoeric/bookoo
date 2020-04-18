/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../layouts/Header';
import HeaderLinks from '../layouts/HeaderLinks';
import GridContainer from '../layouts/GridContainer';
import GridItem from '../items/GridItem';
import Parallax from '../layouts/Parallax';

import styles from '../../assets/jss/home';

const useStyles = makeStyles(styles);


export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Bookoo"
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
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>

  );
}
