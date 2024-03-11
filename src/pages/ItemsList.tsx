import { useSelector } from "react-redux"
import { MainLayout } from "../Components/MainLayout"
import { RootState } from "../Store"
import './media/pants-1.jpg'
import './ItemsList.scss'
import { FaSquare } from "react-icons/fa";
import { RegularButton } from "../Components/RegularButton/RegularButton"
import { IconButton } from "../Components/IconButton/IconButton"

export const ItemsList = () => {
  const selectedCategory = useSelector((state: RootState) => state.categoriesSlice.selectedCategory)
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)
  const filters = useSelector((state: RootState) => state.categoriesSlice.filters)
  const items = useSelector((state: RootState) => state.categoriesSlice.items)

  return (
    <>
      <div className="user-history">
        <p className="first-page">Página inicial</p>
        <p className="separator">&gt;</p>
        <p className="second-page"> {selectedCategory?.name}</p>
      </div>
      <MainLayout>
        <div className="items-list-aside">
          <div className="filters-container">
            <h1>FILTRE POR</h1>
            <h2>CATEGORIAS</h2>
            <ul>
              {categories?.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
            {filters?.map(
              (filter) =>
                filter.color && (
                  <div className="filter-content">
                    <h2>{filter.color.toUpperCase()}</h2>
                    <ul>
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
                )
            )}
            {filters?.map(
              (filter) =>
                filter.color && (
                  <div className="filter-content">
                    <h2>{filter.gender?.toUpperCase()}</h2>
                    <ul></ul>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="items-list-container">
          <h1>{selectedCategory?.name}</h1>
          <div className="items-list">
            {items?.map((item) => (
              <div key={item.id} className="item">
                <img src={`/${item.image}`} alt={item.name} />
                <p className="item-name">{item.name.toUpperCase()}</p>
                <p className="item-price">{item.price}</p>
                <RegularButton variant="secondary" label="COMPRAR" />
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  )
}
