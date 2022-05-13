import React from 'react';

export const Card = (props) => {
    return (
        <div className='transition duration-500 hover:scale-105 rounded-2xl border-2 border-solid border-slate my-2 bg-slate-200 py-2 px-2'>
            <h1 className='font-medium text-2xl text-sky-400'>{props.title}</h1>
            <p className='py-3 text-xl'>{props.body}</p>
            <small>{props.date}</small>
        </div>
    )
}