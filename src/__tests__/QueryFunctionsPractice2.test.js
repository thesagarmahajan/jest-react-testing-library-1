import { screen, render } from "@testing-library/react";
import QueryFunctionsPractice2 from "../query_functions_practice/QueryFunctionsPractice2";


test('Selecting Elements', () => {
    render(<QueryFunctionsPractice2 />)
    const elements = [
        screen.getByRole("button"),
        screen.getByLabelText("Email"),
        screen.getByPlaceholderText("name"),
        screen.getByText("Enter Data"),
        screen.getByDisplayValue("user@gmail.com"),
        screen.getByAltText("image"),
        screen.getByTitle("Click to submit"),
        screen.getByTestId("my image")
    ]

    elements.forEach(element => {
        expect(element).toBeInTheDocument()
    });
});