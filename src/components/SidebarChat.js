import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

const SidebarChat = ({ messages }) => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            <div className="sidebarChat__info">
                <h2>Dev Help</h2>
                <p>Last message ...</p>
            </div>
        </div>
    )
}

export default SidebarChat
