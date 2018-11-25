import React from 'react';
import renderer from 'react-test-renderer';

import { PlayButton } from '../../src/js/components/PlayButton';

describe('PlayButton snapshots', () => {
    it('should match the snapshot with required props', () => {
        const PlayButtonComponent = renderer
            .create(
                <PlayButton play={() => {}}/>
            )
            .toJSON();

        expect(PlayButtonComponent).toMatchSnapshot();
    });
});