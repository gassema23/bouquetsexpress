import React from 'react'
import Input from './Input';

const InputWithButton = ({ children, inputName, inputPlaceholder, inputClass, inputType = "text", inputLabel = false }) => {
    return (
        <div className='flex my-4 w-full'>
            <Input name={inputName} placeholder={inputPlaceholder} className={inputClass} type={inputType} label={inputLabel} />
            <button className={`px-3.5 py-2 overflow-hidden relative group cursor-pointer font-medium border-2 border-primary bg-primary text-white`}>
                <span
                    className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                <span className={`relative transition duration-500 group-hover:text-primary ease`}>
                    {children}
                </span>
            </button>
        </div>
    )
}

export default InputWithButton