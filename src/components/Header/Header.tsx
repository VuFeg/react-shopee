import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import HeaderContainer from './HeaderContainer'

const Header = () => {
    return (
        <div className='bg-[#f7452e] text-white text-sm font-normal w-full'>
            <HeaderNavbar />
            <HeaderContainer />
        </div >
    )
}

export default Header