import {findByRole, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from '../UserForm'


test('UFT-1: Shows two inputs and a button', () => {
    // Render the component
    render(<UserForm />)
    // Find an element in the rendered component
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    // Assertion - Make sure the component is doing what we expected it to do
    expect(inputs).toHaveLength(2); 
    expect(button).toBeInTheDocument();
});

test('UFT-2: It Calls onUserAdd when the form is submitted (Not the best implementation)', () => {
    
    // It is going to work but it is not the best implementation
    const argList = [];
    const callback = (...args)=>{
        argList.push(args)
    }

    // Try to render component
    render(<UserForm onUserAdd={callback}/>)
    
    // Find the two inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox')
    
    // Simulate typing in a name
    user.click(nameInput)
    user.keyboard("user1")
    
    // Simulate typing in an email
    user.click(emailInput)
    user.keyboard("user1@gmail.com")
    
    // Find a button 
    const button = screen.getByRole("button")
    
    // Simulate clicking the button
    user.click(button)

    // Assertion to make suer 'onUserAdd' gets called with email, name
    expect(argList).toHaveLength(1)
    expect(argList[0][0]).toEqual({name:"user1", email:"user1@gmail.com"})

});

test('UFT-3: It Calls onUserAdd when the form is submitted (Better Implementation)', () => {
   
    // Creating Mock Function
    const mock = jest.fn()

    // Try to render component
    render(<UserForm onUserAdd={mock}/>)
    
    // Find the two inputs
    const nameInput = screen.getByRole("textbox", {
        name: /name/i,
    })
    const emailInput = screen.getByRole("textbox", {
        name: /email/i,
    })
    
    // Simulate typing in a name
    user.click(nameInput)
    user.keyboard("user1")
    
    // Simulate typing in an email
    user.click(emailInput)
    user.keyboard("user1@gmail.com")
    
    // Find a button 
    const button = screen.getByRole("button")
    
    // Simulate clicking the button
    user.click(button)

    // Assertion to make suer 'onUserAdd' gets called with email, name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:"user1", email:"user1@gmail.com"});

});

test('UFT-4: Empty the two inputs when form is submitted', () => {
    
    // We don't care about suibmitted value so no mock required
    render(<UserForm onUserAdd={()=>{}} />)

    const nameInput = screen.getByRole("textbox", {name: /name/i})    
    const emailInput = screen.getByRole("textbox", {name: /email/i})    
    const button = screen.getByRole("button")

    user.click(nameInput)
    user.keyboard("new user")

    user.click(emailInput)
    user.keyboard("new.user@gmail.com")

    user.click(button)

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
});
