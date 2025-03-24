import logo from "../Assest/ubtinxt.png"
import "../styles/Index.css"

const Navbar= () => {
    return(
      <div>
 <div className="navcolor">
<nav  class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a id="logo-name" class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="170" height="40" class="d-inline-block align-text-top"/>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#servicecontainers">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/usecase">Products</a>  
                </li>
                <li class="nav-item">
                    <a class="nav-link" >About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signup">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
</div>

    ) 
}


export default Navbar;