import React from 'react'
import Slideshow from './SlideShow'
import { QuangCao1, QuangCao2 } from '../../assets'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto pt-8">
            <div className='flex gap-1'>
                <Slideshow />
                <div className='flex flex-col gap-1'>
                    <img className='w-[400px] h-[118px]' src={QuangCao1} alt="" />
                    <img className='w-[400px] h-[118px]' src={QuangCao2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner