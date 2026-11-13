import Chef from '../Components/Assets/chef-claude-icon.png'
function Header() {
  return (
    <div>
        <div className='flex gap-4 items-center justify-center pt-2 h-[14vh] pb-4 shadow-md'>
            <img src={Chef} alt="" className='h-16' />
            <h1 className='text-[#121f26] text-4xl '>Chef Claude</h1>
        </div>
    </div>
  )
}

export default Header