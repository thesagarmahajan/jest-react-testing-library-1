/* Importing from /react/pure instead of /react
to avoid auto cleanup() afterEach */
import {render, screen, within} from '@testing-library/react/pure'
import UserList from '../UserList'

function renderComponent(){
    const users =[
        {name:"user1", email:"user1@gmail.com"},
        {name:"user2", email:"user2@gmail.com"}
    ]
    const {container} = render(<UserList users={users}/>)

    return {users, container};
}

let users, container;

beforeAll(()=>{
    ({users, container} = renderComponent())
    console.log("All Well!!!!!!!!")
})

test('Render one row per user (Way-1)', () => {
    // Render the component
    // renderComponent(); // Already invoked in beforeAll
    
    // Find all rows in the table
    
    // Get the rendered HTML to generate selector
    // screen.logTestingPlaygroundURL()
    
    // const rows = screen .getAllByRole('row'); // Will give 3 rows as there is a <row> tag in <thead> as well
    
    const rows = within(screen.getByTestId("users")).getAllByRole("row")
    


    // Assertion: Correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('Render one row per user (Way-2)', () => {
    // Render the component
    // const {container} = renderComponent() // already invoked in beforeAll
    
    // Find all rows in the table
    
    // Get the rendered HTML to generate selector
    // screen.logTestingPlaygroundURL()
    
    // const rows = screen .getAllByRole('row'); // Will give 3 rows as there is a <row> tag in <thead> as well
    const rows = container.querySelectorAll("tbody tr")
    console.log(rows)
    // Assertion: Correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('Render the name and email of each user', () => {

    // const {users} = renderComponent() // already invoked in beforeAll
    console.log(users)
    users.forEach(user => {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    });

});