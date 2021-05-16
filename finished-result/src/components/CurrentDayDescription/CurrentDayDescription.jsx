import React from 'react';
import PropTypes from 'prop-types';

import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <CurrentDayDescriptionItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

CurrentDayDescription.propTypes = {
    forecast: PropTypes.array,
};

export default CurrentDayDescription;
