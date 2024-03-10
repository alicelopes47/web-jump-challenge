import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./slices/categoriesSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "./Store";
import Logo from './assets/logo.png'
import { IconButton } from "./Components/IconButton";
import { TfiMenu } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const responseStatus = useSelector((state: RootState) => state.categoriesSlice.responseStatus);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div className="account-action-container">
          <p><a href="">Acesse sua Conta</a> ou <a href="">Cadastre-se</a></p>
        </div>
        <div className="logo-container">
          <IconButton>
            <TfiMenu />
          </IconButton>
          <img src={Logo} alt="Logo" />
          <IconButton>
            <IoIosSearch color="#CB0D1F" />
          </IconButton>
        </div>
      </header>
      {responseStatus.loading && <div>Loading...</div>}
    </div>
  );
}

export default App;
