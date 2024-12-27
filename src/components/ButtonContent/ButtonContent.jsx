

import Available from '../Available/Available';
import Selected from '../Selected/Selected';


import './ButtonContent.css'
import PropTypes from 'prop-types';
const ButtonContent = ({handleIsActive, isActive, handleSelectedPlayer, selectedPlayer, handleDelete}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex justify-between py-8">
            <h2 className="text-3xl">{isActive.cart?"Available Players":`Selected Player (${selectedPlayer.length}/6)`}</h2>
            <div className="space-x-2">
                <button onClick={()=>handleIsActive("cart")} className={`${isActive.cart?"btn active":"btn"}`}>Available</button>
                <button onClick={()=>handleIsActive("not-cart")} className={`${isActive.cart?"btn":"active btn"}`}>Selected :{selectedPlayer.length}</button>
            </div>
            </div>
            {isActive.cart?<Available handleSelectedPlayer={handleSelectedPlayer}></Available>:<Selected selectedPlayer={selectedPlayer} handleDelete={handleDelete} handleSelectedPlayer={handleSelectedPlayer} handleIsActive={handleIsActive}></Selected>}
            
         
            
            
        </div>
    );
};
ButtonContent.propTypes={
    handleIsActive:PropTypes.func.isRequired,
    isActive:PropTypes.object,
    handleSelectedPlayer:PropTypes.func.isRequired,
    selectedPlayer:PropTypes.array,
    handleDelete:PropTypes.func.isRequired,
    
   
}

export default ButtonContent;


