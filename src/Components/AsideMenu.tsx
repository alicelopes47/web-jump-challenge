import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../Store"
import "./AsideMenu.scss"
import { fetchItems } from "../slices/categoriesSlice"

export const AsideMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)
  const handleClick = (categoryId: number) => {
    dispatch(fetchItems(categoryId))
  }

  return (
    <div className="aside-menu-container">
      <ul>
        <li>Página inicial</li>
        {categories.map((category) => (
          <li onClick={() => handleClick(category.id)} key={category.id}>
            {category.name}
          </li>
        ))}
        <li>Contato</li>
      </ul>
    </div>
  )
}
