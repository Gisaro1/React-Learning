import reactLogo from './assets/logo.png'
export default function Header(){
  return (
    <div className='flex flex-col bg-[#21222a] pt-6 pl-6 pr-6 pb-6 font-mono'>
      <img src={reactLogo} alt="React Logo" className='h-12 w-auto object-contain self-start' />    
    </div>
  )
}