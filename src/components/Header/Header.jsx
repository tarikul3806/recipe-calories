import banner from '../../assets/images/Rectangle 1.jpg'

const Header = () => {
    return (
        <header>
            <nav className="navbar flex justify-between p-5 mx-10">
                <div className="navbar-left">
                    <a href="/" className="font-bold text-3xl">
                        Recipe Calories
                    </a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links font-bold flex gap-5">
                        <li>
                            <a href="/Home">Home</a>
                        </li>
                        <li>
                            <a href="/Recipes">Recipes</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/Search">Search</a>
                        </li>
                    </ul>  
                </div>
                <div className="navbar-right">
                    <a href="/cart" className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count font-bold">Search</span>
                    </a>
                    <a href="/account" className="user-icon">
                        <i className="fas fa-user"></i>
                    </a>
                </div>
            </nav>
                <div className="responsive-banner text-white mx-12 rounded-3xl"
                    style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    }}>
                <div>
                    <h1 className='flex justify-center lg:text-4xl text-center font-bold lg:pt-28'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className='flex justify-center text-center pt-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems <br /> to become an exceptionally well world-class Programmer.</p>
                </div>
                <div className='flex justify-center gap-8 pt-5'>
                    <button className='bg-green-500 p-3 rounded-3xl font-bold text-black'>Explore Now</button>
                    <button className='bg-green-500 p-3 rounded-3xl font-bold text-black'>Our Feedback</button>
                </div>
            </div>
        </header>
    );
};

export default Header;