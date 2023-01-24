import "react-native-gesture-handler";
import Stacknavigation from "./src/navigation/Stacknavigation";
import { store } from "./src/redux/Store";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
