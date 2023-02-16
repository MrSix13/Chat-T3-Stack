import {IoChevronBack, IoAddOutline} from 'react-icons/io5';
import { IconButton } from '../../../components';

const conversations = [
    {
        userId:1,
        conversation:{
            id:2,
            conversationUser:[
                {
                    id:1,
                    name:"me",
                    image:''
                },
                {
                    id:3,
                    name:'jhon',
                    image:''
                },
            ],
            messages:[{id:4, messageText: 'this is a Message'}]
        }
    }
];

export default function Conversations(){
    return(
        <div className='fixed top-0 bottom-0 right-0 flex flex-col bg-level1 p-5 md:bottom-[unset] md:left-[unsed] md:top-[76px] md:right-4 md:rounded-xl md:shadow-sm'>
            <div className='flex items-center justify-center'>
                <IconButton className='md:hidden'>
                    <IoChevronBack/>
                </IconButton>
                <p className='text-lg'>Messages</p>
                <IconButton>
                    <IoAddOutline/>
                </IconButton>
            </div>
            {}
        </div>
    )
}