import React from 'react'

interface Props {
  coord: number
}

const Location: React.FC<Props> = (props) => {
  return (
    <div className="px-2 mr-1 border border-primary-100 rounded-sm">
      {props.coord}
    </div>
  )
}

export default Location
