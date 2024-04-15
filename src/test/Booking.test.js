import { render, screen } from "@testing-library/react";
import {BookingPage} from '../pages/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})