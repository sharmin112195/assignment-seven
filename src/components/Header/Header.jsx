import PropTypes from 'prop-types';

import logo from '../../assets/assets/logo.png' 
import { TbCoinFilled } from "react-icons/tb";
const Header = ({balance}) => {
    return (
        <div className='sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 mt-8 w-11/12 mx-auto' 
     >
            <div className='navbar'>
  <div className="flex-1">
  <img className='w-16 h-16' src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <div className='md:flex text-lg mr-4 hidden md:block'>
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      </div>
      
        <div className='flex'>
          <button className='btn'>{balance} Coin <a className='text-yellow-600 text-xl'><TbCoinFilled></TbCoinFilled></a> </button>
         
        </div>
    </ul>
  </div>
</div>
  
            
        </div>
    );
};

Header.propTypes = {
  balance : PropTypes.number,
  price:PropTypes.number
}

export default Header;

// fixed w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 z-10