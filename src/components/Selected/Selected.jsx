import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from "prop-types";
const Selected = ({selectedPlayer, handleDelete, handleIsActive}) => {
    return (
        <div>
            
           
                {
                    selectedPlayer.map((player,idx)=>(
                        <div key={idx}>
                            <div className="flex justify-between py-8 px-4 border-2 shadow-lg rounded-lg gap-16">
                                <div className="flex items-center gap-3">
                                <img className="h-12 w-12 rounded-md" src={player.img} alt="" />
                                <div className="flex flex-col justify-start">
                                    <h2 className="text-xl font-semibold">{player.name}</h2>
                                    <p className="text-gray-400">{player.hand}</p>
                                    <p className="text-gray-400">$ {player.price}</p>
                                </div>
                                </div>
                                <button onClick={()=>handleDelete(player.id)} className="text-red-400"><RiDeleteBin6Line /></button>
                            </div>
                        </div>
                    ))

                }
                <div>
                <button onClick={()=>handleIsActive("cart")} className="text-lg font-medium btn bg-lime-500 hover:bg-lime-600 hover:text-white border-2 border-gray-400 mt-8">Add More Player</button>
                </div>
            
        </div>
    );
};

Selected.propTypes = {
    selectedPlayer : PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    handleIsActive: PropTypes.func.isRequired
}

export default Selected;