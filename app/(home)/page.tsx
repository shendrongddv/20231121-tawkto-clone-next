import Awward from "./_components/awward";
import FAQ from "./_components/faq";
import Features from "./_components/features";
import FounderWork from "./_components/founder-work";
import Hero from "./_components/hero";
import HowItWork from "./_components/how-it-work";
import JoinUs from "./_components/join-us";
import Reviews from "./_components/reviews";
import WhyUs from "./_components/why-us";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* WhyUs */}
      <WhyUs />

      {/* HowItWork */}
      <HowItWork />

      {/* Reviews */}
      <Reviews />

      {/* ClientClouds */}

      {/* Awward */}
      <Awward />

      {/* Features */}
      <Features />

      {/* FAQ */}
      <FAQ />

      {/* FounderWord */}
      <FounderWork />

      {/* JoinUs */}
      <JoinUs />
    </>
  );
};

export default HomePage;
