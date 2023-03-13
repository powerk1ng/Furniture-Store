 import { useState, useContext } from "react";
 import MainContext from "./MainContext";

const Categories = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const {storeData, filteredData, setFilteredData} = useContext(MainContext);
  

  const setActiveBtn = (id, name) => {
    setSelectedBtn(id);


    showFilteredData(id, name)
  };

  const showFilteredData = (id, name) => {
    if (id === 'All') {
      setFilteredData(storeData);
    } else {
      setFilteredData(storeData.filter(item => item.category === name));
    }
  }



  const categories = [
    { name: 'All', id: 'All' },
    { name: 'Living Room', id: 2 },
    { name: 'Dining Room', id: 3 },
    { name: 'Bedroom', id: 4 },
    { name: 'Home Office', id: 5 }
  ];

  return (
    <div className="flex justify-end max-sm:hidden">
      {categories.map(category => (
        <button
          id={category.id}
          onClick={() => setActiveBtn(category.id, category.name)}
          key={category.name}
          className={`px-7 border-2 border-black py-2.5 mr-2.5 hover:bg-black hover:border-black hover:text-white outline-none duration-300 
          ${selectedBtn === category.id ? 'bg-red-400 border-red-400' : ''}`}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
