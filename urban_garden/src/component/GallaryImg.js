import React from 'react'
import Img from './Img'


export default function GallaryImg() {
    return (
        <div>
            <Img />

            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/gallary images/gallery-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Landscape Design</h5>
                            <p className="card-text">This is a wider card with
                             supporting text below as a natural lead-in to additional 
                             content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="../assets/gallary images/gallery-2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Planting and Removal</h5>
                            <p className="card-text">This card has supporting 
                            text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/gallary images/gallery-3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Garden Care</h5>
                            <p className="card-text">This is a wider card
                             with supporting text below as a natural lead-in 
                             to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/gallary images/gallery-4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Planting and Removal</h5>
                            <p className="card-text">Dolor sit amet dolor
                             gravida placerat liberolorem ipsum dolor consectetur
                              adipiscing elit, sed do eiusmod..</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/gallary images/gallery-5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Planting and Removal</h5>
                            <p className="card-text">Dolor sit amet dolor gravida placerat
                             liberolorem ipsum dolor consectetur 
                             adipiscing elit, sed do eiusmod..</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>




                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/gallary images/gallery-6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Planting and Removal</h5>
                            <p className="card-text">Dolor sit amet dolor 
                            gravida placerat liberolorem 
                            ipsum dolor consectetur adipiscing elit, sed do eiusmod..</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div>
            </div>


            

        </div>
    )
}
