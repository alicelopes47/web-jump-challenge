import "./App.scss"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { fetchCategories } from "./slices/categoriesSlice"
import { useEffect, useState } from "react"
import { AppDispatch, RootState } from "./Store"
import Logo from "./assets/logo.png"
import { IconButton } from "./Components/IconButton/IconButton"
import { TfiMenu } from "react-icons/tfi"
import { IoIosSearch } from "react-icons/io"
import { RegularButton } from "./Components/RegularButton/RegularButton"
import { Menu } from "./Components/Menu/Menu"
import { Home } from "./pages/Home"
import { ItemsList } from "./pages/ItemsList"
import { Sidebar } from "./Components/Sidebar"
import { Separator } from "./Components/Separator/HistorySeparator"
import { MainLayout } from "./Components/MainLayout"

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const categories = useSelector((state: RootState) => state.categoriesSlice.categories)
  const responseStatus = useSelector((state: RootState) => state.categoriesSlice.responseStatus)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        {responseStatus.loading && <div>Loading...</div>}

        <header>
          <div className="account-action-container">
            <p>
              <a href="">Acesse sua Conta</a> ou <a href="">Cadastre-se</a>
            </p>
          </div>
          <div className="logo-container-mobile">
            <IconButton onClick={() => setShowMenu(true)}>
              <TfiMenu />
            </IconButton>
            <img src={Logo} alt="Logo" />
            <IconButton>
              <IoIosSearch color="#CB0D1F" />
            </IconButton>
          </div>
          <div className="logo-container-desktop">
            <img src={Logo} alt="Logo" />
            <div className="search-input">
              <input type="text" />
              <RegularButton label="BUSCAR" />
            </div>
          </div>
        </header>

        <main>
          <Menu visible={showMenu} onClickCloseButton={() => setShowMenu(false)} />
          <Separator />
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Sidebar />
                  <Home />
                </MainLayout>
              }
            />
            {categories.map((category) => (
              <Route
                key={category.id}
                path={`/${category.path}`}
                element={
                  <MainLayout>
                    <Sidebar />
                    <ItemsList />
                  </MainLayout>
                }
              />
            ))}
          </Routes>
        </main>

        <footer>
          <p>Teste avaliativo para vaga - WEBJUMP</p>
          <p>
            Desenvolvido por{" "}
            <a href="https://github.com/alicelopes47" target="_blank">
              Alice Lopes da Silva
            </a>
          </p>
          <p>
            <a href="mailto:lopesalice4745@gmail.com">lopesalice4745@gmail.com</a>
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
