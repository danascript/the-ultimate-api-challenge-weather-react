import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';

const Error = ({ message }) => (
    <div className={`${styles.error} alert position-absolute`} role="alert">
        {message}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
