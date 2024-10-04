
import React from 'react';
import styles from './ProductCard.module.css'; 
import { Product } from '../../types/Product';
import { FaHeart, FaStar } from 'react-icons/fa';
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
      toast.success(`${product.title} sevimlilarga qo'shildi.`);
    } else {
      toast.info(`${product.title} sevimlilardan olib tashlandi.`);
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
        <p className={styles.price}>${product.price}</p>
        <div>
          <span className={styles.rating}>
            <FaStar /> {product.rating}
          </span>
          <span className={styles.stock}>In Stock: {product.stock}</span>
        </div>
        <p className={styles.brand}>{product.brand}</p>
      </div>
      <button onClick={handleLike} className={styles.likeButton}>
        <FaHeart color={isLiked ? 'red' : 'grey'} />
      </button>
    </div>
  );
};

export default ProductCard;
