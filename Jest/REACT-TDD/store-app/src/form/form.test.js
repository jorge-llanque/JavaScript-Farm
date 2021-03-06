import React from 'react'
import {screen, render} from '@testing-library/react';
import Form from './Form'

describe('When the form is mounted', () => {

    beforeEach(() => render(<Form/>))

    it('There must be a create product form page', () => {
        expect(screen.getByRole('heading',{name:/create product/i})).toBeInTheDocument()
    })

    it('Should exists the fields: name, size, type(electronic, furniture, clothing)', () => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
        expect(screen.queryByText(/electronic/i)).toBeInTheDocument();
        expect(screen.queryByText(/furniture/i)).toBeInTheDocument();
        expect(screen.queryByText(/clothing/i)).toBeInTheDocument();

    })

    it('Should exists the submit button', () => {
        expect(screen.getByRole('button', {name:/submit/i})).toBeInTheDocument();
    })
})