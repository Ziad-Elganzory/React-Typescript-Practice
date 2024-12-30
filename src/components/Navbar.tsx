const navbarItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                {
                    navbarItems.map((item)=>{
                        return <li><a href={item.path}>{item.name}</a></li>;
                    })
                }
            </ul>
        </nav>
    );
}

export default Navbar;