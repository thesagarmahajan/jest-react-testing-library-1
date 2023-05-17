import { render } from "@testing-library/react";
import CounterExample from "../CounterExample";
import { screen } from "@testing-library/react";
import user from '@testing-library/user-event'
 
test.only('Testing CounterExample', () => {
    render(<CounterExample />)

    let [incButton, decButton, resetButton] = screen.getAllByRole('button')
    let heading = screen.getByRole('heading')
    
    expect(heading.textContent).toBe("0")

    user.click(incButton)
    user.click(incButton)
    expect(heading.textContent).toBe("2")
    user.click(decButton)
    user.click(decButton)
    expect(heading.textContent).toBe("0")
    user.click(decButton)
    expect(heading.textContent).not.toBe("-1")
    user.click(resetButton)
    expect(heading.textContent).toBe("0")
});