import logoImg from '../../../public/logo.svg'
import Image from "next/image"

import { Link as LinkScroll } from 'react-scroll';

const Footer = ({ data }) => {
    return (
        <div className="flex flex-col gap-4 lg:gap-6 py-8 lg:py-16">
            <nav className="flex flex-wrap justify-center">
                {data.map((item, index) => (
                    <div key={index} className="px-5 py-2">
                        <LinkScroll
                            key={index}
                            activeClass='active'
                            to={item.href}
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-150}
                            className="text-gray-500 text-sm md:text-base hover:text-indigo-500 cursor-pointer"
                        >
                            {item.name}
                        </LinkScroll>
                    </div>
                ))}
            </nav>

            <div className="flex justify-center md:hidden">
                <Image src={logoImg} alt="logo" width={200} height={200} />
            </div>

            <div className="hidden md:flex justify-center">
                <Image src={logoImg} alt="logo" width={250} height={250} />
            </div>

            <p className="text-sm text-center text-gray-500">2024 &copy; All rights reserved.</p>
        </div>

    )
}

export default Footer