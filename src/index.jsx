import './css/player.css';
import React from 'react';
import { render } from 'react-dom';
import MosaicAudioComponent from './js/components/MosaicAudioComponent';

const Root = () => {
    return (
        <div>
            <MosaicAudioComponent
                source="audio/1.mp3"
            />
        </div>
    );
};

render(<Root/>, document.querySelector('#root'));
