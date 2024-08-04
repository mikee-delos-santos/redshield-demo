import { useState } from "react"
import ContentRouteType from "../types/ContentRouteType"
import { FiChevronRight } from "react-icons/fi"
import './ContentRoute.css';
import VirtualServers from "./VirtualServers";
import TierOne from "./TierOne";

type ContentRouteProps = {
  contentRoute: ContentRouteType
}

function ContentRoute(props: ContentRouteProps) {
  const [expanded, setExpanded] = useState(false)

  return <>
    <div key={props.contentRoute.id} className="grid grid-cols-[0.2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] px-2 py-4 items-center" onClick={() => setExpanded(!expanded) }>
      <div onClick={() => setExpanded(!expanded) } className={`w-[1.87rem] p-2 rounded-full bg-slate-300 flex justify-center ${expanded ? "rotate-down" : ""}`}>
        <FiChevronRight/>
      </div>
      <div>{props.contentRoute.name}</div>
      <div>{props.contentRoute.serviceReference}</div>
      <div>{props.contentRoute.hostNames}</div>
      <div>{props.contentRoute.pops}</div>
      <div>{props.contentRoute.spec}</div>
      <div>{props.contentRoute.locked ? 'Yes' : 'No'}</div>
    </div>

    <section className={`${expanded ? "visible" : "hidden"}`}>
      <VirtualServers contentRouteId={props.contentRoute.id}/>
      <TierOne contentRouteId={props.contentRoute.id}/>
      <article>
        <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit mb-3">Origin server roup</div>
      </article>

    </section>
    <hr className="mx-[-20px]"/>
  </>

}

export default ContentRoute