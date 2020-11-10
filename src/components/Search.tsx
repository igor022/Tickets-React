import React from 'react'

interface Props {
  handleSearch: (e: any) => void
}

const Search = (props: Props) => {
  return (
    <div className="relative border border-primary-200 rounded-sm mb-2 w-full">
      <input onChange={props.handleSearch} className="pl-6 h-7  bg-primary-300 w-full" type="text" />
      <svg className="w-5 h-5 absolute top-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  )
}

export default Search
