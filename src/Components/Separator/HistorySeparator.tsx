import { useSelector } from "react-redux"
import { RootState } from "../../Store"
import './HistorySeparator.scss'

export const Separator = () => {
  const selectedCategory = useSelector((state: RootState) => state.categoriesSlice.selectedCategory)
  return (
    <div className="history-separator">
      <p className="first-page">Página inicial</p>
      <p className="separator">&gt;</p>
      <p className="second-page"> {selectedCategory?.name}</p>
    </div>
  )
}
