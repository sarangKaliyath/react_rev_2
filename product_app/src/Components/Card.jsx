import React from "react";
import styles from "./Card.module.css";

export const Card = ({ data, handleAdd, handleSub }) => {
  return (
    <div className={`${styles.container}`}>
      <div>
        <h2>Item : {data.product_name}</h2>
      </div>
      <div className={styles.price}>
        <span>Price: {data.price}</span>
      </div>
      <div>
        <div className={styles.quantity}>
          Quantity:
          <div>
            <button
              onClick={() => {
                handleAdd(data.id);
              }}
            >
              +
            </button>
            <span>{data.quantity}</span>
            <button
              onClick={() => {
                handleSub(data.id, data.quantity);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
