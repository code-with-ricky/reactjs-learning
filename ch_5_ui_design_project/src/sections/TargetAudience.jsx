import React from "react";
import Pill from "../components/Pill";
import Logo from "../components/Logo";
import RightUpArrow from "../assets/icons/right-up.png";
import TargetAudienceGroup from "../components/TargetAudienceGroup";

const TargetAudience = () => {
  return (
    <div className="h-screen w-screen py-6 px-12 flex flex-col gap-y-6 border">
      <div className="header flex items-center justify-between">
        <Pill text="Target Audience" />
        <Logo />
      </div>

      {/* body */}
      <div className="body h-full grid grid-cols-4 gap-x-6 py-4">
        {/* first content column */}
        <div className="content-div flex flex-col justify-between items-start">
          <div className="content-container mt-10 flex flex-col gap-y-1">
            <p className="text-5xl font-bold">Prospective</p>
            <p className="text-5xl font-bold">customer</p>
            <p className="text-5xl font-bold">segmentation</p>

            <p className="text-gray-500 mt-6 text-lg">
              Depending on customer satisfaction and access to banking products,
              potential target audience can be divided into three groups.
            </p>
          </div>
          <img src={RightUpArrow} alt="go-to-arrow" className="h-14" />
        </div>
        <TargetAudienceGroup
          groupNumber="1"
          groupImage="https://plus.unsplash.com/premium_photo-1661600041039-4f2d5e24f98a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGxhZHklMjBvbiUyMGNhbGx8ZW58MHx8MHx8fDA%3D"
          groupText="Prime customers, that have access to bank credit and are satisfied with the current product."
          buttonText="Satisfied"
          buttonColor="bg-[#bff04a]"
        />
        <TargetAudienceGroup
          groupNumber="2"
          groupImage="https://plus.unsplash.com/premium_photo-1669879884807-07e0d1096fed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNpbmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
          groupText="Prime customers, that have access to bank credit and are not satisfiued with the current service."
          buttonText="Underserved"
          buttonColor="bg-[#f18701]"
        />
        <TargetAudienceGroup
          groupNumber="3"
          groupImage="https://images.unsplash.com/photo-1767176653260-e4bf41ef0674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
          groupText="Customers from near-prime segments with no access to bank credit"
          buttonText="Underbanked"
          buttonColor="bg-[#4cc9f0]"
        />
      </div>
    </div>
  );
};

export default TargetAudience;
