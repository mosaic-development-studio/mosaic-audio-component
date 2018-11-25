import React from 'react';
import renderer from 'react-test-renderer';

import { Timeline } from '../../src/js/components/Timeline';

describe('Timeline snapshots', () => {
    it('should match the snapshot with required props', () => {
        const TimelineComponent = renderer
            .create(
                <Timeline
                    createRef={() => {}}
                    handleMouseDown={() => {}}
                    handleMouseMove={() => {}}
                    handleMouseOut={() => {}}
                    hoverWidth="20px"
                    playHeadPaddingLeft="40px"
                />
            )
            .toJSON();

        expect(TimelineComponent).toMatchSnapshot();
    });
});