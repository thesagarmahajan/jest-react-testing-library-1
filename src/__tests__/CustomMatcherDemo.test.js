import { screen , render, within} from "@testing-library/react";
import CustomMatcherDemo from "../CustomMatcherDemo";

function toContainRole(container, role, quantity=1){
    // return {
    //     pass: false,
    //     message: ()=> "The container did not contain 2 buttons"
    // }

    const elements = within(container).queryAllByRole(role)
    if(elements.length===quantity){
        return {
            pass:true
        }
    }

    return {
        pass:false,
        message:()=>`Expected to find ${quantity} ${role} Elements
        Found ${elements.length} instead.`
    }
}

expect.extend({toContainRole})

test('Checking two buttons (Without custom matcher)', () => {
    render(<CustomMatcherDemo />)

    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(2)
});

test('Checking two buttons (With custom matcher)', () => {
    render(<CustomMatcherDemo />)
    const form = screen.getByRole("form")
    expect(form).toContainRole("button", 1)
});