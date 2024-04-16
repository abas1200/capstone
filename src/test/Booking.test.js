import { render, screen } from "@testing-library/react";
import {BookingForm} from '../components/BookingForm';

// test('Renders the BookingForm heading', () => {
//     render(<BookingPage />);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// })

test('renders BookingForm component', () => {
    const mockOnFormSubmit = jest.fn();
    const mockOnChangeDate = jest.fn();
    const availableTimes = ["12:00", "13:00", "14:00"];
  
    render(
      <BookingForm
        onSubmit={mockOnFormSubmit}
        availableTimes={availableTimes}
        onChangeDate={mockOnChangeDate}
      />
    );
  
    const dateLabel = screen.getByText(/Date/i);
    expect(dateLabel).toBeInTheDocument();
  });
  