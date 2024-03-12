import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../Store"
import { useNavigate } from "react-router-dom"
import { Category, fetchItems, setSelectedCategory, clearSelectedCategory } from "../../slices/categoriesSlice"

export const SidebarMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)

  const handleClick = (category: Category) => {
    dispatch(fetchItems(category.id))
    navigate(`/${category.path}`)
    dispatch(setSelectedCategory(category))
  }

  const handleClickHome = () => {
    navigate(`/`)
    dispatch(clearSelectedCategory())
  }
  return (
    <>
      <h2 className="sidebar-title">MENU</h2>
      <ul>
        <li onClick={handleClickHome}>Página inicial</li>
        {categories?.map((category) => (
          <li onClick={() => handleClick(category)} key={category.id}>{category.name}</li>
        ))}
        <li>Contato</li>
      </ul>
    </>
  )
}
