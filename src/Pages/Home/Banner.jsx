
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-200 via-indigo-500 to-cyan-200">
            <div className="md:flex items-center p-10">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-6xl font-bold text-[#37306B]">Toy Universe</h1>
                    <h2 className="text-4xl font-semibold">Where Marvel Heroes Come to Play</h2>
                    <p className="text-gray-500">Welcome to Toy Universe, the ultimate destination for Marvel heroes toys. Explore a vast universe of action figures, collectibles, and accessories inspired by your favorite superheroes. Ignite your imagination and embark on thrilling adventures with our high-quality toys that bring the Marvel universe to life. Whether you are a fan, a collector, or simply seeking the perfect gift, Toy Universe is your gateway to the heroic world of Marvel. Start your journey today and discover a universe of endless excitement!</p>
                </div>
                <div className="md:w-1/2">
                    <img src="https://i.ibb.co/BfByfKG/spider-man-Superhero-Marvel-Spider-Man-Action-Spiderman.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;