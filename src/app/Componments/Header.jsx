import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { FaShuttleVan } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { TbBrandAdobePremier } from "react-icons/tb";
import { GiLoincloth } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import Link from 'next/link';



function Header() {
    return (
        <>
            <section className='py-1 '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h6>Contact:9860086222</h6>
                        </div>
                        <div className="col-lg-6 text-end">
                            <h6><FaShopify /> Shop | <FaShuttleVan /> Treck

                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <img className='w' src="https://www.kinaun.com/wp-content/uploads/assets/kinaun_site_logo.png" alt="" />
                        </div>
                        <div className="col-lg-7 d-flex gap-4">
                         <div class="dropdown ">
                        <span> <h4> <IoReorderThreeSharp /></h4></span>
                        <div class="dropdown-content e">
                          <li>PRODUCTS</li>
                          <li>DAILY NEED</li>
                          <li>BEST SHOPPING</li>
                        </div>
                       </div>
                           <form className="d-flex w-100" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit"> <IoSearch /></button>
                            </form>
                        </div>
                        <div className="col-lg-3 d-flex gap-4">
                            <h4><FaArrowRightArrowLeft /></h4>   <h4><FaRegHeart /></h4><h4> <IoPersonSharp /></h4> <h4><FaCartShopping /></h4>
                        </div>                    </div>
                </div>
            </section>
            <section className='py-2 bg'>
                <div className="container d-flex gap-5 f">
                    <div class="dropdown ">
                        <span><FaHome /> Home</span>
                        <div class="dropdown-content e">
                          <li>Contact Us</li>
                          <li>Our product</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><IoStar /> Summer Special</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><FaGift /> Special offer</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><IoPricetag /> On sale</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><FaShoppingBag /> Shop</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><FaFlag /> Made in Nepal</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><TbBrandAdobePremier /> Brands</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><GiLoincloth /> Categories</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                       <div class="dropdown1">
                        <span><FaStore /> Stores</span>
                        <div class="dropdown-content1 e">
                          <li>Products</li>
                          <li>Customer</li>
                          <li>Shop Now</li>
                        </div>
                       </div>
                </div>
            </section>
            {/* hllo */}
            {/* hello */}
        </>
    )
}

export default Header
