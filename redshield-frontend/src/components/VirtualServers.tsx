import ContentRoutePropType from "../types/ContentRoutePropType"
import VirtualServerType from "../types/VirtualServerType"

function VirtualServers(props: ContentRoutePropType) {

  const testVs: Array<VirtualServerType> = [{
    id: 1,
    cluster: "OHI1",
    ports: "11144",
    ip: "10.176.21.40",
    vsName: "RS-2024-1010-CR21_redir_vs",
    terminatorType: "HTTPS Redirect",
    trafficType: "ALB",
    },
    {
      id: 2,
      cluster: "OHI1",
      ports: "11145",
      ip: "10.176.21.40",
      vsName: "RS-2024-1010-CR21_vs",
      terminatorType: "Standard (HTTPS)",
      trafficType: "ALB"
    }
  ]

  const virtualServers = testVs.map((e) => 
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