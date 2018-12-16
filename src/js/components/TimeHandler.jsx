import PropTypes from 'prop-types';
import React from 'react';

export const TimeHandler = ({ currentTime, duration }) => {
    return (
        <div className="riverine-time-handler">
            <span>{currentTime} / {duration}</span>
        </div>
    );
};

TimeHandler.propTypes = {
    currentTime: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
};

export default TimeHandler;
