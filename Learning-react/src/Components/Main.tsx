import { useState } from 'react';
import Plus from '../Components/Assets/icons8-addition-50.png'
function Main() {
    const [ingredients,setIngredients] = useState<string[]>(["Chicken", "Oregano", "Tomatoes"])
    const [newIngredient,setNewIng] = useState<string>('')
    function HandleIngredient(e:React.FormEvent){
        e.preventDefault()
        if(!newIngredient.trim()) return;
        setIngredients((prevIngredients) => [...prevIngredients,newIngredient.trim()])
        setNewIng('')
    }
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={HandleIngredient} className='flex gap-3 items-center justify-center pt-24'>
                <div className='w-140 border border-[#d1d5db] h-10 flex items-center rounded-md'>
                    <input type="text" placeholder='e.g.Oregano' name='ingredient' className='border-0 w-full outline-none pl-4' value={newIngredient} onChange={e => setNewIng(e.target.value)} />
                </div>
                    <button className='bg-black w-64 h-10 rounded-md flex items-center cursor-pointer justify-center'>
                    <img src={Plus} alt="" className='h-8' />
                    <h1 className='text-white font-semibold'>Add</h1>
                </button>
            </form>
            <ul className='list-disc pt-12'>{ingredients.map((ingredient,index) => (<li key={index}>{ingredient}</li>))}</ul>    
        </div>
    </div>
  )
}

export default Main