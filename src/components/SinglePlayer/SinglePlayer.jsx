import { FaUserAlt, FaFlag } from "react-icons/fa";
import PropTypes from "prop-types";
const SinglePlayer = ({singlePlayer,handleSelectedPlayer}) => {
    const {img, name, country, hand, type, price} = singlePlayer
    return (
        <div>
            
            
            <div className="card bg-base-100 border-2 rounded-xl">
           <figure> 
          
       <img className="h-80 rounded-3xl p-3 w-full object-fill"
      src={img}
      alt="Player Image" />
      
   </figure> 
  <div className="flex justify-start flex-col mt-4 space-y-4 px-4 pb-4">
    <h2 className="card-title"><FaUserAlt />{name}</h2>
    <div className="flex justify-between border-b pb-2">
    <div className="flex items-center gap-2 text-gray-400">
        <span><FaFlag /></span>
        <p>{country}</p>
    </div>
    <span className="border border-gray-400 p-2 rounded-xl bg-gray-200">{type}</span>
    </div>
    <div className="space-y-2 border-b pb-2">
        <h3 className="text-lg font-semibold flex justify-start">Rating</h3>
        <div className="flex justify-between">
            <h4>{hand}</h4>
            <h4 className="text-gray-400">{hand}</h4>
        </div>
    </div>
    <div className="card-actions justify-between">
        <h3 className="font-semibold text-gray-600">Price: {price}</h3>
      <button onClick={() => handleSelectedPlayer(singlePlayer)} className="btn hover:bg-lime-600 hover:text-white text-gray-600">Choose Player</button>
    </div>
  </div>
</div>
</div>
        
    );
};

SinglePlayer.propTypes={
    singlePlayer:PropTypes.object,
    handleSelectedPlayer:PropTypes.func.isRequired
}

export default SinglePlayer;