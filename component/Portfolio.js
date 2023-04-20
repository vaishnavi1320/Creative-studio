import React from 'react'

function Portfolio() {
  return (
    <div>
       <section className="gallery_part section_padding">
       <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner text-center">
                        <div class="breadcrumb_iner_item">
                            <h2>projects</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 offset-lg-2">
                    <div className="section_tittle">
                        <p>recent project</p>
                        <h2>Check latest work</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="portfolio-filter filters">
                        <ul>
                            <li className="active" data-filter="all">All photos</li>
                            <li data-filter="1"> weeding</li>
                            <li data-filter="2">fashion</li>
                            <li data-filter="3">portrait</li>
                            <li data-filter="4">magazine</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="gallery_part_item filtr-container">
                        <a href="portfolio_details.html" className="img-gal filtr-item" data-category="1"
                           style={{ backgroundImage: `url('.assets/img/gallery/gallery_item_1.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="portfolio_details.html" className="img-gal width-1 filtr-item" data-category="2"
                            style={{ backgroundImage: `url('./assets/img/gallery/gallery_item_2.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="portfolio_details.html" className="img-gal width-2 filtr-item" data-category="3"
                            style={{ backgroundImage: `url('./assets/img/gallery/gallery_item_3.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="portfolio_details.html" className="img-gal width-2 filtr-item" data-category="4"
                            style={{ backgroundImage: `url('./assets/img/gallery/gallery_item_4.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="portfolio_details.html" className="img-gal width-1 filtr-item" data-category="1"
                           style={{ backgroundImage: `url('./assets/img/gallery/gallery_item_5.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="portfolio_details.html" className="img-gal filtr-item" data-category="2" style={{ backgroundImage: `url('./assets/img/gallery/gallery_item_6.png')` }}>
                            <div className="single_gallery_item">
                                <div className="single_gallery_item_iner">
                                    <div className="gallery_item_text">
                                        <p>Fashion photography</p>
                                        <h4>Smiling beutiful women</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Portfolio
