export default function Header() {
    return (<div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <div className="header_nav">
          <a className="navbar-brand brand_desktop" href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
          <div className="main_nav">
            <div className="top_nav">
              <ul className=" ">
                <li className="">
                  <a className="" href="">
                    <img src="images/telephone.png" alt="" />
                    <span> +01 1234567890</span>
                  </a>
                </li>
                <li className="">
                  <a className="" href="">
                    <img src="images/mail.png" alt="" />
                    <span>demo@gmail.com</span>
                  </a>
                </li>
                <li className="">
                  <a className="" href="">
                    <img src="images/location.png" alt="" />
                    <span>Den mark Loram ipusum</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom_nav">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand brand_mobile" href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          {" "}
                          About{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="class.html">
                          {" "}
                          Classes{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                    </ul>
                    <form className="form-inline">
                      <button
                        className="btn ml-3 ml-lg-5 nav_search-btn"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className=" slider_section position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <div className="slider_heading">
              <h2>
                Bo <span>xer</span>
              </h2>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                >
                  01
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                  02
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                  03
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="box">
                    <div className="detail-box">
                      <h1>
                        Boxing <br />
                        Center
                      </h1>
                      <hr />
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="detail-box">
                      <h1>
                        Boxing <br />
                        Center
                      </h1>
                      <hr />
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="box">
                    <div className="detail-box">
                      <h1>
                        Boxing <br />
                        Center
                      </h1>
                      <hr />
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
  </div>)
}