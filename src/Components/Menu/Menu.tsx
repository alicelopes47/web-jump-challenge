import { useSelector } from "react-redux"
import { RootState } from "../../Store"
import "./Menu.scss"
import { IconButton } from "../IconButton/IconButton"
import { TfiClose } from "react-icons/tfi"
import { useState } from "react"

interface Props {
  visible: boolean;
  onClickCloseButton: () => void;
}

export const Menu = ({visible, onClickCloseButton}: Props) => {
  const categories = useSelector((state: RootState) => state.categoriesSlice.items)

  return (
    <>
      <div className={`menu-container ${visible ? 'menu-container-active': 'menu-container-hide'}`}>
        <ul>
          <IconButton extraClass="mobile-close-button" onClick={onClickCloseButton}>
            <TfiClose color="white" />
          </IconButton>
          <li>PÁGINA INICIAL</li>
          {categories.map((category) => (
            <li key={category.id}>{category.name.toUpperCase()}</li>
          ))}
          <li>CONTATO</li>
        </ul>
      </div>
    </>
  )
}
