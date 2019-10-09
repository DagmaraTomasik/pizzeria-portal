import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import styles from './MainLayout.scss';

const MainLayout = ({children}) => (
  <div className={styles.component}>
    <main>
    <PageNav />
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
