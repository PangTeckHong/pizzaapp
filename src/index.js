import './style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Teck Hong's Pizza</h1>
      <p>Authentic Italian Cuisine, all from our stone oven </p>
    </header>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour <= 22;

  return (
    <footer>
      {isOpen ? <Order /> : <p>"We 're currently clossed"</p>}
    </footer>
  );
}

function Order() {
  return (
    <>
      <p>We're currently open</p>
      <button>Order</button>
    </>
  );
}

function Menu() {
  return (
    <div className='menubox'>
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.name} {...pizza}/>
      ))}
    </div>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} className="pizza-image" />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>${price.toFixed(2)}</p>
      {soldOut && <p className="sold-out">Sold Out</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
