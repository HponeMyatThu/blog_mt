import React from 'react'
import { Button } from 'react-bootstrap'

const NextPrevPageBtn = ({handleNext, handlePrev, pageNo}) => {
  return (
    <>
        <div className='px-5 py-3 d-flex justify-content-between '>
            <Button className={`${pageNo === 1 ? 'disabled ' : null}`} onClick={() => handlePrev()}>Previous</Button>
            <Button onClick={() => handleNext()}>Next</Button>
        </div>
    </>
  )
}

export default NextPrevPageBtn