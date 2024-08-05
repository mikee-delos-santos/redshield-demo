import { FaCirclePlus } from "react-icons/fa6"
import ContentRoutePropType from "../types/ContentRoutePropType"
import ActionButton from "./ActionButton"
import OriginServerGroupType from "../types/OriginServerGroupType"

function OriginServerGroup(props: ContentRoutePropType) {

  const testData: Array<OriginServerGroupType> = [{
    id: 1,
    address: "52.9.238.76",
    port: "80",
    name: "mfa.redshield.co",
    type: "A",
    ip: "52.223.44.65",
    monitorType: ""
  }]

  const originServerGroups = testData.map(e => <div key={e.id} className="grid grid-cols-6 py-3">
    <div>{e.address}</div>
    <div>{e.port}</div>
    <div>{e.name}</div>
    <div>{e.type}</div>
    <div>{e.ip}</div>
    <div>{e.monitorType}</div>
  </div>)
  return <article>
    <div className="grid grid-cols-3 items-center py-2">
      <div className="flex items-center space-x-2">
        <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit h-fit">Origin server group</div>
        <div className="font-semibold">RS-2024-1010-CR21_pool</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit h-fit">DNS</div>
        <ActionButton icon={<FaCirclePlus color="black"/>}></ActionButton>
      </div>
      <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit h-fit">Monitoring</div>
    </div>

    <header className="grid grid-cols-6 text-slate-300 text-xs">
      <div className="uppercase">Address</div>
      <div className="uppercase">Port</div>
      <div className="uppercase">Name</div>
      <div className="uppercase">Type</div>
      <div className="uppercase">IP Address</div>
      <div className="uppercase">Monitor Type</div>
    </header>
    {originServerGroups}
  </article>
}

export default OriginServerGroup