import { FaCirclePlus, FaPen, FaTrash } from "react-icons/fa6"
import ContentRoutePropType from "../types/ContentRoutePropType"
import ActionButton from "./ActionButton"
import OriginServerGroupType from "../types/OriginServerGroupType"
import camelCaseKeys from "../mappers/camelCaseKeys"
import { useQuery } from "@tanstack/react-query"

function OriginServerGroup(props: ContentRoutePropType) {
  const {isPending, error, data: originServerGroupData} = useQuery({
    queryKey: ['originServerGroup', props.contentRouteId],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/origin_server_groups?client_id=${props.clientId}&content_route_id=${props.contentRouteId}`,
      )
      return await response.json().then(camelCaseKeys)
    },
  })

  if (isPending) return <main className="ml-14">Loading...</main>
  if (error) return <main className="ml-14">{'An error has occurred: ' + error.message}</main>

  const originServerGroups = originServerGroupData.map((e: OriginServerGroupType) => <div key={e.id}>
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
      <div className="grid grid-cols-6 py-3">
        <div>{e.address}</div>
        <div>{e.port}</div>
        <div>Lorem ipusm</div>
        <div>Lorem ipusm</div>
        <div>Lorem ipusm</div>
        <div className="flex items-center justify-between">
          <div>Lorem ipusm</div>
          <div className="space-x-2">
            <ActionButton icon={<FaPen />}></ActionButton>
            <ActionButton icon={<FaTrash />}></ActionButton>
          </div>
        </div>
    </div>
  </div>)

  return <article>
    {originServerGroups}
  </article>
}

export default OriginServerGroup