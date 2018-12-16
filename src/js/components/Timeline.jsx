import PropTypes from 'prop-types';
import React from 'react';

import { REFS } from '../lib/constants';

export const Timeline = ({
    createRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    hoverWidth,
    playHeadPaddingLeft
}) => {
    return (
        <div className="riverine-progress"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            ref={node => createRef(REFS.TIMELINE, node)}
        >
            <div className="riverine-seek-bar" style={{ width: hoverWidth }}>
                <div
                    className="riverine-play-bar"
                    onMouseDown={handleMouseDown}
                    ref={node => createRef(REFS.PLAYHEAD, node)}
                    style={{
                        paddingLeft: playHeadPaddingLeft
                    }}
                />
            </div>
        </div>
    );
};

Timeline.propTypes = {
    createRef: PropTypes.func.isRequired,
    handleMouseDown: PropTypes.func.isRequired,
    handleMouseMove: PropTypes.func.isRequired,
    handleMouseOut: PropTypes.func.isRequired,
    hoverWidth: PropTypes.string.isRequired,
    playHeadPaddingLeft: PropTypes.string.isRequired
};

export default Timeline;
