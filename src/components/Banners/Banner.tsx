import React from 'react'
import { QuangCao1, QuangCao2 } from '../../assets'
import Slideshow from './Slideshow'
import ECaznZ from './ECaznZ'

const Banner = () => {
    return (
        <div className="bg-white border-solid shadow-md">
            <div className="max-w-7xl mx-auto pt-8 ">
                <div className='flex gap-1 justify-center'>
                    <Slideshow />
                    <div className='flex flex-col gap-1'>
                        <img className='w-[400px] h-1/2' src={QuangCao1} alt="" />
                        <img className='w-[400px] h-1/2' src={QuangCao2} alt="" />
                    </div>
                </div>
                <ECaznZ />
            </div>
        </div>
    )
}

export default Banner