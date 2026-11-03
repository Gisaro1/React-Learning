import reactBg  from "./assets/reactjs-icon 2.png"
import bulletP from './assets/Ellipse 1.png'
import Header from './Header'

export default function MainContent(){
  return (
    <>
    <Header></Header>
    <div className='bg-[#282d35] flex-1 -ml-6 pt-6 -mr-6 min-h-screen'>
        <img src={reactBg} alt="react bg" className='flex justify-end right-0 absolute h-124'/>
        <h1 className='pl-12 text-4xl font-bold text-white font-mono'>Fun Facts about React</h1>
        <ul className='text-white pl-20 text-2xl mt-4 '>
          <li className='flex items-center gap-4'> <img src={bulletP} alt="" className='h-4' /> Was first released in 2013</li>
          <li className='flex items-center gap-4'> <img src={bulletP} alt="" className='h-4' /> Was originally created by Jordan Walke</li>
          <li className='flex items-center gap-4'> <img src={bulletP} alt="" className='h-4' /> Has well over 200K stars on GitHub</li>
          <li className='flex items-center gap-4'> <img src={bulletP} alt="" className='h-4' /> Is maintained by Meta</li>
          <li className='flex items-center gap-4'> <img src={bulletP} alt="" className='h-4' /> Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    </>
  )
}