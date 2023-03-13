import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';

import MainContext from './MainContext';

const CartItem = (item) => {
    const { deleteItemFromCart } = useContext(MainContext);
    
    const {cartItems} = useContext(MainContext);


    return (
        <>
            <div className='border-b-2 border-black mb-2 flex relative'>
                <img className="w-[50%] object-cover h-[100px]" src={"./img/" + item.image} alt={item.name} />

                {/* card bottom */}
                <div className="p-4 text-[#333] flex flex-col justify-between">
                    <h2 className="text-semibold text-sm">{item.name}</h2>
                    <p className="text-emerald-600 text-xs">{item.price}$</p>
                </div>
                <span className='absolute right-2 bottom-5 cursor-pointer'>
                    <FaTrash
                        onClick={() => deleteItemFromCart(item.id)}
                        fill='gray'
                        size={12} />
                </span>
            </div>
            
        </>

    )
}

export default CartItem