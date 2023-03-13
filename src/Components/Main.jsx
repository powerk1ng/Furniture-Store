import StoreItem from './StoreItem'
import { useContext, useState } from 'react'
import MainContext from './MainContext'
import Categories from './Categories';

const Main = () => {
    const {filteredData} = useContext(MainContext);
    
    return (
        <main>
            {/* category buttons */}
            <div className='my-10'>
                <Categories />
            </div>

            {/* storeItems body */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {filteredData.map(item => (
                    <StoreItem key={item.id} {...item} />
                ))}
            </div>
        </main>
    )
}

export default Main