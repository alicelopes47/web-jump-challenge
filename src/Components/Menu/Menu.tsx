import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../Store"
import "./Menu.scss"
import { IconButton } from "../IconButton/IconButton"
import { TfiClose } from "react-icons/tfi"
import { useNavigate } from 'react-router-dom';
import { Category, fetchItems, setSelectedCategory } from "../../slices/categoriesSlice"

interface Props {
  visible: boolean
  onClickCloseButton: () => void
}

export const Menu = ({ visible, onClickCloseButton }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)

  const handleClick = (category: Category) => {
    dispatch(fetchItems(category.id))
    navigate(`/${category.path}`)
    dispatch(setSelectedCategory(category))
  }

  return (
    <>
      <div className={`menu-container ${visible ? "menu-container-active" : "menu-container-hide"}`}>
        <ul>
          <IconButton extraClass="mobile-close-button" onClick={onClickCloseButton}>
            <TfiClose color="white" />
          </IconButton>
          <li onClick={() => navigate('/')}>PÁGINA INICIAL</li>
          {categories.map((category) => (
            <li onClick={() => handleClick(category)} key={category.id}>
              {category.name.toUpperCase()}
            </li>
          ))}
          <li>CONTATO</li>
        </ul>
      </div>
    </>
  )
}
