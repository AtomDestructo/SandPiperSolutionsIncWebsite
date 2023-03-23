
import { Link } from "react-router-dom";


export default function Navbar(){
        return (
<header>                    
    <nav class="navbar navbar-expand-md bg-primary ">
        <div class="container-fluid bg20">

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false"  
                aria-label="Toggle navigation" data-target="#main-nav" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">

                <a class="navbar-brand" href="url" >
                    <img class="img-thumbnail logomain1" src="/media/logoMain.svg" width="150vh" height="150vh" alt="Main logo " />
                </a>
                    <li style={{listStyleType: "none"}}><a href="url" class="nav-item nav-link link-dark fs-4 ps-2"><Link to="/">Home</Link></a></li>
                    <li style={{listStyleType: "none"}}><a href="url" class="nav-item nav-link link-dark fs-4 ps-2"><Link to="/investors">Investor Relations</Link></a></li>
                    <li style={{listStyleType: "none"}}><a href="url" class="nav-item nav-link link-dark fs-4 ps-2"><Link to="/subsidiaries">Subsidiaries</Link></a></li>
                    <li style={{listStyleType: "none"}}><a href="url" class="nav-item nav-link link-dark fs-4 ps-2"><Link to="/OurTeam">Our Team</Link></a></li>
            </div>     
            </div>
	</nav>
</header>
    );
}
