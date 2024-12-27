import logo from '../../assets/assets/logo-footer.png'
import FooterCart from '../FooterCart/FooterCart';


const Footer = () => {
    return (
        <div className="bg-black pt-36 mt-60 relative">
            <img src={logo} className="h-40 p-8 mx-auto" />
            <div className=" text-white  md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-5 pl-10 md:pl-0">

                <div className="">
                    <h6 className="footer-title">About Us</h6>
                    <p className="text-sm text-gray-500">We are passionate league and dedicated <br></br>to the best entertainment to the supporters</p>

                </div>
                <div>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover text-sm text-gray-500">Home</a><br />
                    <a className="link link-hover text-sm text-gray-500">Service</a><br />
                    <a className="link link-hover text-sm text-gray-500">About</a><br />
                    <a className="link link-hover text-sm text-gray-500">Contact</a>
                </div>

                <form className="">
                    <h6 className="footer-title">Subscribe</h6>
                    <p className="text-sm text-gray-500">Subscribe to our Newsletter<br /> for the latest updates</p>
                    <fieldset className="py-3">

                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="join-item px-4 outline-none border-none text-black" />
                            <button className="btn bg-gradient-to-tr from-orange-500 to-pink-500 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </div>
            <hr className="opacity-60" />
            <p className="text-center text-gray-400 py-6"><small>@2024 Your Company All Rights Reserved.</small></p>
            {/* FooterCart */}
            <div className="absolute z-50 -top-32 left-[8%] p-4 rounded-3xl border-2 w-10/12 mx-auto">
                <FooterCart></FooterCart>

            </div>
        </div>



    );
};


export default Footer;