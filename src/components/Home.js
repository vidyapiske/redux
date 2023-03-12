import React from 'react'

function Home(props) {
    return (
        <div>
           <div className='add-to-cart'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1mkcfnQXHuBpQS2OMQ9hnq5fzzBnyeKSCubsRTEzfW_zzhIdI7aToW-crqRsBTTOvPA&usqp=CAU'/>
           </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/pictures/145323-v4-reliance-jiophone-next-mobile-phone-large-1.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
