
const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper container">
        <div className="auth-wrapper">
          <div className="auth-form">
            <div className="grid grid-cols-2 grid-gap-30">
              <div className="grid-left">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c9d4/8b77/26a8df718ef41626c767cfcb0fc89ae1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXhDwDLwwTx41XR93zgZqzQ2YhievZZQT-kynO6h6Maovy3iZFOltCtcVPcINptb~3OIHXuMEJkdhkEikbQ9J8bB54zWhJvMDZ5Dq7EJIi3rGqH-b2wtb140h0Sx791piKQHOS03WjQgKL3CmDD8Gf3w~~8TTiGDuprk5crfmuazi1IMDmLy8FeLVxdiZwuCCEXxF27HhSD6U8U~Oh3mhjmUTok9Qarjohh897kJ9kLEUYvG5kpbhbVcFAPBXvHNjGAV3oB4rlq~cS4McuToEYhY9aibhWjRjoTE~A0NZAaqMWXNoJaO2p0xG2Wksag4hLcPYMmM9hMlwh~t2exDjA__"
                  alt="veggies"
                />
              </div>
              <div className="grid-right">
                <h1 className="ml-10">Chinese Cabbage</h1>
                <span>
                  {" "}
                  &#9733; &#9733; &#9733; &#9733; &#9734;{" "}
                  <strong>(4.5/5)</strong>
                </span>
                <div className="flex align-items-center flex-gap-30">
                  <h2>$60.00</h2>
                  <h3>$120.00</h3>
                  <button>40% off</button>
                </div>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </p>
                <div>
                  <p>
                    <strong>Category:</strong> Vegetables
                  </p>
                  <p>
                    <strong>Tags:</strong> Vegetables
                  </p>
                </div>
                <div>
                    <p>Choose Size</p>
                    <button>Small</button>
                    <button>Medium</button>
                    <button>Large</button>
                    <button>X-Large</button>
                </div>
                <div>
                   <p>Quantity</p>
                   <button>- 5 + </button>
                   <button>Out of Stock</button>
                </div>
                <br />
                <br />
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
