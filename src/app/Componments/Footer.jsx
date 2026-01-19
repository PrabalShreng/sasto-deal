import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


function Footer() {
  return (
    <>
      <section className='py-2 bg-info'>
        <div className="container">
            <div className="row">
                <h4>Contact Us</h4>
                <div className="col-lg-4 gap-3 d-flex py-2">
                  <h5> <FaFacebook /></h5> <h5><FaInstagramSquare /></h5> <h5><FaWhatsappSquare /></h5> <h5><CiTwitter /></h5>
                  </div>
                  <div className="col-lg-4">
                    <h4>Thanky For Visiting Us</h4>
                  </div>
                  <div className="col-lg-4">
                    <img className='w2' src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png" alt="" />
                   <img className='w2' src="https://img.lazcdn.com/us/domino/130438e4-2c46-4620-adee-5d6e33b011cb_NP-126-42.png" alt="" />
                   <img className='w2' src="https://img.lazcdn.com/us/domino/b57e9929-aff3-47d4-b5ec-c0954f271088_NP-126-42.png" alt="" />
                  </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
