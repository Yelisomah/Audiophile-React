import { Link, useLocation } from 'react-router-dom';
// import { ButtonOne } from './Button';


type BannerKey = "/headphones" | "/speakers" | "/earphones";
type Banner = {
  title: string;
 
};
const banners: Record<BannerKey, Banner> = {
    "/headphones": {
      title: "HEADPHONES",
    },
    "/speakers": {
      title: "SPEAKERS",
    },
    "/earphones": {
      title: "EARPHONES",
    },
  };
const Navbar = () => {
  const { pathname } = useLocation();
  const banner = banners[pathname as BannerKey];

  return (
    <>
      <style>
        {`
            nav {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              background-color: #000;
            }
            nav .top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              // padding: 1rem 0;
            }
            nav ul {
              list-style: none;
              display: flex;
              gap: 3rem;
            }
            nav ul li {
              margin: 0;
            }
            nav ul li a {
              color: #fff;
              text-decoration: none;
            }
            .nav-underline {
              width: 100%;
              // background-color: #1E6AFB;
            }
            .navCont {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 2rem 10%;
            }
            .navCont .left {
              flex: 1;
              color: white;
            }
            .navCont .left h1 {
              font-size: 2.5rem;
              margin-bottom: 1rem;
            }
            .navCont .left p {
              font-size: 1.2rem;
              margin-bottom: 1.5rem;
            }
            .navCont .left .btnOne {
              background-color: #d87d4a;
              color: white;
              padding: 0.75rem 1.5rem;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              text-decoration: none;
            }
            .navCont .right {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .navCont .right img {
              max-width: 100%;
              height: auto;
            }
            .cart-icon {
              width: 24px;
              height: 24px;
              cursor: pointer;
            }  
            .category-banner {
              position: relative;
              text-align: center;
              background-color: #101010;
              color: white;
              // margin-bottom: 2rem;
            }
          `}
      </style>
      <nav>
        <div className="top">
          <img src="/shared/desktop/logo.svg" alt="Audiophile Logo" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/headphones">Headphones</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/earphones">Earphones</Link></li>
          </ul>
          <img 
            src="/shared/desktop/icon-cart.svg"
            alt="Cart Icon" 
            className="cart-icon" 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <hr className="nav-underline" />
        {/* Show navCont only on Home page */}
        {pathname === "/" && (
          <div className="navCont">
            <div className="left">
              <h1>XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <Link to="/headphones" className="btnOne">See Product</Link>
              {/* <ButtonOne>See Product</ButtonOne> */}
            </div>
            <div className="right">
              <img src="/home/desktop/image-hero.jpg" alt="Hero Image" />
            </div>
          </div>
        )}
        {banner && (
          <div className="category-banner">
            <div className="banner-text">
              <h1>{banner.title}</h1>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;
