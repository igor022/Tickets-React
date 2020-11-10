import React, { useMemo } from 'react'

const statuses = [
  {
    name: 'unassigned',
    short: 'UNA',
    style: 'text-primary-500'
  },
  {
    name: 'assigned',
    short: 'ASD',
    style: 'text-yellow-600'
  },
  {
    name: 'completed',
    short: 'COM',
    style: 'text-green-600'
  },
]

interface Props {
  status?: string
}

const Status: React.FC<Props> = (props) => {
  const { status = 'default' } = props
  const derivedStatus = useMemo(() => {
    return (props.status && statuses.find((s) => s.name === props.status)) || statuses[0];
  }, [status]);

  return (
    <div className={`${derivedStatus.style} rounded-sm px-2 inline-block font-bold border border-primary-100`}>
      {derivedStatus.short}
    </div>
  )
}

export default Status
