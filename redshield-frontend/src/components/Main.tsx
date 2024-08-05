import { useState } from "react";
import FilterType from "../types/FilterType";
import Button from "./Button";
import { GoFilter } from "react-icons/go";
import { IoMdInformationCircle, IoMdLock } from "react-icons/io";
import ContentRouteType from "../types/ContentRouteType";
import ContentRoute from "./ContentRoute";
import { FiPlus } from "react-icons/fi";

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
    return <ContentRoute key={e.id} contentRoute={e}></ContentRoute>
  })

  return <>
    <main className="bg-slate-100 ml-10 px-6 py-9 h-screen">
      <h2 className="text-3xl">Deal-A-Day 🇺🇸</h2>
      <div className="text-xs my-4">9 content routes</div>

      <section className="my-5 flex justify-between">
        <div className="flex space-x-2">
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
        <div className="flex items-center space-x-3">
          <IoMdInformationCircle />
          <input type="text" className="text-xs p-2 bg-transparent border min-w-96" placeholder="Content route search"></input>
          <Button icon={<FiPlus />} text="Add new app"/>
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