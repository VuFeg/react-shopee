import React from 'react'
import { AppGallery, AppStore, GooglePlay, QrApp } from '../../assets'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineContactSupport, MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const HeaderNavbar = () => {
    return (
        <div className='py-1 flex justify-between max-w-7xl mx-auto'>
            <div className='flex gap-2'>
                <a href="#">Kênh người bán</a>
                <span className='opacity-60'>|</span>
                <a href="#">Trở thành Người bán Shopee</a>
                <span className='opacity-60'>|</span>
                <div className='group relative hover:after:w-52 hover:after:h-4 after:content-[""] after:absolute after:left-0 after:top-4'>
                    <a href="#" className=''>Tải ứng dụng</a>
                    <div className='absolute border-solid shadow-md mt-2 group-hover:block hidden'>
                        <div className='mx-2'>
                            <img src={QrApp} alt="" />
                        </div>
                        <div className='flex w-48 gap-2 mx-2'>
                            <img className='w-1/2' src={AppStore} alt="" />
                            <img className='w-1/2' src={GooglePlay} alt="" />
                        </div>
                        <div className='mx-2 my-2'>
                            <img className='w-1/2' src={AppGallery} alt="" />
                        </div>
                    </div>
                </div>
                <span className='opacity-60'>|</span>
                <div className='flex gap-2 items-center'>
                    <div>Kết nối</div>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagramSquare /></a>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='flex gap-2 items-center'><CiBellOn />Thông báo</div>
                <div className='flex gap-2 items-center'><MdOutlineContactSupport />Hỗ trợ</div>
                <div className='flex gap-2 items-center'><MdLanguage />Tiếng Việt<IoIosArrowDown /></div>
                <div>Đăng ký</div>
                <span className='opacity-60'>|</span>
                <div>Đăng nhập</div>
            </div>
        </div>
    )
}

export default HeaderNavbar