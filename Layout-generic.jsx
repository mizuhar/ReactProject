export default function LayoutGeneric(){
    return( <section className="blog_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 ml-auto">
          <div className="heading_container">
            <h2>Latest Blog</h2>
            <p>
              iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis n
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 pl-0">
          <div className="box b1">
            <div className="img-box">
              <img src="images/b1.jpg" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-10 ml-auto">
                <div className="detail-box">
                  <div className="img_date">
                    <h6>
                      17 <br />
                      Feb
                    </h6>
                  </div>
                  <h3>Boxer Joniya Daro</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pr-0">
          <div className="box b2">
            <div className="img-box">
              <img src="images/b2.jpg" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-10 mr-auto">
                <div className="detail-box">
                  <div className="img_date">
                    <h6>
                      17 <br />
                      Jun
                    </h6>
                  </div>
                  <h3>Boxer Joniya Daro</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}