import BackgroundHeading from "../BackgroundHeading";
import Footer from "../Footer.jsx";
import ItemList from "./ItemList.jsx";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";


const getInitialItems = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : initialItems;
};

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
   
        <Header/>
        <ItemList/>
        <Sidebar/>
      
      </main>

      <Footer />
    </>
  );
}

export default App;