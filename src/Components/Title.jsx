import React from 'react';
import Logo from '../logo.svg'

export const Title = (props) => {
    return (
        <div className='group flex items-center justify-center'>
            <img src={Logo} className="w-40 h-40 group-hover:animate-spin"alt="React Logo" />
            <h1 className="Title text-3xl py-8 text-center text-white group-hover:animate-pulse cursor-pointer font-semibold">{props.title}</h1>
        </div>
    )
}