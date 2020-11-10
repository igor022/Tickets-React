import React from "react";

interface Props {
  header?: string;
  children?: any;
}

const TicketCardSection = (props: Props) => {
  return (
    <div className="border-2 border-primary-200 rounded-t overflow-hidden">
      <div className="bg-primary-200 px-2 py-1 font-bold">
        <h6>{props.header}</h6>
      </div>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default TicketCardSection;
