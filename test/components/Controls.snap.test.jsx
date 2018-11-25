import React from 'react';
import renderer from 'react-test-renderer';

import { Controls } from '../../src/js/components/Controls';

describe('Controls snapshots', () => {
    it('should match the snapshot with required props', () => {
        const ControlsComponent = renderer
            .create(
                <Controls>
                    <button
                        className="test-button"
                        onClick={() => {}}
                    />
                </Controls>
            )
            .toJSON();

        expect(ControlsComponent).toMatchSnapshot();
    });
});