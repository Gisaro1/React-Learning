import React, { useState } from "react"
export default function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
    }
    return (
        <div className="bg-red-500 h-screen relative">
            <div className="bg-white absolute h-[45%] w-[35%] left-[33%] top-[25%] rounded-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <label htmlFor="username" className="font-semibold text-lg">Username</label> <input id = "username" type="text" name="username" placeholder="username" value={username} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                    <label htmlFor="password" className="font-semibold text-lg">Password</label> <input id="password" type="password" placeholder="password" name="password" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>) =>setPassword(e.target.value)}/>
                    <button className="bg-blue-500 text-white font-semibold px-4 h-8 
                    rounded-2xl">Login</button>
                </form>
            </div>
        </div>
    )
}