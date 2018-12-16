import PropTypes from 'prop-types';
import React from 'react';

import { REFS } from '../lib/constants';

export const AudioNode = ({
    audioNodeId,
    createRef,
    loop,
    movePlayHead,
    preload,
    source,
    updateDuration,
    updateTime
}) => {
    return (
        <audio
            id={audioNodeId}
            loop={loop}
            onDurationChange={updateDuration}
            onTimeUpdate={() => {
                updateTime();
                movePlayHead();
            }}
            preload={preload}
            ref={node => createRef(REFS.AUDIO, node)}
        >
            <source src={source} />
        </audio>
    );
};

AudioNode.defaultProps = {
    audioNodeId: null,
    loop: false,
    preload: 'auto'
};

AudioNode.propTypes = {
    audioNodeId: PropTypes.string,
    createRef: PropTypes.func.isRequired,
    loop: PropTypes.bool,
    movePlayHead: PropTypes.func.isRequired,
    preload: PropTypes.string,
    source: PropTypes.string.isRequired,
    updateDuration: PropTypes.func.isRequired,
    updateTime: PropTypes.func.isRequired
};

export default AudioNode;
