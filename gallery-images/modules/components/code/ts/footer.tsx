import * as React from "react";

export /*bundle*/ function Footer() {
  return (
    <footer className="container-footer">
      <section className="links">
        <div className="link">
          <span className="footer__span">About</span>
          <ul className="footer__ul">
            <li className="footer__li">Our Story</li>
            <li className="footer__li">Blog</li>
            <li className="footer__li">123RF Contributors</li>
            <li className="footer__li">Monetize your creations</li>
          </ul>
        </div>

        <div className="link">
          <span className="footer__span">Services</span>
          <ul className="footer__ul">
            <li className="footer__li">Tools</li>
            <li className="footer__li">Corporate+</li>
            <li className="footer__li">123RF PLUS</li>
            <li className="footer__li">Become An Affiliate</li>
            <li className="footer__li">Categories</li>
          </ul>
        </div>

        <div className="link">
          <span className="footer__span">Policies</span>
          <ul className="footer__ul">
            <li className="footer__li">Legal</li>
            <li className="footer__li">Licensing</li>
            <li className="footer__li">Privacy policy</li>
            <li className="footer__li">Terms of use</li>
            <li className="footer__li">Cookie policy</li>
            <li className="footer__li">Security Disclosure Policy</li>
          </ul>
        </div>

        <div className="link">
          <span className="footer__span">Support</span>
          <ul className="footer__ul">
            <li className="footer__li">Contact</li>
            <li className="footer__li">Support</li>
            <li className="footer__li">
              <span className="footer__span">help me</span>
            </li>
            <li className="footer__li">@ 1 866 655 30733</li>
          </ul>
        </div>
      </section>

      <section className="footer-info">
        <div className="reserved">
          All rights reserved. © GaboDev-trainne 2023.
        </div>
        <div className="icons-networks">
          <img
            className="footer__img"
            src="img/icons/facebook.png"
            alt="icon facebook"
          />
          <img
            className="footer__img"
            src="img/icons/gorjeo.png"
            alt="icon gorjeo"
          />
          <img
            className="footer__img"
            src="img/icons/instagram.png"
            alt="icon instagram"
          />
          <img
            className="footer__img"
            src="img/icons/whatsapp.png"
            alt="icon whatsapp"
          />
        </div>
      </section>
    </footer>
  );
}
