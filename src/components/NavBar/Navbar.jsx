import "./Navbar.css";
import Bag from "../../assets/Bag.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="business-name">SKY BOUTIQUE x COVE</div>
        <div className="shopping-bag">
          <img src={Bag} alt="shopping bag" />
        </div>
      </nav>
      <div className="page-titles-container">
        <h1>BEST SELLERS</h1>
        <h1>CLOTHING</h1>
        <h1>HOME</h1>
        <h1>ACCESSORIES</h1>
      </div>
    </>
  );
};

export default Navbar;
