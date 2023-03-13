import { useContext } from "react"
import MainContext from "./MainContext"

// const StoreItem = ({ id, name, description, price, image, category, material, color}) => {
const StoreItem = (item) => {

    const { addToCart } = useContext(MainContext);

    return (
        <div className="bg-[#f5f5f5] overflow-hidden relative">
            <img className="w-full object-cover h-[350px] rounded-t-xl hover:scale-105 duration-300" src={"./img/" + item.image} alt={name} />

            {/* card bottom */}
            <div className="p-4 text-[#333] flex flex-col justify-between gap-y-4">
                <h2 className="text-semibold text-3xl">{item.name}</h2>
                <p>{item.description}</p>
                <p className="text-emerald-600">{item.price}$</p>
            </div>

                {/*add to cart */}
                <div
                    onClick={() => addToCart(item)} 
                    className="absolute bottom-4 right-4 rounded-full bg-red-500 w-10 h-10 flex items-center justify-center text-white text-bold hover:bg-purple-600 duration-300 cursor-pointer">
                    +
                </div>
        </div>
    )
}

export default StoreItem