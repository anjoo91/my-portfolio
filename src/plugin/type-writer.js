import React from 'react'
import TypeIt from "typeit-react";


export const TypeWriter = () => {
    return (
        <>
            <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                    instance.type("Developer! ").pause(750).delete(11).pause(750).type("Designer! ")

                    // Remember to return it!
                    return instance;
                }}
            />
        </>
    )
}

