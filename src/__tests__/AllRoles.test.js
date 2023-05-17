import AllRoles from "../AllRoles";
import { render, screen } from "@testing-library/react";
test('Demonstrating getByRole()', () => {
    let roles = [
        'heading',
        'textbox',
        'checkbox',
        'radio',
        'button',
        'img',
        'list',
        'listitem'
    ]

    render(<AllRoles />)

    roles.forEach(role => {
        let element = screen.getByRole(role)
        expect(element).toBeInTheDocument();
    });

});

test.only('Demonstrating getByTestId()', () => {
    render(<AllRoles />)
    /* let headings = screen.getAllByRole("heading")
    console.log(headings.length) */
    let h2Heading = screen.getByTestId("heading2")
    expect(h2Heading).toBeInTheDocument()
});