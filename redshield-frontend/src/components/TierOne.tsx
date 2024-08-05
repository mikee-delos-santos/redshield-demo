function TierOne() {
  return <article className="py-4">
    <div className="border border-slate-400 text-slate-400 rounded px-2 w-fit mb-3">Tier1</div>
    <header className="grid grid-cols-6 text-slate-300 text-xs">
      <div className="uppercase">Cluster</div>
      <div className="uppercase">IP</div>
      <div className="uppercase">Port</div>
      <div className="uppercase">Terminator</div>
      <div className="uppercase">Ingress Traffic Type</div>
    </header>
  </article>
}

export default TierOne