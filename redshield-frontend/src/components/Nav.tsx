import redshieldLogo from '/redshield.svg'

function Nav() {

  return <>
    <nav className="flex w-full bg-slate-800 p-2 justify-center items-center drop-shadow-lg">
      <img src={redshieldLogo} className="h-5"></img>
      <h3 className="text-xl text-white ml-[-75px]">RedBase</h3>
    </nav>
  </>

}

export default Nav