import React from 'react';
import { ReactSVG } from 'react-svg';
import circle from '../../assets/images/leran-background-circle.svg';
import ellipse from '../../assets/images/leran-background-ellipse.svg';

const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <h2 className="learn__title">Near Rescue Dogs: NFTs for a cause</h2>
      <p className="learn__text">
        Nestled in the Nearverse, you can find the Near Rescue Dogs using their
        powers of cool to both bring forth the dream of the open web, and help
        real world shelters and dog rescue organizations every NEAR Rescue Dog
        minted helps both build web 3 and help animals in need.
      </p>
      <p className="learn__text">
        Now, you have the power to bolster their efforts by bringing more into
        existence.
      </p>

      <p className="learn__text">
        This next generation is a collection of 10,000 Near Rescue Dogs,
        randomly and programmatically generated, on the NEAR Blockchain.
      </p>

      <p className="learn__text">
        They have a variety of colors, characteristics, faces, backgrounds,
        accessories and features.”
      </p>
    </div>
    <div className="learn__picture">
      <img
        className="learn__img"
        src="./images/learn-kats-gourp.png"
        alt="nearkats group"
      />
      <ReactSVG className="learn__background-circle" src={circle} />
      <ReactSVG className="learn__background-ellipse" src={ellipse} />
    </div>
  </section>
);

export default Learn;
