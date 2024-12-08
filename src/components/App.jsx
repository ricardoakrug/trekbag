/* eslint-disable react/prop-types */

import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
