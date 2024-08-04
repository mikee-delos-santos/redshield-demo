import { useState } from "react"
import ContentRouteType from "../types/ContentRouteType"
import { FiChevronRight } from "react-icons/fi"
import './ContentRoute.css';

type ContentRouteProps = {
  contentRoute: ContentRouteType
}

function ContentRoute(props: ContentRouteProps) {
  const [expanded, setExpanded] = useState(false)

  return <>
    <div key={props.contentRoute.id} className="grid grid-cols-[0.2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] px-2 py-4 items-center">
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


    </section>
    <hr className="mx-[-20px]"/>
  </>

}

export default ContentRoute