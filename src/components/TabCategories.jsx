import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {

const [categories, setCategories] = useState([])
useEffect(() => {
  const getData = async () => {
    const { data } = await axios('http://localhost:5000/categories')
    setCategories(data)
  }
  getData()
}, [])

    return (
        <div className='container px-6 py-10 mx-auto'>
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Browse Books By Categories</h1>
            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">Four categories available for the time being. They are Computers and Tech, Sci-Fi and Fantasy, Travel and Horror. Browse Them by clicking on the Tabs below.</p>
           <Tabs>
    <div className='flex items-center justify-center'>
    <TabList>
      <Tab>Computers and Tech</Tab>
      <Tab>Sci-Fi and Fantasy</Tab>
      <Tab>Travel and Adventure</Tab>
      <Tab>Horror and Mystery</Tab>
    </TabList>
    </div>

   <div className="items-center flex flex-col">
   <TabPanel>

<div>
  {categories.filter(C => C.name  === 'Computers and Tech').map(category =>  (
    <CategoryCard key={category._id} category={category}></CategoryCard>
  ))}
  </div>

</TabPanel>

<TabPanel>
  <div>
{categories.filter(C => C.name  === 'Sci-Fi and Fantasy').map(category =>  (
    <CategoryCard key={category._id} category={category}></CategoryCard>
  ))}
  </div>
</TabPanel>

<TabPanel>
<div>
{categories.filter(C => C.name  === 'Travel and Adventure').map(category =>  (
    <CategoryCard key={category._id} category={category}></CategoryCard>
  ))}
  </div>
</TabPanel>

<TabPanel>
<div>
{categories.filter(C => C.name  === 'Horror and Mystery').map(category =>  (
    <CategoryCard key={category._id} category={category}></CategoryCard>
  ))}
  </div>
</TabPanel>
   </div>
  </Tabs> 
        </div>
    );
};

export default TabCategories;