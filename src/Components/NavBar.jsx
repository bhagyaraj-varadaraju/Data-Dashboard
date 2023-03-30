import '../App.css'

function NavBar() {

  return (
    <div className="NavBar">
        <div className="Header">
            <img className="Logo" alt="crescent moon logo" src="https://img.icons8.com/fluency/344/full-moon.png" />
            <h2 >AstroDash</h2>
        </div>
        <div className="Menu">
            <ul>
                <li className="Menu-item"><a className="menu-link" href="/">🏠  Dashboard</a></li>
                <li className="Menu-item"><a className="menu-link" href="/">🔍  Search</a></li>
                <li className="Menu-item"><a className="menu-link" href="/">ℹ️ About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
