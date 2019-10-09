import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.link}>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.link}>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className={styles.link}>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.link}>Kitchen</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' className={styles.link}>New order</NavLink>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} activeClassName='active' className={styles.link}>Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active' className={styles.link}>New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active' className={styles.link}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`} activeClassName='active' className={styles.link}>Event</Link>
  </nav>
);
export default PageNav;
