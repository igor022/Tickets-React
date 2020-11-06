import React from 'react';
import cx from 'classnames';


interface Props {
  imageUrl: string,
  size?: string
}

const TicketImage: React.FC<Props> = (props) => {
  const cxImage = cx("w-10 h-10 bg-gray-500 rounded-full overflow-hidden", {
    "w-16 h-16": props.size === 'lg'
  })
  return (
    <div className={cxImage}>
      <img className="w-full h-full  " alt="owner" src={props.imageUrl}></img>
    </div>
  )
}

export default TicketImage
