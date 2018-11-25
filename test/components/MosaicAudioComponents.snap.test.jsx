import React from 'react';
import renderer from 'react-test-renderer';

import { MosaicAudioComponent } from '../../src/js/components/MosaicAudioComponent';

describe.skip('MosaicAudioComponent snapshots', () => {
    it('should match the snapshot with required props', () => {
        const MosaicAudioComponentComponent = renderer
            .create(
                <MosaicAudioComponent
                    source="../audio/test.mp3"
                />
            )
            .toJSON();

        expect(MosaicAudioComponentComponent).toMatchSnapshot();
    });

    it('should match the snapshot with all props', () => {
        const MosaicAudioComponentComponent = renderer
            .create(
                <MosaicAudioComponent
                    audioNodeId="audio-node"
                    loop={true}
                    preload="auto"
                    source="../audio/test.mp3"
                />
            )
            .toJSON();

        expect(MosaicAudioComponentComponent).toMatchSnapshot();
    });
});