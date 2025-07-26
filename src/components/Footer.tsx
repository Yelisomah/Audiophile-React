import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background: #101010;
            color: #fff;
            padding: 3rem 10%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
          }
          .footer .footer-left {
            flex: 2;
            // min-width: 250px;
            width: 100%;
          }
          .footer .footer-logo {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            font-family: 'Manrope', sans-serif;
          }
          .footer .footer-desc {
            margin-bottom: 2rem;
            line-height: 1.6;
            color: #ccc;
          }
          .footer .footer-nav {
            flex: 1;
            // min-width: 200px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-end;
          }
          .footer .footer-nav ul {
            display: flex;
            gap: 2rem;
            list-style: none;
            padding: 0;
            margin: 0 0 2rem 0;
          }
          .footer .footer-nav a {
            color: #fff;
            text-decoration: none;
            font-weight: 700;
            letter-spacing: 2px;
          }
          .footer .footer-social {
            display: flex;
            gap: 1.5rem;
          }
          .footer .footer-social img {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
            cursor: pointer;
          }
          .footer .footer-copyright {
            margin-top: 2rem;
            color: #ccc;
            font-size: 1rem;
          }
          @media (max-width: 900px) {
            .footer {
              flex-direction: column;
              align-items: flex-start;
              padding: 2rem 5%;
            }
            .footer .footer-nav {
              align-items: flex-start;
            }
          }
        `}
      </style>
      <div className="footer-left">
        <div className="footer-logo">audiophile</div>
        <div className="footer-desc">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our demo
          facility - we're open 7 days a week.
        </div>
        <div className="footer-copyright">Copyright 2021. All Rights Reserved</div>
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>
        <div className="footer-social">
          <img src="/shared/desktop/icon-facebook.svg" alt="Facebook" />
          <img src="/shared/desktop/icon-twitter.svg" alt="Twitter" />
          <img src="/shared/desktop/icon-instagram.svg" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}