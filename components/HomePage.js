import Results from '../components/Results'
import Slider from 'react-slick'

const arrowStyles = {
  backgroundSize: '38px 52px',
  height: 49,
  width: 37,
}

const PrevArrow = ({className, style, onClick}) => (
  <span
    className={className}
    style={{...style, ...arrowStyles, backgroundImage: 'url(/static/assets/left-arrow.png)'}}
    onClick={onClick}
  />
)
const NextArrow = ({className, style, onClick}) => (
  <span
    className={className}
    style={{...style, ...arrowStyles, backgroundImage: 'url(/static/assets/right-arrow.png)'}}
    onClick={onClick}
  />
)

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
}

const HomePage = () => (
  <div id="homePage">
    <Slider {...settings}>
      <div className="home-slide"><div style={{backgroundImage: 'url(/static/assets/slides/slide1.jpeg)'}} /></div>
      <div className="home-slide"><div style={{backgroundImage: 'url(/static/assets/slides/slide2.jpeg)'}} /></div>
      <div className="home-slide"><div style={{backgroundImage: 'url(/static/assets/slides/slide3.jpeg)'}} /></div>
    </Slider>
    <section id="homePageBoxes">
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #333'}}>Brotherhood Rewards</p>
        <p>Brotherhood Rewards Description</p>
      </div>
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #0A4D6D'}}>The Shave Expert</p>
        <p>The Shave Expert Description</p>
      </div>
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #444'}}>Build Your Set</p>
        <p>Build Your Set Description</p>
      </div>
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #156085'}}>Replenishment Serivce</p>
        <p>Replenishment Serivce Description</p>
      </div>
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #666'}}>Barber Services</p>
        <p>Barber Services Description</p>
      </div>
      <div className="card home-box">
        <p className="home-title" style={{borderBottom: 'solid 5px #327392'}}>Recent Views</p>
        <p>Recent Views Description</p>
      </div>
    </section>
    <section id="homePageHeader">
      <div>
        <h1>SHAVE LIKE A BOSS</h1>
        <h2>SHOP THE BEST BRANDS IN SHAVING</h2>
        <button>SHOP RAZORS</button>
      </div>
      <img src="/static/assets/home-page-header-1.jpg" />
    </section>
    <style jsx>{`
      #homePageBoxes {
        padding: 20px;
        background: #ccc;
        overflow: auto;
        white-space: nowrap;
      }
      .home-slide > div {
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      .home-box {
        display: inline-block;
        width: 240px;
        height: 280px;
        margin-right: 20px;
        padding: 10px;
      }
      .home-box .home-title {
        color: #222;
        text-transform: uppercase;
        line-height: 30px;
        font-size: 22px;
      }
    `}</style>
  </div>
)

export default HomePage;
