import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className="md:min-h-screen md:min-w-screen h-screen flex items-center justify-center bg-[#121725] gap-2">
        <Sidebar />
        <MessageContainer /> 
    </div>
  )
}

export default Home