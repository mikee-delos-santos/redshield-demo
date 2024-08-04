import { useState } from "react";
import FilterType from "../types/FilterType";
import Button from "./Button";
import { GoFilter } from "react-icons/go";
import { IoMdLock } from "react-icons/io";
import ContentRouteType from "../types/ContentRouteType";
import ContentRoute from "./ContentRoute";

function Main() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ungrouped')

  const testData: Array<ContentRouteType> = [{
    id: 1,
    name: "RS-2024-1010-CR21",
    serviceReference: "RS-2024-1010",
    hostNames: "mfa.redshield.co",
    pops: "OHI1, ORE1",
    spec: "1.0",
    locked: true
    },
    {
      id: 2,
      name: "RS-2024-1010-CR27",
      serviceReference: "RS-2024-1010",
      hostNames: "redcoer.dev.0-days.net",
      pops: "",
      spec: "1.0",
      locked: false
    }
  ]

  const contentRoutes = testData.map(e => {
    return <ContentRoute contentRoute={e}></ContentRoute>
  })

  return <>
    <main className="bg-slate-100 ml-10 px-6 py-9 h-screen">
      <h2 className="text-3xl">Deal-A-Day 🇺🇸</h2>
      <div className="text-xs my-4">9 content routes</div>

      <section className="my-5">
        <div className="flex gap-2">
          <div onClick={() => setSelectedFilter('vSG')}>
            <Button text={'Grouped by vSG'} icon={<GoFilter/>} selected={selectedFilter === 'vSG'} />
          </div>
          <div onClick={() => setSelectedFilter('app')}>
            <Button text={'Grouped by app'} icon={<GoFilter/>} selected={selectedFilter === 'app'}/>
          </div>
          <div onClick={() => setSelectedFilter('t1')}>
            <Button text={'Grouped by Tier 1'} icon={<GoFilter/>} selected={selectedFilter === 't1'}/>
          </div>
          <div onClick={() => setSelectedFilter('ungrouped')}>
            <Button text={'Ungrouped'} icon={<GoFilter/>} selected={selectedFilter === 'ungrouped'}/>
          </div>
        </div>
      </section>

      <section>
        <article className="text-sm">
          <div className="bg-white rounded-md drop-shadow-lg w-full p-5">
            <header className="grid grid-cols-[0.2fr_1fr_1fr_1fr_1fr_1fr_0.5fr] px-2 pb-2">
              <div></div>
              <div>Name</div>
              <div>Service reference</div>
              <div>Host names</div>
              <div>PoPs</div>
              <div>Spec</div>
              <div><IoMdLock/></div>
            </header>
            <hr className="mx-[-20px]"/>
            {contentRoutes}
          </div>
        </article>
      </section>
    </main>
  </>
}

export default Main;