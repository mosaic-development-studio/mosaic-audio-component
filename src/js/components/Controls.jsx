import PropTypes from 'prop-types';
import React from 'react';

export const Controls = ({ children }) => {
    return (
        <div className="riverine-controls">
            {children}
        </div>
    );
};

Controls.propTypes = {
    children: PropTypes.node.isRequired
};

export default Controls;
