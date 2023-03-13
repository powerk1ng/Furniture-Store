import React, { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BiMenuAltLeft } from 'react-icons/bi';

import CartItem from './CartItem';
import MainContext from './MainContext';

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const {cartItems} = useContext(MainContext);   

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    let sum = 0;
    cartItems.forEach(item => {
        sum += item.price;
    })

    return (
        <header className='relative'>

            {/* logo & nav */}
            <div className='flex justify-between'>

                {/* logo */}
                <a className='text-xl font-semibold' href="/#">House Staff</a>

                {/* navigation */}
                <nav className='flex items-center gap-4'>
                    <li
                        onClick={() => setCartOpen(!cartOpen)}
                        className={`hover:text-[#dc3d2d] duration-300 list-none ${cartOpen && 'text-[#dc3d2d]'}`}>
                        <FaShoppingCart />
                    </li>

                    {/* burger menu */}
                    <div
                        className='hidden max-md:block'>
                        <BiMenuAltLeft
                            onClick={toggleMenu}
                            size={25} />
                    </div>

                    <ul className={`flex gap-x-6 cursor-pointer items-center
                        max-md:fixed max-md:w-[300px] max-md:h-screen max-md:top-0 max-md:bg-gray-300 max-md:flex-col max-md:z-50 max max-md:gap-y-6 
                        max-md:pt-28 max-md:pr-10 max-md:items-end max-md:text-2xl duration-300 ${menuOpen ? 'max-md:right-0' : 'max-md:right-[-100%]'}`}>
                        <li
                            onClick={toggleMenu}
                            className={`hidden max-md:block max-md:absolute max-md:top-14 max-md:right-10`}><GrClose size={25} /></li>
                        <li className='hover:opacity-50 duration-300'>About Us</li>
                        <li className='hover:opacity-50 duration-300'>Contacts</li>
                        <li className='hover:opacity-50 duration-300'>Profile</li>
                    </ul>

                    {/* shopping cart */}
                    {cartOpen && (
                        <div className='absolute top-7 right-10 w-[250px]  bg-[#fafafa] shadow-lg shadow-gray-400 z-50 flex flex-col p-2'>
                            {cartItems.length > 0 ? 
                                JSON.parse(localStorage.getItem('cartItems')).map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))
                                
                            : 'Cart is empty..'}
                            {cartItems.length > 0 && (
                                <p>Total Sum: <span className='text-emerald-500'>{(sum).toFixed(2)}$</span></p>
                            )}
                        </div>
                    )}
                </nav>

            </div>

            {/* header banner */}
            <div before="The Best Products For Your Home!" after="For The Best prices!"
                className="max-sm:hidden my-12 bg-header-bg bg-no-repeat bg-center bg-cover relative w-full h-[500px] bg-blend-multiply bg-slate-400 
                before:content-[attr(before)] before:absolute before:text-4xl before:text-white before:font-bold before:top-[100px] before:left-[50px] before:max-w-[350px] before:leading-tight 
                after:content-[attr(after)] after:absolute after:top-[200px] after:left-[50px] after:text-gray-200 after:text-bold">
            </div>
        </header>
    )
}

export default Header