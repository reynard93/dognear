/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from 'react';
import BuyMoreBtn from '../BuyMoreBtn';
import { appStore } from '../../state/app';
import GenerateCountBtn from '../GenerateCountBtn';

const GenerateBlock = () => {
  const { state } = useContext(appStore);
  const { wallet } = state;

  const [active, setActive] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return undefined;
  }, [showMessage]);

  const handleClick = () => {
    console.log('walet', wallet);
    if (!wallet.signedIn) {
      wallet.signIn();
    } else if (!active) {
      setShowMessage(true);
    }
  };

  return wallet ? (
    <div className="generate-block">
      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price ">
        <span className="generate-block__near">Ⓝ</span>
        <p className={`generate-block__count  ${animation}`}>
          {active === 10 ? 45 : 5}
        </p>
      </div>
      <BuyMoreBtn
        onClick={handleClick}
        text="Generate"
        className="generate-block__button"
      />
      <GenerateCountBtn
        count={1}
        onClick={() => {
          setActive(1);
          if (active === 1) return;
          setAnimation('generate-block__animation-hide');
          setTimeout(() => setAnimation('generate-block__animation-price'), 0);
        }}
        isActive={active === 1}
      />
      <GenerateCountBtn
        count={10}
        onClick={() => {
          setActive(10);
          if (active === 10) return;
          setAnimation('generate-block__animation-hide');
          setTimeout(() => setAnimation('generate-block__animation-price'), 0);
        }}
        isActive={active === 10}
      />
      {showMessage && (
        <div className="generate-block__message">
          select the number of Nearkats
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
export default GenerateBlock;
