import { useSelector } from "react-redux"
import { MainLayout } from "../Components/MainLayout"
import { RootState } from "../Store"
import "./ItemsList.scss"
import { RegularButton } from "../Components/RegularButton/RegularButton"

export const ItemsList = () => {
  const items = useSelector((state: RootState) => state.categoriesSlice.items)
  const selectedCategory = useSelector((state: RootState) => state.categoriesSlice.selectedCategory)

  return (
    <>
      <div className="items-list">
        <h1>{selectedCategory?.name}</h1>
        <div className="items-list-container">
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
    </>
  )
}
