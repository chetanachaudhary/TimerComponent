import { Button } from "@/components/ui/button";
import { FileQuestion, MoveLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarCharacter from "../../Avatar.png";

import Award from "/Awards-boy.png";

import React, { useState, useEffect } from "react";
import SetupTime from "./Timer/SetupTime";

const TimerComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="cursor-pointer">
        <MoveLeft />
      </div>
      <div>
        <img src={Award} alt="" className="h-[362px] w-[416.16px]" />
        <div className="flex gap-2 justify-center text-[22px] font-semibold">
          <div className="text-[#FE9801]">Congratulations</div>
          <div>on chapter Completion!!!</div>
        </div>
        <div className="cursor-pointer mt-5">
          <Button className="mx-2 rounded-3xl w-[97px] bg-white border-[#000000] border-[1px] text-[#000000] hover:bg-transparent">
            Back
          </Button>
          <Button className="mx-2 rounded-3xl w-[158px]">Next Chapter</Button>
          <Button className="mx-2 rounded-3xl w-[97px] bg-white border-[#000000] border-[1px] text-[#000000] hover:bg-transparent">
            Close
          </Button>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <div>
            <SetupTime />
          </div>
          <div className="w-[306px] h-auto">
            <div className="flex font-medium mb-2">Chapter 2</div>
            <div className="bg-[#E9E9E9] flex justify-center h-[62px]  items-center gap-4 ">
              <div><FileQuestion/></div>
              <div>
                <div className="text-base">Not so very secret sauce</div>
                <div className="flex gap-2 text-[14px]">
                  <div className="text-gray-500">Quiz</div>
                  <div className="text-gray-400">6 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        {" "}
        <Avatar>
          <AvatarImage src="../../Avatar.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TimerComponent;
