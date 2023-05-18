import { screen, render, getAllByRole } from "@testing-library/react";
import QueryFunctionsPractice1 from "../query_functions_practice/QueryFunctionsPractice1";

test('getBy, queryBy, findBy finding 0 elements', async () => {
    render(<QueryFunctionsPractice1 />)
    // getByRole
    // screen.getByRole("textbox");
    // Assertion to confirm there is not textbox
    expect(() => {
        screen.getByRole("textbox");
    }).toThrow();
    // queryByRole
    expect(screen.queryByRole("textbox")).toBe(null)
    // findByRole

    // Not going to work as findByRole works asynchronously
    /* expect(() => {
        screen.findByRole("textbox")
    }).toThrow(); */

    // Solution
    let errThrown = false;
    try {
        await screen.findByRole("textbox")
    } catch (error) {
        errThrown = true;
    }

    expect(errThrown).toBe(true)
});

test('getBy, queryBy, findBy finding 1 elements', async () => {
    render(<QueryFunctionsPractice1 />)

    expect(screen.getByRole("list")).toBeInTheDocument()
    expect(screen.queryByRole("list")).toBeInTheDocument()
    expect(await  screen.findByRole("list")).toBeInTheDocument()
});

test('getBy, queryBy, findBy when finding > 1 elements ', async () => {
    render(<QueryFunctionsPractice1 />)

    expect(() => {
        screen.getByRole("listitem");
    }).toThrow();
    
    expect(()=>screen.queryByRole("listitem")).toThrow()
    
    let errThrown = false;
    try {
        await screen.findByRole("listitem")
    } catch (error) {
        errThrown = true;
    }

    expect(errThrown).toBe(true)
});

test('getAllBy, queryAllBy, findAllBy ', async () => {
    render(<QueryFunctionsPractice1 />)

    expect(screen.getAllByRole("listitem")).toHaveLength(3)

    expect(screen.queryAllByRole("listitem")).toHaveLength(3)

    expect(await screen.findAllByRole("listitem")).toHaveLength(3)
});

describe('When to use each get, query, find', () => {
    
    test('Prove an element exists', () => {
        render(<QueryFunctionsPractice1 />)
        const element = screen.getByRole("list") // If element does not exists this line will throw error
        expect(element).toBeInTheDocument()
    }); 

    test('Prove an element does not exists', () => {
        render(<QueryFunctionsPractice1 />)
        const element = screen.queryByRole("textbox")
        expect(element).not.toBeInTheDocument()        
    });

    test('Demonstrating findByor findAllBy when data fetching ', async () => {
        render(<QueryFunctionsPractice1 />)

        // With the wrong way
        // const elements = screen.getAllByRole("listitem")
        // expect(elements).toHaveLength(6  ) // going to fail


        // Correct way
        const elements = await screen.findAllByRole("listitem")
        expect(elements).toHaveLength(6)

    });
});
