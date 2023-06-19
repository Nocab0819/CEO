function NavbarUp(){
  return(
    <nav class="navbar background-blue navbar-expand-lg navbar-dark bg-dar" style={{position: 'fixed', top: 0, width: '100%',zIndex: 9999 }}>
      <a className="navbar-brand" href="index.html"><img className="logo-pic" src="img/CEOlogo.png" alt="LOGO"/>&ensp;&ensp;&ensp;CEO首席教育</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">首頁 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="aboutus.html">關於我們</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">線下資源</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              課程清單
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="unitlist.html">總覽</a>
              <a class="dropdown-item" href="unit1.html">UNIT 1</a>
              <a class="dropdown-item" href="unit2.html">UNIT 2</a>
              <a class="dropdown-item" href="unit3.html">UNIT 3</a>
              <a class="dropdown-item" href="unit4.html">UNIT 4</a>
              <a class="dropdown-item" href="unit5.html">UNIT 5</a>
              <a class="dropdown-item" href="unit6.html">UNIT 6</a>
              <a class="dropdown-item" href="unit7.html">UNIT 7</a>
              <a class="dropdown-item" href="unit8.html">UNIT 8</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜尋</button>
        </form>
      </div>
    </nav>
  );
}
