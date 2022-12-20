import React from 'react'
import "./Products.css"
export default function Products() {
  return (
    <>
      <div className="container prod">
        <div className="row">
       <div className="Photos">
            <div className="gallery">
                <img src="static/images/chocos.png"/>
                <div className="des">Chocos<br/><span>Rs 200</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/kurkure.png"/>
                <div className="des">Kurkure<br/><span>Rs 60</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/lays.jpg"/>
                <div className="des">Lays<br/><span>Rs 60</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/cheese.png"/>
                <div className="des">Cheese<br/><span>Rs 200</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/milk.png"/>
                <div className="des">Milk<br/><span>Rs 200</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/prime.png"/>
                <div className="des">Prime Hydration<br/><span>Rs 399</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/prime.png"/>
                <div className="des">Prime Hydration<br/><span>Rs 399</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/prime.png"/>
                <div className="des">Prime Hydration<br/><span>Rs 399</span></div>
            </div>
        </div>
        <div className="Photos">
            <div className="gallery">
                <img src="static/images/prime.png"/>
                <div className="des">Prime Hydration<br/><span>Rs 399</span></div>
            </div>
        </div>
        </div>
        </div>
        <div className="loadmore text-center mb-2">
            <button className="btn btn-danger">Load More</button>
        </div>
        </>
  )
}
