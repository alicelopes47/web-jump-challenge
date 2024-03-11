import { FaSquare } from "react-icons/fa"
import { useSelector } from "react-redux"
import { RootState } from "../../Store"
import { IconButton } from "../IconButton/IconButton"
import './Filters.scss'

export const Filters = () => {
  const filters = useSelector((state: RootState) => state.categoriesSlice.filters)

  const hasColorFilter = filters?.some((filter) => filter.color)
  const hasGenderFilter = filters?.some((filter) => filter.gender)
  return (
    <>
      <h2 className="sidebar-title">FILTRE POR</h2>
      {hasColorFilter &&
        filters?.map((filter) => (
          <div className="filter-content">
            <h2 className="sidebar-subtitle">{filter.color?.toUpperCase()}</h2>
            <ul className="color-picker">
              <IconButton>
                <FaSquare color="#CB0D1F" />
              </IconButton>
              <IconButton>
                <FaSquare color="#F26324" />
              </IconButton>
              <IconButton>
                <FaSquare color="#27A3A9" />
              </IconButton>
            </ul>
          </div>
        ))}
      {hasGenderFilter &&
        filters?.map((filter) => (
          <div className="filter-content">
            <h2 className="sidebar-subtitle">{filter.gender?.toUpperCase()}</h2>
            <ul>
              <li>Masculino</li>
              <li>Feminino</li>
            </ul>
          </div>
        ))}
    </>
  )
}
