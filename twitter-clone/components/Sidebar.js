import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
    return (
        <>
            <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/*Twitter Icon in top left of sidebar*/}
            <div className='hoverEffect p-0 hover:bg-blue-100 hover:rounded-full xl:px-1 mt-4'>
                <Image src='/images/twitter.svg' width='40px' height='40px' />
            </div>

                {/*making sidebar menu*/}
                <div className='mt-4 mb-2.5 xl:items-start'>
                    <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                    <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                    <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                    <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                    <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                    <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                    <SidebarMenuItem text="Profile" Icon={UserIcon} />
                    <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
                </div>

                {/*making button*/}
                <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                    Tweet
                </button>

                {/*making own username*/}
                <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                    <img
                        // onClick={}
                        src='./images/avatar.svg'
                        alt="user-img"
                        className="h-10 w-10 rounded-full xl:mr-2"
                    />
                    <div className="leading-5 hidden xl:inline">
                        <h4 className="font-bold">Amirhossein</h4>
                        <p className="text-gray-500">@awmirhosen</p>
                    </div>
                    <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
                </div>

            </div>
        </>
    )
}

export default Sidebar;