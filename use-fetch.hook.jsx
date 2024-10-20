"use client"

import { useEffect, useMemo, useState } from "react"


export function useFetch (){
const [data,setData]=React.usestate(null)
const [error,setError] =useState(null)
    useEffect(()=>{
        let controller = new AbortController()
        async function doFetch(){
            try {
                let res= await fetch(data,
                    {
                        signa:controller.signal
                    }  )
                    if(!controller.signal.aborted){
return
                    }
                // ;fetch handling 
                if (res.status>=500){
                    let text =await res.statusText // status text is returned from the fetch request as a key to use on the response objetct( REMEMBER respponses are objects)
                    setError(new Error(text))
                }
                let json =res.json()
                // error handling 
                if (json.error){
                    setError(new Error(json.error))


                }else {
                    setData(json)
                }
            } catch (error) {
                if(error.name!=="AbortError"){ // the abort controller in action

                    setError(error)
                }   
            }
        }
            doFetch()
            return ()=>{
                controller.abort()
            }
    },[url])
    return useMemo({data,error}, [data,error])
}

