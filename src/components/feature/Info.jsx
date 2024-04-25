import React from 'react'
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Info = ({ data }) => {
    return (
        <div className="container w-full px-8 lg:pt-8 pb-8 lg:pb-16 border-b-[1px] mx-auto xl:px-0">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center md:gap-20">
                <div className="flex items-start md:items-center gap-2">
                    <MapPinIcon className="w-9 h-9 sm:w-8 sm:h-8 md:w-7 md:h-7 text-indigo-500" />

                    <p className="text-gray-500">
                        Địa chỉ: <Link className="text-indigo-500 hover:text-indigo-400" href={data.googleMap}>{data.address}</Link>
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />

                    <p className="text-gray-500">Điện thoại: <a href={`tel:${data.phone}`} className="text-indigo-500 hover:text-indigo-400 whitespace-nowrap">{data.displayPhone}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Info