import React from 'react'
import { MapPinIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon, UsersIcon, MapIcon } from "@heroicons/react/24/solid"

const Info = ({ data }) => {
    return (
        <div className="container w-full px-8 lg:pt-8 pb-8 lg:pb-16 border-b-[1px] mx-auto xl:px-0">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center md:gap-20">

                <div className="flex items-center gap-2">
                    <div>
                        <MapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                    </div>

                    <p className="text-gray-500">
                        Địa chỉ: <a target="_blank" className="text-indigo-500 hover:text-indigo-400" href={data.googleMap}>{data.address}</a>
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <div>
                        <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                    </div>

                    <p className="text-gray-500">Điện thoại: <a href={`tel:${data.phone}`} className="text-indigo-500 hover:text-indigo-400 whitespace-nowrap">{data.displayPhone}</a></p>
                </div>

                <div className="flex items-center gap-2">
                    <div>
                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                    </div>

                    <p className="text-gray-500">Zalo OA: <a target="_blank" className="text-indigo-500 hover:text-indigo-400" href={data.zaloOA}>{data.zaloOAName}</a></p>
                </div>

                <div className="flex items-center gap-2">
                    <div className='items-start'>
                        <UsersIcon className=" w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                    </div>

                    <p className="text-gray-500">Nhóm FB hỗ trợ học tập: <a target="_blank" className="text-indigo-500 hover:text-indigo-400" href={data.groupFB}>{data.groupFBName}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Info