import { useEffect, useState } from "react"

export default function QueryFunctionsPractice1(){

    let [users, setUsers] = useState([])
    useEffect(()=>{
        fetch("https://reqres.in/api/users").then(res=>res.json()).then(resdata=>setUsers(resdata.data))
    }, [])

    return(<>
        <ul>
            {/* <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li> */}
            {
                users.map(user=>{
                    return (<li>{user.first_name}</li>)
                })
            }
        </ul>
        {/* <input type="text" /> */}
    </>)
}