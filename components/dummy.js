import React from 'react';

const Dummy = () => {
    return (
        <>
            <style jsx>
                {`
                    div{
                        border: 1px red solid;
                        padding: 10px;
                        width: 100%;
                    }
                    .dummy{
                        color: yellow
                    }
                    
                `}
            </style>
            <div>
            <marquee>A scrolling text created with HTML Marquee element.</marquee>
            </div>
        </>
    );
};

export default Dummy;