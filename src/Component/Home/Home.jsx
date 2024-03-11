import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import FetcherProduct from '../FetcherProduct/FetcherProduct';
import MainSlider from '../MainSlider/MainSlider';
import CcategoriesSlider from '../CcategoriesSlider/CcategoriesSlider';


export default function Home() {


  return <>
    <MainSlider/>
   <CcategoriesSlider/>
  <FetcherProduct/>
  </>
}
