import React from 'react'

function Button({ children, styleType = 'primary' }) {
    if (styleType === 'dark') {
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-dark text-dark`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-dark top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-white ease`}>
                    {children}
                </span>
            </button>
        )
    }else if(styleType === 'error'){
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-error text-error`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-error top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-white ease`}>
                    {children}
                </span>
            </button>
        )
    }else if(styleType === 'success'){
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-success text-success`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-success top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-white ease`}>
                    {children}
                </span>
            </button>
        )
    }else if(styleType === 'info'){
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-info text-info`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-info top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-white ease`}>
                    {children}
                </span>
            </button>
        )
    }else if(styleType === 'white'){
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-dark ease`}>
                    {children}
                </span>
            </button>
        )
    }else {
        return (
            <button className={`px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-dark text-dark`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-dark top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-white ease`}>
                    {children}
                </span>
            </button>
        )
    }
}

export default Button
