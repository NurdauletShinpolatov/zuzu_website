import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderToCartAC, setSelectedProductAC } from '../../redux/productReducer';
import styles from './ModalSP.module.css'
import { addToCartAC } from '../../redux/userReducer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 24,
  p: 3,
  borderRadius: 3
};

function ModalSP() {
  const selectedProduct = useSelector(state => state.product.selectedProduct)
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()
  const [cnt, setCnt] = useState(1);
  const [isOpen, setIsOpen] = useState(false)

  const prod = products.find((prod) => prod.id == selectedProduct);
  
  const totalPrice =  prod?.price*cnt
  const totalPriceStr = prod? "$" + totalPrice?.toString() : "";
  
  const decrementCnt = () => { cnt == 1 ? dispatch(setSelectedProductAC("")) : setCnt(cnt-1) }

  const incrementCnt = () => { setCnt(cnt+1) }
  
  const handleClose = () => dispatch(setSelectedProductAC(""));


  const addToCardHandle = () => {
    dispatch(addOrderToCartAC({
      productID: prod.id,
      quantity: cnt
    }));
    dispatch(setSelectedProductAC(""));
    setCnt(1);
  };

  useEffect(() => {
    setIsOpen(selectedProduct != "" && cnt != 0)
  }, [selectedProduct, cnt])

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className={styles.product}>
            <div className={styles.product__image_container}>
              <img className={styles.product__image} src={ prod?.image } alt="Product image" />
            </div>
            <div className={styles.product__info}>
              <div className={styles.product__title}>
                { prod?.title }
              </div>
              <div className={styles.product__description}>
                { prod?.description }
              </div>
              <div className={styles.product__actions}>
                <div className={styles.counter}>
                  <button onClick={decrementCnt} className={styles.counter__btn}>-</button>
                  <p  className={styles.counter__txt}>{ cnt }</p>
                  <button onClick={incrementCnt} className={styles.counter__btn}>+</button>
                </div>
                <span onClick={addToCardHandle} className={styles.product__add_btn}>
                  <p>Add to Cart</p>
                  { totalPriceStr }
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalSP
