import React, { useEffect, useState } from 'react'
import styles from "./Branches.module.css"
import { branchesServices } from '../../API/branchesServices';
import arrow from "../../assets/images/arrowDown.png"

const Branches = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    branchesServices.getAllBranches().then(res => {
      setBranches(res.data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <section className={styles.padding}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <div className={styles.txt__branches}>Branches</div>
          <div className={styles.header__buttons}>
            <button className={styles.header__button}>
              List
            </button>
            <button className={styles.header__button}>
              Map
            </button>
          </div>
        </div>
        <div className={styles.container__body}>
          {
            branches?.map(branch => (
              <div className={styles.branch__container}>
                <div className={styles.branch__upper}>
                  <div className={styles.flex}>
                    <h2 className={styles.branch__name}>{branch.name}</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <p className={styles.address}>{branch.address}</p>
                </div>
                <div className={styles.branch__bottom}>
                  <p className={styles.time}>Working time</p>
                  <p className={styles.from_to_time}>{"Everyday: " + branch.from_time +"-"+ branch.to_time}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}


export default Branches