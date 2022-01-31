import React from 'react'
import { render } from '@testing-library/react'
import Profile from "./Profile"

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="Ldevine" name="김용주" />);
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const utils = render(<Profile username="Ldevine" name="김용주" />);
        utils.getByText('(김용주)');
        utils.getByText('Ldevine');
        utils.getByText(/김/);
    });
});