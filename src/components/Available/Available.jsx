import AllPlayers from "../AllPlayers/AllPlayers";
import PropTypes from "prop-types";

const Available = ({handleSelectedPlayer}) => {
    return (
        <div>
            
             <AllPlayers handleSelectedPlayer={handleSelectedPlayer}></AllPlayers> 
        </div>
    );
};

Available.propTypes = {
    handleSelectedPlayer:PropTypes.func.isRequired
    
}
export default Available;