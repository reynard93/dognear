import React from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';

const Generate = () => {
  const soldOut = false;
  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Why generate one?</h2>
          <p className="generate__text">
            Aside from helping the NEAR Rescue Dogs in their mission of
            ###METAVERSE#### the open web, and participating in a super fun game
            utilizing bleeding edge tech, NEAR Rescue Dogs NFTs will get you
            more than handsome pup in your wallet and ###metaverse#### in a
            digital city.<br></br> A large portion of the money spent on these
            NEAR Rescue Dog NFTs be stored in a DAO and distributed to the world
          </p>
          <p className="generate__list-title">Your NEAR Rescue Dog gets you:</p>
          <ul className="generate__list">
            <li className="generate__list-item">
              Special Access to NEAR Rescue Dogs owners DAO where you can submit
              worthy shelters for funding
            </li>
            <li className="generate__list-item">Discounts on stuff</li>
            <li className="generate__list-item">####metaverse#####</li>
            <li className="generate__list-item">Another perk</li>
            <li className="generate__list-item">
              and who knows what else in the future...
            </li>
          </ul>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}
          <div>
            <img
              className="generate__img"
              src="./images/Sihouette.svg"
              alt="generate kats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
