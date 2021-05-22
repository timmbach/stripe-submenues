import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  // console.log(data);
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <a href="https://stripe.com/" target="_blank">
            <button className="btn">Start now</button>
          </a>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
