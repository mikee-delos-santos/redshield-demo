import { FaBars, FaSun } from 'react-icons/fa6'
import redshieldLogo from '/redshield.svg'

function Nav() {

  return <>
    <nav className="flex w-full bg-slate-800 p-2 justify-between items-center drop-shadow-lg text-white">
      <FaBars />
      <div className="flex items-center">
        <img src={redshieldLogo} className="h-5"></img>
        <h3 className="text-xl text-white ml-[-75px]">RedBase</h3>
      </div>
      <div className="flex items-center space-x-3">
        <button>
          <FaSun />
        </button>
        <button className="text-xs">Logout</button>
      </div>      
    </nav>
  </>

}

export default Nav