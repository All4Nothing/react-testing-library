import React from 'react'
import { render, fireEvent } from '@testing=library'
import Counter from './Counter'

describe('<Counter />', () => {
 it('matches snapshot', () => {
     const utils = render(<Counter />);
     expect(utils.container).toMatchSnapshot();
 });
 it('has a number and two buttons', () => {
     const utils = render('<Counter />')
     utils.getByText('0')
     utils.getByText('1')
     utils.getByText('2')
     const number = utils.getByText('0')
     const plusButton = utils.getByText('+1')
     const 
 })   
})