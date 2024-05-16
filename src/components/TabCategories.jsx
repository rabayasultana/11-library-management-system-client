import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from './BookCard';

const TabCategories = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Browse Books By Categories</h1>
            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">Four categories available for the time being. They are Computers and Tech, Sci-Fi and Fantasy, Travel and Horror. Browse Them by clicking on the Tabs below.</p>
           <Tabs>
    <div className='flex items-center justify-center'>
    <TabList>
      <Tab>Computers and Tech</Tab>
      <Tab>Sci-Fi and Fantasy</Tab>
      <Tab>Travel</Tab>
      <Tab>Horror</Tab>
    </TabList>
    </div>

    <TabPanel>
      <h2><BookCard></BookCard></h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs> 
        </div>
    );
};

export default TabCategories;