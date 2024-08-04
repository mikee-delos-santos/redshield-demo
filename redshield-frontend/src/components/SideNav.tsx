import { FaSearch } from "react-icons/fa";

function SideNav() {
  return <>
    <div className="absolute left-0 p-2 h-full bg-slate-700">
      <div className="flex-col text-white p-2">
        <FaSearch className="my-3"/>
        <FaSearch className="my-3"/>
        <FaSearch className="my-3"/>
        <FaSearch className="my-3"/>
      </div>

    </div>
  </>
}


export default SideNav;