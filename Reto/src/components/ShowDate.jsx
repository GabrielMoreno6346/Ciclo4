import React from "react";

export const ShowDate=(date)=>{
    const string = JSON.stringify(date)
    const dvalue2 = string.split(":")[1]
    const dvalue3 = dvalue2.replace('}','')
    const dvalue4 = dvalue3.replace('"','')
    const dvalue = dvalue4.replace('"','')
    const splitted = dvalue.split("-")
    const day = splitted[2]
    const month = splitted[1]
    const year = splitted[0]
    return(
        <span>{day}/{month}/{year}</span>
    )
}
