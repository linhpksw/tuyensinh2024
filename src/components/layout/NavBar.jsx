import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { Link as LinkScroll } from 'react-scroll';

import logoImg from '../../../public/logo.svg'

import { useState } from 'react';

const Navbar = ({ data }) => {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <header className={`lg:sticky lg:bg-white lg:top-0 lg:z-50 lg:px-8 lg:transition-all lg:w-full lg:shadow-md`}>

            <nav className='px-8 py-4 lg:py-4 container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0'>
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                                <Link href='/' className='mt-1'>
                                    <Image src={logoImg} alt='logo' width={250} height={250} />
                                </Link>

                                <Disclosure.Button
                                    aria-label='Toggle Menu'
                                    className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-rose-500 focus:text-rose-500 focus:bg-rose-100 focus:outline-none'>
                                    <svg
                                        className='w-6 h-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'>
                                        {open && (
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule='evenodd'
                                                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                <Transition
                                    enter='transition duration-100 ease-out'
                                    enterFrom='transform scale-95 opacity-0'
                                    enterTo='transform scale-100 opacity-100'
                                    leave='transition duration-75 ease-out'
                                    leaveFrom='transform scale-100 opacity-100'
                                    leaveTo='transform scale-95 opacity-0'>
                                    <Disclosure.Panel className='flex flex-wrap w-full mt-5 lg:hidden'>
                                        <>
                                            {data.map((item, index) => (
                                                <LinkScroll
                                                    key={index}
                                                    activeClass='active'
                                                    to={item.href}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={700}
                                                    onSetActive={() => {
                                                        setActiveLink(item.href);
                                                    }}
                                                    className='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-rose-500 focus:text-rose-500 focus:bg-rose-100 focus:outline-none cursor-pointer'>
                                                    {item.name}
                                                </LinkScroll>
                                            ))}
                                        </>
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className='hidden text-center lg:flex lg:items-center'>
                    <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
                        {data.map((menu, index) => (
                            <LinkScroll
                                key={index}
                                activeClass='active'
                                to={menu.href}
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-150}
                                onSetActive={() => {
                                    setActiveLink(menu.href);
                                }}
                                className={
                                    'font-medium text-lg animation-hover relative mx-2 inline-block cursor-pointer px-3 py-1' +
                                    (activeLink === menu.href
                                        ? ' animation-active text-indigo-500 '
                                        : ' text-black-500 hover:text-indigo-500')
                                }>
                                {menu.name}
                            </LinkScroll>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
