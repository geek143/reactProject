import React from "react";

const AvatarList = (props) => {
  return (
    <div className="w-full p-4 text-center md:w-1/2 lg:w-1/3 xl:w-1/4 sm:w-1/2">
      <div className="p-3 border rounded">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} width="100%" alt="" />
        <h1 className="text-3xl font-bold text-black">{props.name}</h1>
        <p>{props.work}</p>
      </div>
    </div>
  );
};

export default AvatarList;
