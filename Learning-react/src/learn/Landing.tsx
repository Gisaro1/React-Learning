import { useEffect,useState } from "react"
function Landing() {
    const colors:string[] = [
    "bg-blue-500",
    "bg-red-600",
    "bg-green-500",
    "bg-purple-600",
    "bg-pink-500",
    "bg-amber-500",
    "bg-teal-500",
    "bg-black",
    ];
    const[count, setCount] = useState(0);
    const[color,setColor] = useState("bg-blue-600")
    useEffect(() => {
        document.title = `Count: ${count}`
        return () => {
            console.log("I'm being cleaned up!!!!!")
        }
    },[count])
    function HandleColor(){
        const randomIndex = Math.floor(Math.random() * colors.length)
        setColor(colors[randomIndex])
    }
  return (
    <div className= {`${color} text-5xl h-screen flex items-center pt-4 gap-5 flex-col`}>
        <h1 className="text-5xl text-white flex items-center justify-center">useState simply explained!!</h1>
        <h2>Count: {count}</h2>
        <button className="bg-blue-500 w-64 h-16 rounded-lg flex items-center justify-center" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="bg-yellow-500 w-70 h-16 rounded-lg flex items-center justify-center" onClick={() => setCount(count - 1)}>Decrememnt</button>
        <button className="bg-indigo-500 w-50 h-16 rounded-lg flex items-center justify-center" onClick={HandleColor}>Toggle</button>
    </div>
  )
}

export default Landing