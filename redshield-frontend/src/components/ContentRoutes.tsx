import { IoMdLock } from "react-icons/io"
import ContentRouteType from "../types/ContentRouteType"
import ContentRoute from "./ContentRoute"
import { useQuery } from "@tanstack/react-query"
import camelCaseKeys from "../mappers/camelCaseKeys"

type ContentRoutePropType = {
  clientId: number
}

function ContentRoutes(props: ContentRoutePropType) {
  const {isPending, error, data: contentRouteQuery} = useQuery({
    queryKey: ['contentRoute', 'all'],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/content_routes?client_id=${props.clientId}`,
      )
      return await response.json().then(camelCaseKeys)
    },
  })

  if (isPending) return <main className="ml-14">Loading...</main>
  if (error) return <main className="ml-14">{'An error has occurred: ' + error.message}</main>

  const contentRoutes = contentRouteQuery.map( (e: ContentRouteType) => {
    return <ContentRoute key={e.id} contentRoute={e} clientId={props.clientId}></ContentRoute>
  })
  
  return <section>
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
}

export default ContentRoutes