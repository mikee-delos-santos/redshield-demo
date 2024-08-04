import { FaSearch } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { MdFileDownload } from "react-icons/md";
import { TbArrowMergeAltRight, TbArrowsDownUp, TbLockOpenOff, TbLockPlus } from "react-icons/tb";

function SideNav() {
  return <>
    <div className="absolute left-0 p-2 h-full bg-slate-700">
      <div className="flex-col text-white p-2 space-y-10">
        <FaSearch/>
        <MdFileDownload />
        <TbArrowMergeAltRight />
        <TbLockPlus />
        <hr className="mx-[-16px] border-orange-50"/>
        <TbArrowsDownUp />
        <TbLockOpenOff />
        <HiServer />

      </div>

    </div>
  </>
}


export default SideNav;