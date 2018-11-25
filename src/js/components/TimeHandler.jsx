import PropTypes from 'prop-types';
import React from 'react';

export const TimeHandler = props => {
    return (
        <div className="riverine-time-handler">
            <span>{props.currentTime} / {props.duration}</span>
        </div>
    );
};

TimeHandler.propTypes = {
    currentTime: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
};

export default TimeHandler;