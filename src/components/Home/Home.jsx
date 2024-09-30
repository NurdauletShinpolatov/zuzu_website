import React, { useEffect, useState } from "react";
import { productsServices } from "../../API/productsServices";
import Category from "../Category/Category";
import styles from "./Home.module.css";
import headerImage from "../../assets/images/headerImage.png";
import arrowDown from "../../assets/images/arrowDown.png";
import ModalSP from "../ModalSP/ModalSP";
import { useDispatch, useSelector } from "react-redux";
import { setProductsAC } from "../../redux/productReducer";

const formatData = (array) => {
  let res = [];
  let categoryID = 1;
  array.forEach((prod) => {
    if (res.find((category) => category.title == prod.category)) {
      res = res.map((category) =>
        category.title == prod.category
          ? { ...category, products: [...category.products, prod] }
          : category
      );
    } else {
      res = [
        ...res,
        {
          title: prod.category,
          id: categoryID++,
          products: [prod],
        },
      ];
    }
  });
  return res;
};

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    productsServices
      .getAllProducts()
      .then((res) => {
        dispatch(setProductsAC(res));
      })
      .finally(() => setLoading(false));
  }, []);

  const sectionsJSX = formatData(products).map((category) => (
    <Category category={category} key={category?.id} />
  ));

  return (
    <div className={styles.home}>
      {loading ? (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      ) : (
        <>
          <div className={styles.header__image_container}>
            <div className={`${styles.arrow__bg} ${styles.arrow__bg_left}`}>
              <img src={arrowDown} alt="Arrow left" />
            </div>
            <div className={`${styles.arrow__bg} ${styles.arrow__bg_right}`}>
              <img src={arrowDown} alt="Arrow right" />
            </div>
            <img className={styles.header__image} src={headerImage} alt="" />
          </div>
          <div className={styles.products__section}>
            {sectionsJSX}
            <ModalSP />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
