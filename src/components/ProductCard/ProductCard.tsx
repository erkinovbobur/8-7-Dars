import { AiOutlineDollar } from "react-icons/ai"; 

import { AiTwotoneStar } from "react-icons/ai"; 
import { AiFillLike } from "react-icons/ai"; 

import React from 'react';
import styles from './ProductCard.module.css'; 
import { Product } from '../../types/Product';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleLike } from '../../features/wishlist/wishlistSlice';
import { toast } from 'react-toastify'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id)
  );

  const handleLike = () => {
    dispatch(toggleLike(product));
    if (!isLiked) {
      toast.success(`${product.title} 😊`);
    } else {
      toast.info(`${product.title} 😞`);
    }
  };

  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <div>
          <h3>{product.title}</h3>
          <span className={styles.category}>{product.category}</span>
        </div>
        <p className={styles.price}><AiOutlineDollar />{product.price}</p>
        <div>
          <span className={styles.rating}>
           <AiTwotoneStar />{product.rating}
          </span>
        
        </div>
        <p className={styles.brand}>{product.brand}</p>
      </div>
      <button onClick={handleLike} className={styles.likeButton}>
       <AiFillLike color={isLiked ? 'red' : 'grey'} />
       
        
      </button>
    </div>
  );
};

export default ProductCard;
