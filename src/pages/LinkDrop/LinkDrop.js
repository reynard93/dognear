import React from 'react';
import { ReactSVG } from 'react-svg';
import ShareSocialLinks from '../../components/ShareSocialLinks';
import Buy from '../../components/Buy';
import bigCat from '../../assets/images/hero-big-cat.svg';

const LinkDrop = () => (
  <div className="link-drop">
    <div className="link-drop__data">
      <header className="link-drop__header">
        <span className="link-drop__header-red">Share</span> a mystery{' '}
        <span className="link-drop__header-red">NFT</span> with your friend
      </header>

      <div className="link-drop__center">
        <div>
          <ul className="link-drop__list">
            <li className="link-drop__item">
              <div className="link-drop__circle"></div>
              <div className="link-drop__text">
                https://genc.win/?ref_id=VEDZHXYCS
              </div>
              <div className="link-drop__text">events@generationcrypto.org</div>
            </li>
            <li className="link-drop__item">
              <div className="link-drop__circle"></div>
              <div className="link-drop__text">
                https://genc.win/?ref_id=ABYTMDDPE
              </div>
              <div className="link-drop__text">
                Jake from Launch House on Slack
              </div>
            </li>
            <li className="link-drop__item">
              <div className="link-drop__circle"></div>
              <div className="link-drop__text">
                https://genc.win/?ref_id=YYCHYBETU
              </div>
              <div className="link-drop__text">
                Ross Gates from NEAR on Telegram
              </div>
            </li>
          </ul>
          <div className="link-drop__save">
            <button className="link-drop__save-btn" type="button">
              Save
            </button>
          </div>

          <ShareSocialLinks
            color="purpure"
            className="link-drop__share-links"
          />
        </div>
        <ReactSVG src={bigCat} />
      </div>
    </div>
    <Buy />
  </div>
);

export default LinkDrop;
