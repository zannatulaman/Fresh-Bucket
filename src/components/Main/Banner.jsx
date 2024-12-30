


const Banner = () => {
  return (
    <div className="banner mt-30 container">
          <div className="grid grid-cols-2 grid-gap-20">
                <div className= "organic-banner flex flex-column justify-center">
                     <div className="organic-banner__details">
                       <p>100% ORGANIC</p>
                       <h1>Fruit & Vegetable</h1>
                       <p>starting at: <button className="price-starting-btn">$11.99</button></p>
                       <button className="secondary-btn mt-20">Subscribe &rarr;</button>
                     </div>
                     
                </div>
                <div className="sale-banner flex flex-column justify-center">
                     <div className="sale-banner__details">
                         <p>SALE OFF THE WEEK</p>
                         <h1>Sales of the Year</h1>
                         <h4>00  : 02    : 18  : 46</h4>
                         <p className="sale-banner__paragraph">DAYS HOURS MINS SECS</p>
                         <button className="primary-btn mt-20">Subscribe &rarr;</button> 
                     </div>
                </div>

          </div> 
    </div>
  )
}

export default Banner