import "./Navbar.css";



const Navbar = () => {
  return (
    <div className="nav">
      <div className="div1">
      <a href="/"><img 
          className="imgn"
          src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg"
          alt=""
        /></a>
      </div>
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Topic name, Influencers name"
        />
      </div>
      <div className="div2">
        <a className="a" href="/AllTopics">
          All Topics
  
        </a>
      </div>
      <div className="div3">
        <a className="a" href="/about">
          About
        </a>
      </div>
      <div className="div4">
        <button className="button1">Login</button>
      </div>
    </div>
  );
};
export {Navbar};