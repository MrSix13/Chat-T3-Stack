import IconButton from "../IconButton/IconButton"
import {useState} from 'react';
import {IoMoon,IoChatboxOutline } from 'react-icons/io5'
import { Chat } from "../../controllers";


export default function Navbar(){
    const [showChat, setShowChat] = useState(false);
    return(
        <nav className=" z-50 fixed top-0 flex h-14 w-full items-center justify-end space-x-2 px-4 shadow-sm">
            <IconButton>
                <IoMoon/>
            </IconButton>
            <div>
                <IconButton onClick={()=>setShowChat((chat)=>!chat)} shouldFill={showChat}>
                    <IoChatboxOutline/>
                </IconButton>
                {showChat && <Chat/>}
            </div>
            <div className="flex h-10 w-10 items-center justify-center">
                <img 
                src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" 
                alt="profile"
                className="h-8 w-8 rounded-full" 
                />
            </div>
        </nav>
    )
} 