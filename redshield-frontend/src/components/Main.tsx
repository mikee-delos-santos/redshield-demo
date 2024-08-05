import { useState } from "react";
import FilterType from "../types/FilterType";
import Button from "./Button";
import { GoFilter } from "react-icons/go";
import { IoMdInformationCircle, IoMdLock } from "react-icons/io";
import ContentRouteType from "../types/ContentRouteType";
import ContentRoute from "./ContentRoute";
import { FiPlus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import ContentRoutes from "./ContentRoutes";

function Main() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ungrouped')
  const CLIENT_ID = 1; // Hardcoded for now

  const { isPending, error, data: clientData } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/clients/${CLIENT_ID}`,
      )
      return await response.json()
    }
  })

  const clientId = clientData?.id

  const getCountry = (countryCode:string) => {
    switch(countryCode) {
      case "US":
        return '🇺🇸'
      case "JP":
        return '🇯🇵'
      default:
        return '🇺🇸'
    }
  }

  if (isPending) return <main className="ml-14">Loading...</main>
  if (error) return <main className="ml-14">{'An error has occurred: ' + error.message}</main>
  if (!clientId) return <main className="ml-14">{'An error has occurred: No client loaded'}</main>

  return <>
    <main className="bg-slate-100 ml-10 px-6 py-9 h-screen">
      <h2 className="text-3xl">{clientData.name} {getCountry(clientData.country)}</h2>
      <div className="text-xs my-4">{[2].length} content routes</div>

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
      {<ContentRoutes clientId={clientId}/>}
    </main>
  </>
}

export default Main;