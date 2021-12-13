import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '..Error';
import Loader from '..Loader';
import Forecast from '..Forecast';

import styles from '/.Page.module.css'


const Page = () => {
    return (
        <Fragment>
            <Header />
        <div className={styles.box}>
        
        {/* Form */}
<Form />
        {/* Error */}

{/* Loader */}


{/* Forecast */}
        
        
        </div>
        </Fragment>
    );
};

export default Page;
