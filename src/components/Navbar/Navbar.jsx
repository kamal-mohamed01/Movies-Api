import { Link } from "react-router-dom";
import img from "../../assets/imgs/th (1).jpeg"
export default function Navbar() {
    return <>
    
    <nav className="navbar bg-light fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to=""><img width={40} src={img} alt="Movie Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contacts">Contacts</Link>
        </li>



      </ul>

    </div>
  </div>
</nav>
    
    </>
}

