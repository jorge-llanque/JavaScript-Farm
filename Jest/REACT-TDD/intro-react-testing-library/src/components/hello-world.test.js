import React from 'react'
import {render, screen} from '@testing-library/react';

import HelloWorld from './HelloWorld';

test('renders hello world', () => {
    render(<HelloWorld />)

    const title = screen.getByText(/helloworld/i);
    expect(title).toBeInTheDocument();
});