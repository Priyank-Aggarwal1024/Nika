// import React from 'react'

import { useEffect } from "react";
import { jo1, jo2, jo3, jo4, jo5, jo6, jo7 } from "../assets";
import { HomeCard, Signup } from "../components";
import card from "../utils/card";

function Waitlist() {
  const waitlistCard: card[] = [
    {
      img: jo1,
      title: "Early Access to Products",
      detail:
        "Users want to be among the first to try out new products, features, or services before they are publicly released.",
    },
    {
      img: jo2,
      title: "Exclusive Offers and Bonuses",
      detail:
        "Special offers or bonuses available only to waitlist members can be a strong incentive to sign up.",
    },
    {
      img: jo3,
      title: "Personalized Recommendations",
      detail: "Waitlist members might expect personalized recommendations",
    },
    {
      img: jo4,
      title: "Exclusive Insights",
      detail:
        "Offering exclusive content like insights, educational resources, or expert tips can attract users to join the waitlist.",
    },
    {
      img: jo5,
      title: "Discounts on Future Purchases",
      detail: "The potential to receive discounts to join the waitlist.",
    },
    {
      img: jo6,
      title: "Participation in Beta Testing",
      detail:
        "The opportunity to participate in beta testing and provide feedback on new products",
    },
    {
      img: jo7,
      title: "Support for an Innovative Project",
      detail:
        "The opportunity to participate in beta testing and provide feedback on new products or services ...",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Why Join?
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              {waitlistCard.map((data, idx) => (
                <HomeCard key={idx} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
}

export default Waitlist;
