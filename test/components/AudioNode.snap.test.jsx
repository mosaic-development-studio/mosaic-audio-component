import React from 'react';
import renderer from 'react-test-renderer';

import { AudioNode } from '../../src/js/components/AudioNode';

describe('AudioNode snapshots', () => {
    it('should match the snapshot with required props', () => {
        const AudioNodeComponent = renderer
            .create(
                <AudioNode
                    createRef={() => {}}
                    movePlayHead={() => {}}
                    updateDuration={() => {}}
                    source="../audio/test.mp3"
                    updateTime={() => {}}
                />
            )
            .toJSON();

        expect(AudioNodeComponent).toMatchSnapshot();
    });

    it('should match the snapshot with all props', () => {
        const AudioNodeComponent = renderer
            .create(
                <AudioNode
                    audioNodeId="audio-node"
                    createRef={() => {}}
                    loop={true}
                    movePlayHead={() => {}}
                    preload="auto"
                    source="../audio/test.mp3"
                    updateDuration={() => {}}
                    updateTime={() => {}}
                />
            )
            .toJSON();

        expect(AudioNodeComponent).toMatchSnapshot();
    });
});