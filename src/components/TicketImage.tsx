import React from 'react';
import cx from 'classnames';


interface Props {
  imageUrl: string,
  size?: string
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-16 h-16'
}

const TicketImage: React.FC<Props> = (props) => {

  const size: string = (props.size && (sizes as any)[props.size]) || sizes.md;

  const cxImage = cx(`${size} bg-gray-500 rounded-full overflow-hidden`, {

  })
  return (
    <div className={cxImage}>
      <img className="w-full h-full" alt="owner" src={props.imageUrl}></img>
    </div>
  )
}

export default TicketImage
