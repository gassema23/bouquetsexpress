import React, { useState } from 'react'

function Popover({ content, src = "#", children }) {
    const [pophover, setPophover] = useState(false)
    const handlePophover = () => {
        setPophover(!pophover);
    };
    return (
        <div className=''>
            <a href={src} onMouseEnter={handlePophover} onMouseLeave={handlePophover}>{children}</a>
            {
                (pophover) && (
                    <div className="absolute -top-8 left-0 mr-3 block z-30 leading-normal text-xs max-w-xs text-left no-underline break-words rounded bg-gray-800 p-2 text-white">
                        {content}
                    </div>
                )
            }
        </div>
    )
}

export default Popover
