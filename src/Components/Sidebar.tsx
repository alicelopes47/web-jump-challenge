import "./Sidebar.scss"
import { useLocation } from "react-router-dom"
import { SidebarMenu } from "./SidebarMenu/SidebarMenu"
import { Filters } from "./FiltersMenu/FiltersMenu"

export const Sidebar = () => {
  const location = useLocation()
  const needFilter = location.pathname !== "/"

  return (
    <div className={`${!needFilter ? "has-menu" : ""} layout-sidebar`}>
      <div className={` layout-sidebar-inner`}>{!needFilter ? <SidebarMenu /> : <Filters />}</div>
    </div>
  )
}
