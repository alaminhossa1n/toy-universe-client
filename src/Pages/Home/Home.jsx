
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import Banner from './Banner';
import useTitle from '../../hooks/TitleHooks';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle, FaCreditCard, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
    useTitle('Toy - Home');

    const loadedData = useLoaderData();
    const galleryImg = loadedData.slice(0, 9);

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
            {/* gallery */}

            <section>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold py-5 text-[#37306B]'>Image Gallery</h2>
                </div>
                <div className='grid md:grid-cols-3 gap-5 w-3/4 mx-auto'>

                    {
                        galleryImg.map(img => <img
                            className='shadow rounded-lg'
                            key={img._id}
                            src={img.pictureUrl}

                        />)
                    }
                </div>
            </section>

            {/* How to Buy */}

            <section className="bg-gradient-to-r from-cyan-200 via-indigo-900 to-cyan-200 py-12 my-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-white text-center">How to Buy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaShoppingCart className="text-4xl text-cyan-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 1: Browse the Collection</h3>
                            <p className="text-gray-700">
                                Explore our wide range of toys and browse through different categories to find the perfect ones for you.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaShoppingCart className="text-4xl text-cyan-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 2: Add to Cart</h3>
                            <p className="text-gray-700">
                                Once you've found the toys you want to purchase, simply click the "Add to Cart" button to add them to your
                                shopping cart.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaCreditCard className="text-4xl text-cyan-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 3: Proceed to Checkout</h3>
                            <p className="text-gray-700">
                                When you're ready to complete your purchase, click on the "Checkout" button and follow the prompts to provide
                                your shipping and payment details.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <FaCheckCircle className="text-4xl text-cyan-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 4: Confirm and Place Order</h3>
                            <p className="text-gray-700">
                                Review your order details, including the items, quantities, and total price. Once you're satisfied, click the
                                "Place Order" button to finalize your purchase.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* shop by category */}
            <section>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold py-5 text-[#37306B]'>Shop By Category</h2>
                </div>
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
            </section>
        </div>
    );
};

export default Home;