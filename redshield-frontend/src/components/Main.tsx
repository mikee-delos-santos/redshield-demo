import { useState } from "react";
import FilterType from "../types/FilterType";
import Button from "./Button";
import { GoFilter } from "react-icons/go";

function Main() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ungrouped')

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
        


      </section>
    </main>
  </>
}

export default Main;