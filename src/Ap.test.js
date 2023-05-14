import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import App from "./App";

test('Can receive a new user and show it on a list', () => {
        // Rnder App Component
        render(<App />)

        // Selecting Textboxes
        const nameInput = screen.getByRole("textbox", {
            name: /name/i,
        })
        const emailInput = screen.getByRole("textbox", {
            name: /email/i,
        })
        const button = screen.getByRole("button")


        // Inserting data into text boxes
        user.click(nameInput)
        user.keyboard("new user")
        user.click(emailInput)
        user.keyboard("new.user@gmail.com")
        user.click(button)

        const nameCell = screen.getByRole('cell', { name: "new user" })
        const emailCell = screen.getByRole('cell', { name: "new.user@gmail.com" })

        expect(nameCell).toBeInTheDocument();
        expect(emailCell).toBeInTheDocument();
        // screen.debug()
});