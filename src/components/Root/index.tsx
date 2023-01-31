import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <footer>
      Footer
    </footer>
    </>
  )
}
