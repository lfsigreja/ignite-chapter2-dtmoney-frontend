import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header/index"

import { GlobalStyle } from "./global"

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
