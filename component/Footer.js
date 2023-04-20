import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="footer-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="single-footer-widget">
                        <h4>Our Service</h4>
                        <ul>
                            <li><a href="#!">Car accident</a></li>
                            <li><a href="#!">Personal injury</a></li>
                            <li><a href="#!">Family law</a></li>
                            <li><a href="#!">Bank and financial</a></li>
                            <li><a href="#!">Capital market</a></li>
                            <li><a href="#!">Employment Law</a></li>
                        </ul>

                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="single-footer-widget footer_icon">
                        <h4>Contact Info</h4>
                        <p>4361 Morningview Lane Artland , Pall Street
                            Latimer, IA 50452 / 23654</p>
                        <ul>
                            <li><a href="#!"><i className="ti-mobile"></i>+02 - 32 365 2654</a></li>
                            <li><a href="#!"><i className="ti-email"></i>ariclaw@law.com</a></li>
                            <li><a href="#!"><i className="ti-world"></i> ariclawyerfirm.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="single-footer-widget footer_3">
                        <h4>Instagram</h4>
                        <div className="footer_img">
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_1.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_2.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_3.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_4.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_5.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                            <div className="single_footer_img">
                                <img src="assets/img/footer_img/footer_img_6.png" alt=""/>
                                <i className="ti-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="single-footer-widget footer_2">
                        <h4>Newsletter</h4>
                        <p>Stay updated with our latest trends see heaven so said place fruit.
                        </p>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="form-inline">
                               <input className="form-control" name="EMAIL" placeholder="Your Email Address"
       onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Your Email Address '}
       required type="email" />

                                <button className="btn btn-default text-uppercase"><i className="ti-angle-right"></i></button>
                                <div style={{ position: 'absolute', left: '-5000px' }}>
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" defaultValue="" type="text" />



                                </div>

                                <div className="info"></div>
                            </form>
                        </div>
                        <div className="social_icon">
                            <a href="#!"> <i className="ti-facebook"></i> </a>
                            <a href="https://www.twitter.com/"> <i className="ti-twitter-alt"></i> </a>
                            <a href="https://www.instagram.com/"> <i className="ti-instagram"></i> </a>
                            <a href="https://www.skype.com/"> <i className="ti-skype"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="copyright_part_text text-center">
                        <p className="footer-text m-0">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
