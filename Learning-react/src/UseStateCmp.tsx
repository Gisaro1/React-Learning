import { useState } from "react"
function UseStateCmp(){
    const [arr,setArr] = useState<number[]>([])
    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr,arr.length + 1])}>Add to array</button>{JSON.stringify(arr)}
            </div>
        </div>
    )
}

export default UseStateCmp