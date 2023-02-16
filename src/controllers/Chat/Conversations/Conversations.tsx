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
                    image:'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
                },
                {
                    id:3,
                    name:'jhon',
                    image:'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
                },
            ],
            messages:[{id:4, messageText: 'this is a Message'}]
        }
    }
];

export default function Conversations(){
    return(
        <div className='fixed top-0 bottom-0 right-0 flex flex-col bg-level1 p-5 md:bottom-[unset] md:left-[unsed] md:top-[76px] md:right-4 md:rounded-xl md:shadow-sm md:w-96 space-y-5'>
            <div className='flex items-center justify-between'>
                <IconButton className='md:hidden'>
                    <IoChevronBack/>
                </IconButton>
                <p className='text-lg'>Messages</p>
                <IconButton>
                    <IoAddOutline/>
                </IconButton>
            </div>
            {conversations.map((conversationInfo)=>{
                const recipient = 
                  conversationInfo.conversation.conversationUser[0]?.id ===
                  conversationInfo.userId 
                      ? conversationInfo.conversation.conversationUser[1]
                      : conversationInfo.conversation.conversationUser[0]
                return(
                    <li
                        className='list-none hover:bg-level1Hover py-2 rounded-xl items-center space-x-2 mx-2'
                     key={conversationInfo.conversation.id}
                     >
                        <button className='flex items-center  space-x-4 text-left'>
                            <img src={recipient!.image} alt="profile" className='rounded-full w-12 h-12'/>
                            <div className='flex flex-col space-y-2'>
                                <p>{recipient?.name}</p>
                                <p className='text-tertiaryText text-sm'>{conversationInfo.conversation.messages[0]?.messageText}</p>
                            </div>
                        </button>
                    </li>
                )
            })}
        </div>
    )
}