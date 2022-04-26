import React from 'react'

export default function Roles({value}) {
    if(value === 'admin') return <span className="bg-pink-300 py-1 px-2.5 rounded-full text-base uppercase text-pink-900 font-bold"> {value} </span>
    return <span className="bg-blue-300 py-1 px-2.5 rounded-full text-base uppercase text-blue-900 font-bold"> {value} </span>
}
