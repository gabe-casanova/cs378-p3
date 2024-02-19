import "./App.css";

// import components
import MenuItem from "./components/MenuItem";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import CheckoutBar from "./components/CheckoutBar";

// import menu data
import menuInfo from "./data/MenuInfo";

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Subheader />
      <div className="menu-container">
        {menuInfo.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <CheckoutBar />
    </div>
  );
}

export default App;
