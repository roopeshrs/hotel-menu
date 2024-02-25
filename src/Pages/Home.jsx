import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import About from '../Components/About';
import data from '../../MOCK_DATA.json';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Filter from '../Components/Filter';

const Home = () => {
  const [menuData, setMenuData] = useState({});
  const [filteredMenuData, setFilteredMenuData] = useState({});
  const [maxPrice, setMaxPrice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categoryNames = [...new Set(data.map(item => item?.category))];

  useEffect(() => {
    const categorizedData = data.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    setMenuData(categorizedData);
    setFilteredMenuData(categorizedData)
  }, []);

  function getImageForCategory(category) {
    switch (category) {
      case "Appetizers":
        return "https://cdn.pixabay.com/photo/2010/12/13/10/25/canape-2802_960_720.jpg";
      case "Soups":
        return "https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375_1280.jpg";
      case "Sandwiches":
        return "https://cdn.pixabay.com/photo/2022/02/12/21/22/toast-7009956_1280.jpg";
      case "Salads":
        return "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg";
      case "Breakfast":
        return "https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436_1280.jpg";
      case "Vegetarian":
        return "https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_1280.jpg";
      case "Chicken":
        return "https://cdn.pixabay.com/photo/2022/06/07/21/00/chicken-7249273_1280.jpg";
      case "Oriental (Chicken)":
        return "https://cdn.pixabay.com/photo/2020/08/07/19/19/chili-chicken-5471407_1280.jpg";
      case "Beef":
        return "https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg";
      case "Egg":
        return "https://cdn.pixabay.com/photo/2014/09/22/14/49/breakfast-456351_1280.jpg";
      case "Fish":
        return "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg";
      case "Rice":
        return "https://cdn.pixabay.com/photo/2017/12/16/17/46/fried-rice-3023040_960_720.jpg";
      case "Rice & Noodles":
        return "https://cdn.pixabay.com/photo/2014/11/05/16/00/thai-food-518035_1280.jpg";
      case "Indian Bread":
        return "https://cdn.pixabay.com/photo/2016/10/25/13/43/stollen-1768907_1280.jpg";
      case "Fresh Juice":
        return "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg";
      case "Shake & Smoothies":
        return "https://cdn.pixabay.com/photo/2016/05/31/17/37/smoothie-1427436_1280.jpg";
      case "Coolers & likes":
        return "https://cdn.pixabay.com/photo/2017/05/28/08/12/blueberry-2350367_1280.jpg";
      case "Lassi":
        return "https://cdn.pixabay.com/photo/2018/03/12/12/31/food-3219503_1280.jpg";
      case "Hot Beverages":
        return "https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg";
      default:
        return "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg";
    }
  }

  const handleSortByCategory = (val) => {
    let filteredItems;
    let filteredData = { [val]: menuData[val] };
    if(maxPrice !== null){
      filteredItems = filteredData[val].filter(item => item.price <= maxPrice);
      filteredData = {[val]: filteredItems}
    }
    if(searchTerm !== ''){
      filteredItems = filteredData[val].filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      filteredData = {[val]: filteredItems}
    }
    setFilteredMenuData(filteredData);
  }

  const handleSortByPrice = (val) => {
    setMaxPrice(val[1]);
    const filteredData = {};

    if(searchTerm !== ''){
      for (const category in filteredMenuData) {
        if (menuData.hasOwnProperty(category)) {
          filteredData[category] = menuData[category].filter(item => item.price <= val[1] && item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
      }
    }else{
      for (const category in filteredMenuData) {
        if (menuData.hasOwnProperty(category)) {
          filteredData[category] = menuData[category].filter(item => {
            if(item.price.split('/').length > 1){
              return item.price.split('/').map(part => part.trim() <= val[1]).includes(true);
            }else{
              return item.price <= val[1];
            }
          });
        }
      }
    }
    setFilteredMenuData(filteredData);
  }

  const handleSearch = (val) => {
    setSearchTerm(val);
    const filteredData = {};
    for (const category in filteredMenuData) {
      if (menuData.hasOwnProperty(category)) {
        filteredData[category] = menuData[category].filter(item => item.title.toLowerCase().includes(val.toLowerCase()));
      }
    }
    setFilteredMenuData(filteredData);
  }

  const handleReset = () => {
    setMaxPrice(null);
    setSearchTerm('');
    setFilteredMenuData(menuData);
  }
  

  return (
    <div>
        <Navbar />
        <div className='h-[90vh] bg-[url("./bg-image.webp")] bg-no-repeat bg-cover bg-center fixed top-[10vh] left-0 right-0 -z-10'></div>
        <div className='pt-[12vh]'>
            <About />
            <Filter 
              categories={categoryNames} 
              handleSortByCategory={handleSortByCategory} 
              handleSortByPrice={handleSortByPrice}
              handleSearch={handleSearch}
              handleReset={handleReset}
            />
            <div className='flex flex-col gap-20 w-10/12 mx-auto my-10'>
              {Object.keys(filteredMenuData).map((category, index) => {
                if(filteredMenuData[category].length !== 0){
                  return (
                  <div key={category} className='text-white flex flex-col gap-6'>
                    <h2 className='text-4xl uppercase tracking-widest font-extrabold'>{category}</h2>
                    <div className={index % 2 === 0 ? 'flex flex-row-reverse gap-8 lg:flex-col' : 'flex gap-8 lg:flex-col'}>
                      <div className='flex-1'>
                        <img src={getImageForCategory(category)} alt={`${category} image`} className='w-full h-full object-cover object-center' />
                      </div>
                      <ul className='flex-1 flex flex-col gap-6'>
                        {filteredMenuData[category].map(item => (
                          <li key={item?.id} className='flex w-96 items-start justify-between'>
                            <div className='flex flex-col'>
                              <h3 className='text-lg uppercase tracking-widest'>{item?.title}</h3>
                              <p className='text-xs'>{item?.desc}</p>
                            </div>
                            <p className='flex items-center text-lg'>
                              {item?.price !== "" ? (
                                <>
                                  <CurrencyRupeeIcon style={{ fontSize: '1rem' }} />
                                  {item?.price}
                                </>
                              ) : (
                                <span className='text-xs whitespace-nowrap'>(Based on Availability)</span>
                              )}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  )
                }
              })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home