import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthContext } from "./context/AuthContext";
import PublicRouter from "./router/PublicRouter";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {user.isLogged ? <AppRouter /> : <PublicRouter />}
    </BrowserRouter>
  );
}

export default App;
