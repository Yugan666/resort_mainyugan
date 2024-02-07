import React from 'react'
import { PropagateLoader } from 'react-spinners'

const PreLoader = () => {
  return (
    <>
   <div className="h-screen flex items-center justify-center w-full">
   <PropagateLoader color="green" />
   </div>
    </>
  )
}

export default PreLoader