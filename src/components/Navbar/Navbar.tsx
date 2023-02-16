import IconButton from "../IconButton/IconButton"
import {IoMoon,IoChatboxOutline } from 'react-icons/io5'


export default function Navbar(){
    return(
        <nav className="fixed top-0 flex h-14 w-full items-center justify-end space-x-2 px-4 shadow-sm">
            <IconButton>
                <IoMoon/>
            </IconButton>
            <IconButton>
                <IoChatboxOutline/>
            </IconButton>
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