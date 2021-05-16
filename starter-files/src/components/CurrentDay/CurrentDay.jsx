import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = () => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default CurrentDay;
