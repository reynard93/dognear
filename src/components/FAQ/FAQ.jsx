import React from 'react';
import { ReactSVG } from 'react-svg';
import rightEllipse from '../../assets/images/faq-ellipse-right.svg';
import leftEllipse from '../../assets/images/faq-ellipse-left.svg';

const FAQ = () => (
  <div id="faq" className="faq__wrapper">
    <section className="faq">
      <div className="faq__background">
        <ReactSVG className="faq__background-ellipse-left" src={leftEllipse} />
        <ReactSVG
          className="faq__background-ellipse-right"
          src={rightEllipse}
        />
      </div>
      <div className="faq__container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <ul className="faq__list">
          <li className="faq__item">
            <h3 className="faq__item-title">What’s an NFT?</h3>
            <p className="faq__item-text">
              NFT stands for non-fungible token, which basically means that its
              a one-of-a-kind digital asset that belongs to you and you only.
              The most popular NFTs right now include artwork and music, but can
              also include videos and even tweets.
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              Where does my NFT go after I purchase it?
            </h3>
            <p className="faq__item-text">
              NFTs will appear in your NEAR wallet immediately after purchase
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              Does a shelter need to buy a NEAR Rescue Dog NFT to receive a
              grant?
            </h3>
            <p className="faq__item-text">
              yes every NEAR Rescue Dog nft owner will be able to submit a
              funding proposal to the dao. From emergency medicine or food
              grants to helping improve infrastructure or equipment of a
              shelter. We will weigh requests for funds based on need giving
              priority to non profit and volunteer shelters.
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              Does a shelter need to buy a NEAR Rescue Dog NFT to receive a
              grant?
            </h3>
            <p className="faq__item-text">
              Does a shelter need to buy a NEAR Rescue Dog NFT to receive a
              grant?
            </p>
          </li>
          <li className="faq__item">
            <h3 className="faq__item-title">
              How do we know a shelter is legit and the person sending the
              request represents the shelter?
            </h3>
            <p className="faq__item-text">
              We will research every shelter request and in that process we will
              find the appropriate representative to send funds to regardless of
              who submitted the request, ensuring no shelters are misrepresented
            </p>
          </li>
        </ul>
        <img
          className="faq__kat-img"
          src="./images/no-bg-hound.png"
          alt="nearkat"
        />
      </div>
    </section>
  </div>
);

export default FAQ;
