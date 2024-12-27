import bgImage from '../../assets/assets/bg-shadow.png'
import banner from '../../assets/assets/banner-main.png'
import PropTypes from 'prop-types';
import './Banner.css'
const Banner = ({handleFreeCredit}) => {
    return (
        <div className='mx-auto banner w-11/12 mt-12 rounded-2xl'>
            
           
            <div
                className="py-14"
              style={{
                background: `url(${bgImage})` ,
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover',
  }}>
 
  <div className="text-center">
    <div>
    <div className='flex justify-center items-center'>
                <img className='w-64 h-52 mb-8' src={banner} alt="" />
                </div>
      <h1 className="mb-5 text-4xl font-bold text-gray-100">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5 text-gray-300">
      Beyond Boundaries Beyond Limits
      </p>
     <div>
     <button onClick={()=>handleFreeCredit()} className="hover:text-white font-medium p-4 rounded-xl m-4 border-2 bg-gradient-to-r from-lime-600 to-lime-500 hover:from-lime-500 hover:to-lime-600">Claim Free Credit</button>
     </div>
    </div>
  </div>
</div> 
            
        </div>
    );
};

Banner.propTypes = {
    handleFreeCredit : PropTypes.func.isRequired
}
export default Banner;



