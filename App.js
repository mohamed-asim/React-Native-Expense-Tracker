// Import Redux
import { MainContainer } from "./MainContainer.";
import { Provider } from "react-redux";
import storeConfig from "./store/configureStore";

const store = storeConfig();

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
