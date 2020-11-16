import React from "react";

interface Props {}

const UserTableHeader = (props: Props) => {
  return (
    <div className="userRow flex p-4 text-primary-500 border-b border-primary-100 ">
      <div className="w-12 pr-1 text-left">Owner</div>
      <div className="flex-1 px-1 text-left">Reported</div>
      <div className="flex-1 px-1 text-left w-1/4">Asset</div>
      <div className="flex-1 pl-1 text-right w-1/4">Status</div>
    </div>
  );
};

export default UserTableHeader;
