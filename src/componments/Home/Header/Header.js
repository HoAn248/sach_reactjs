import Logo from './Logo'
import Search from './Search'
import User from './User';
import Buyer from './Buyer'

function Header(){
    return (
        <header>
                <Logo></Logo>
                <Search></Search>
                <User></User>
                <Buyer></Buyer>
            </header>
    )
}
export default Header;