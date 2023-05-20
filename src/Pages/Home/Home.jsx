
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import Banner from './Banner';
import useTitle from '../../hooks/TitleHooks';

const Home = () => {
    useTitle('Toy - Home')

    const [selectedToys, setSelectedToys] = useState([]);

    const handleActionFigures = (props) => {
        const url = `http://localhost:5000/toys?category=${props}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSelectedToys(data);
            })
    }

    const handlePlushToys = (props) => {
        const url = `http://localhost:5000/toys?category=${props}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSelectedToys(data);
            })
    }
    const handleGamesAndPuzzles = (props) => {
        const url = `http://localhost:5000/toys?category=${props}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSelectedToys(data);
            })
    }

    useEffect(() => {
        handleActionFigures('Action Figures');
    }, [])

    return (

        <div className=''>
            <Banner></Banner>
            <Tabs className="py-8">
                <TabList className="flex justify-center gap-10">
                    <Tab onClick={() => handleActionFigures('Action Figures')} className="rounded py-2 px-4 text-sm font-medium text-gray-500">
                        <p>Action Figures</p>
                    </Tab>
                    <Tab onClick={() => handlePlushToys('Plush Toys')} className="py-2 px-4 text-sm font-medium text-gray-500">
                        <p>Plush Toys</p>
                    </Tab>
                    <Tab onClick={() => handleGamesAndPuzzles('Games and Puzzles')} className="py-2 px-4 text-sm font-medium text-gray-500">
                        <p>Games and Puzzles</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="p-6 grid md:grid-cols-3 gap-5">
                        {
                            selectedToys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="p-6 grid md:grid-cols-3 gap-5">
                        {
                            selectedToys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="p-6 grid md:grid-cols-3 gap-5">
                        {
                            selectedToys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;