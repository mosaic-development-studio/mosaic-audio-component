import React from 'react';
import renderer from 'react-test-renderer';

import { TimeHandler } from '../../src/js/components/TimeHandler';

describe('TimeHandler snapshots', () => {
    it('should match the snapshot with required props', () => {
        const TimeHandlerComponent = renderer
            .create(
                <TimeHandler
                    currentTime="00:00"
                    duration="02:32"
                />
            )
            .toJSON();

        expect(TimeHandlerComponent).toMatchSnapshot();
    });
});