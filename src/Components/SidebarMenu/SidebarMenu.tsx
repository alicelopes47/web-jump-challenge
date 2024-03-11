import { useSelector } from "react-redux"
import { RootState } from "../../Store"

export const SidebarMenu = () => {
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)
  return (
    <>
      <h2 className="sidebar-title">MENU</h2>
      <ul>
        <li>Página inicial</li>
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
        <li>Contato</li>
      </ul>
    </>
  )
}
