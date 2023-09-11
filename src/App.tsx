import { MainContainer } from "./Containers/Main/Main";
import { AppContextProvider } from "./Context/Provider";

const App = () => {
  return (
    <AppContextProvider>
      <MainContainer />
    </AppContextProvider>
  );
};

export default App;
