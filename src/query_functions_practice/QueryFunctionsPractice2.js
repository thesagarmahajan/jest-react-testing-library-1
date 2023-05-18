import { useState } from "react"

export default function QueryFunctionsPractice2(){

    let [email, setEmail] = useState("user@gmail.com")
    return (<>
        <form>
            <h2>Enter Data</h2>
            <div data-testid="my image">
                <img alt="image" src="data.jpg" />
            </div>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="name" value="" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <button title="Click to submit">Click Me</button>
        </form>
    </>)
}