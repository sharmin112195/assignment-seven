import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import PropTypes from "prop-types";

const AllPlayers = ({handleSelectedPlayer}) => {
    const[players,setPlayers] = useState([])
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data =>setPlayers(data))
    },[])
    
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 w-11/12 mx-auto">
            {
                players.map((singlePlayer,idx) => <SinglePlayer key={idx} singlePlayer={singlePlayer} handleSelectedPlayer={handleSelectedPlayer}></SinglePlayer>)
            }
            </div>

            
        </div>
    );
};

AllPlayers.propTypes = {
    handleSelectedPlayer:PropTypes.func.isRequired
}

export default AllPlayers;