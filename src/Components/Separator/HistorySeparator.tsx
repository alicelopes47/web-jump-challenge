import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../Store"
import './HistorySeparator.scss'
import { useNavigate } from "react-router-dom"
import { clearSelectedCategory } from "../../slices/categoriesSlice"

export const Separator = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedCategory = useSelector((state: RootState) => state.categoriesSlice.selectedCategory)
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/`)
    dispatch(clearSelectedCategory())
  }

  return (
    <div className="history-separator">
      <p className="first-page" onClick={handleClickHome}>Página inicial</p>
      <p className="separator">&gt;</p>
      <p className="second-page"> {selectedCategory?.name}</p>
    </div>
  )
}
