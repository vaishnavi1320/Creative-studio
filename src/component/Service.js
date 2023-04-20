import React from 'react'

function Service() {
  return (
    <div>
      <section className="our_service padding_bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section_tittle">
                        <p>our service</p>
                        <h2>what we offer</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center filtr-container">
                <div className="col-lg-4 col-md-6">
                    <div className="single_offer_text text-center wedding">
                        <span className="flaticon-love-and-romance"></span>
                        <h4>wedding photography</h4>
                        <p>World the end of summer the sweltering heat makes human
                            sweat in the night and man plants and trees wilt even</p>
                        <a href="#!" className="btn_1">read more</a>
                    </div>
                    <div className="single_offer_img d-none d-md-block">
                        <img src="assets/img/single_offer_img_2.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="single_offer_img d-none d-md-block">
                        <img src="assets/img/single_offer_img_1.png" alt=""/>
                    </div>
                    <div className="single_offer_text text-center nature">
                        <span className="flaticon-leaf"></span>
                        <h4>Nature photography</h4>
                        <p>that the monsoon clouds are soon coming, there is a
                            strange silence in the ears, the sky gets darker and
                            darker, the flash of lightning illuminates the dark
                            skies all time needs band the sound of thunder fills the heart with fear.</p>
                        <a href="#!" className="btn_1">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="pricing_part section_padding home_page_pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section_tittle">
                        <p>Price table</p>
                        <h2>pricing plan</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_pricing_part">
                        <div className="pricing_tittle">
                            <img src="assets/img/icon/feature_icon_1.svg" alt=""/>
                            <p>Standard</p>
                        </div>
                        <div className="pricing_content">
                            <h3>$50.00 <span>/ mo</span></h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domain</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a href="#!" className="btn_2">book Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_pricing_part">
                        <div className="pricing_tittle">
                            <img src="assets/img/icon/feature_icon_2.svg" alt=""/>
                            <p>Standard</p>
                        </div>
                        <div className="pricing_content">
                            <h3>$50.00 <span>/ mo</span></h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domain</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a href="#!" className="btn_2">book Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_pricing_part">
                        <div className="pricing_tittle">
                            <img src="assets/img/icon/feature_icon_3.svg" alt=""/>
                            <p>Standard</p>
                        </div>
                        <div className="pricing_content">
                            <h3>$50.00 <span>/ mo</span></h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                                <li>Sale After Service</li>
                                <li>3 Host Domain</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a href="#!" className="btn_2">book Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    </div>
  )
}

export default Service
