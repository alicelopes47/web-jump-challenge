import { useSelector } from "react-redux"
import { RootState } from "../Store"
import "./AsideMenu.scss"

export const AsideMenu = () => {
  const categories = useSelector((state: RootState) => state.categoriesSlice.items)
  return (
    <div className="aside-menu-container">
      <ul>
        <li>Página inicial</li>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
        <li>Contato</li>
      </ul>
    </div>
  )
}
