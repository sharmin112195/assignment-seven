import bgFooterCart from '../../assets/assets/bg-shadow.png'

const FooterCart = () => {
    return (
        <div className=" rounded-3xl mx-auto bg-gray-50 text-gray-600" style={{backgroundImage: `url(${bgFooterCart})`,
        backgroundSize:"cover"}} >

            <div className=" py-4 md:py-14 px-4 space-y-2">
            <h1 className="text-center font-bold text-2xl">Subscribe to our Newsletter</h1>
            <p className="text-center font-semibold">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-4 justify-center pt-2 flex-col md:flex-row">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="rounded-lg border px-10" />
                            <button className="btn border bg-gradient-to-tr from-orange-500 to-pink-500 join-item">Subscribe</button>
                        </div>
            </div>

    </div>
     
     
    
    );
};


export default FooterCart;