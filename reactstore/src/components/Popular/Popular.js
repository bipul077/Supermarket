import React from 'react'
import "./Popular.css"

export default function Popular() {
  return (
    <div>
      <section class="section-products">
		<div class="container">
				<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
								<div class="header">
										<h3>Featured Product</h3>
										<h2>Popular Products</h2>
								</div>
						</div>
				</div>
				<div class="row">
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1">
											<img src="static/images/chocos.png"/>
												<ul>
														<li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Chocos</h3>
												<h4 class="product-old-price">Rs 250</h4>
												<h4 class="product-price">Rs 200</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-2" class="single-product">
										<div class="part-1">
										<img src="static/images/cheese.png"/>
												<span class="discount">15% off</span>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Kurkure</h3>
												<h4 class="product-price">Rs 60</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-3" class="single-product">
										<div class="part-1">
										<img src="static/images/lays.jpg"/>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Lays</h3>
												<h4 class="product-old-price">Rs 120</h4>
												<h4 class="product-price">Rs 60</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-4" class="single-product">
										<div class="part-1">
										<img src="static/images/milk.png"/>
												<span class="new">new</span>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Amul Milk</h3>
												<h4 class="product-price">Rs 220</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1">
										<img src="static/images/cornflakes.webp"/>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Cornflakes</h3>
												<h4 class="product-old-price">Rs 240</h4>
												<h4 class="product-price">Rs 210</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-2" class="single-product">
										<div class="part-1">
										<img src="static/images/chocos.png"/>
												<span class="discount">15% off</span>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Chocos</h3>
												<h4 class="product-price">Rs 200</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-3" class="single-product">
										<div class="part-1">
										<img src="static/images/prime.png"/>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Prime Hydration</h3>
												<h4 class="product-old-price">Rs 250</h4>
												<h4 class="product-price">Rs 230</h4>
										</div>
								</div>
						</div>
						{/* <!-- Single Product --> */}
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-4" class="single-product">
										<div class="part-1">
										<img src="static/images/chocos.png"/>
												<span class="new">new</span>
												<ul>
                                                <li><a href="#"><i class="ri-shopping-cart-2-line"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Chocos</h3>
												<h4 class="product-price">Rs 120</h4>
										</div>
								</div>
						</div>
				</div>
		</div>
</section>
    </div>
  )
}
