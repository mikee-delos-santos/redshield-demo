import { useQuery } from "@tanstack/react-query"
import ContentRoutePropType from "../types/ContentRoutePropType"
import VirtualServerType from "../types/VirtualServerType"
import camelCaseKeys from "../mappers/camelCaseKeys"

function VirtualServers(props: ContentRoutePropType) {
  const {isPending, error, data: virtualServerData} = useQuery({
    queryKey: ['virtualServers', props.contentRouteId],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/virtual_servers?client_id=${props.clientId}&content_route_id=${props.contentRouteId}`,
      )
      return await response.json().then(camelCaseKeys)
    },
  })

  if (isPending) return <main className="ml-14">Loading...</main>
  if (error) return <main className="ml-14">{'An error has occurred: ' + error.message}</main>


  const virtualServers = virtualServerData.map((e: VirtualServerType) => 
     <div key={e.id} className="grid grid-cols-6 py-2">
      <div>{e.cluster}</div>
      <div>{e.ports}</div>
      <div>{e.ip}</div>
      <div>{e.vsName}</div>
      <div>{e.terminatorType}</div>
      <div>{e.trafficType}</div>
    </div>
  )

  return <article className="q-py-3">
    <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit mb-3">Virtual Servers</div>
    <header className="grid grid-cols-6 text-slate-300 text-xs">
      <div className="uppercase">Cluster</div>
      <div className="uppercase">Ports</div>
      <div className="uppercase">IP</div>
      <div className="uppercase">VS Name</div>
      <div className="uppercase">Terminator Type</div>
      <div className="uppercase">Ingress Traffic Type</div>
    </header>
    { virtualServers }
  </article>
}

export default VirtualServers