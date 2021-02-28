import '../assets/css/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'



function NavBar() {
    
    return ( 
      <div className='NavBar'>
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <h1>Northeast Christian Church</h1>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <ul className="nav navbar-nav navbar-right">
                <li className='listElement'><a href="/">Home</a></li>
                <li className='listElement'><a href="/AboutUs">About Us</a></li>
                <li className='listElement'><a href="/Services">Services</a></li>
                <li className='listElement'><a href="/News">News</a></li>
                <li className='listElement'><a href="/Photos">Photos</a></li>
                <li className='listElement'><a href="/HowToFindUs">How To Find Us</a></li>
                <li className='listElement'><a href="/SundayServiceStream">Sunday Service Stream</a></li>
                </ul>
            </div>
            </div>
        </div>
      </div>

    );
    
  }


export default NavBar;