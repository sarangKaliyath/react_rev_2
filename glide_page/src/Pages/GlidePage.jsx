import React from "react";
import styles from "./GlidePage.module.css";
import { Card } from "../Components/Card";
import { data } from "../Components/CardData.js";

export const GlidePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Masai Glide Program</h2>
      </div>
      <div className={styles.head_2}>
        <h3>Living Allowance for Students</h3>
      </div>
      <div className={styles.text}>
        <div>
          For the entire duration of the full-time courses, Masai School offers
          financial support to the
        </div>
        <div>
          top-performing students with a living allowance of Rs. 15,000 per
          unit.
        </div>
      </div>
      <div className={styles.text_align}>
        <div className={styles.text_1}>
          After closely monitoring the performance of our students in Unit 1, we
          evaluate them based
        </div>
        <div>on their -</div>
      </div>

      <div className={styles.grid_box}>
        {data.map((data) => {
          return <Card data={data} />;
        })}
      </div>

      <div className={styles.text_3}>
        <div>
          Based on the overall performances, we choose the top performing
          students who will be
        </div>
        <div>
          eligible for the living allowance of Rs. 15,000 per unit, which will
          be added to their ISA amount.
        </div>
        <div>
          (At Masai School, each unit equals to 5 weeks and one full-time course
          has 6 units)
        </div>
      </div>

      <div className={styles.link}>Know More</div>
    </div>
  );
};
