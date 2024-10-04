
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { FaHeart } from 'react-icons/fa';
import { useAppSelector } from '../../hooks';


const Header: React.FC = () => {
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const location = useLocation();

  return (
    <header className={styles.header}>
    <nav>
        <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <h1>Shopping Liked</h1>
        <Link
          to="/like"
          className={`${styles.link} ${
            location.pathname === '/like' ? styles.active : ''
          }`}
        >
          <FaHeart color="red" /> {wishlistCount > 0 && `${wishlistCount}`}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
