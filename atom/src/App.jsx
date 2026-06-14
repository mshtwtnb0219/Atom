import { RecoilRoot } from "recoil";
import { UserProvider } from "./provider/UserProvider";
import { Router } from "./router/Router";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
