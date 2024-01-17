import { Icon } from '@iconify/react'
import React from 'react'

const Navbar = ({title}) => {
  return (
    <>
        <div className='p-3 shadow-lg d-flex justify-content-between'>
            <h1>{title}</h1>
            <Icon className='d-flex my-auto' icon='mdi:bell-outline' width='30px' />
        </div>
    </>
  )
}

export default Navbar