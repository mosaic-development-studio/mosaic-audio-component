import React from 'react';
import renderer from 'react-test-renderer';

import { PauseButton } from '../../src/js/components/PauseButton';

describe('PauseButton snapshots', () => {
    it('should match the snapshot with required props', () => {
        const PauseButtonComponent = renderer
            .create(
                <PauseButton pause={() => {}}/>
            )
            .toJSON();

        expect(PauseButtonComponent).toMatchSnapshot();
    });
});