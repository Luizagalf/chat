import { PageIndex } from "./pages/index";
import Plug from "./components/Plug";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PageIndex />
      <Plug />
    </Provider>
  );
}

export default App;
