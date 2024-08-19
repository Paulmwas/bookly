import './Header.css'
const Header = () => {
  return (
    <div className='header'>
    <header>
      <h1 className="logo">Bookly</h1>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Featured</a></li>
        <li><a href="">Arrivals</a></li>
        <li><a href="">Reviews</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </header>
    <hr />
    </div>
  )
}

export default Header
