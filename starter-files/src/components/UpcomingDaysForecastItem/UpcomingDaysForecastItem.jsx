import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = () => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}></li>
);

export default UpcomingDaysForecastItem;
