import React from 'react'
const imgs = [
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    },
    {
        imgUrl: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        name: 'Khung giờ săn sale'
    }
];

const ECaznZ = () => {
    return (
        <div className='flex gap-2 justify-between mx-12 py-4 max-w-7xl mx-auto'>
            {imgs.map(img => (
                <div className='max-w-24 hover:-translate-y-0.5'>
                    <a href="#" className="flex flex-col gap-1 items-center">
                        <div className="h-[55%] w-[45px] ">
                            <img src={img.imgUrl} alt="" />
                        </div>
                        <div className="h-[45%]">
                            <p className='text-center text-base'>{img.name}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ECaznZ