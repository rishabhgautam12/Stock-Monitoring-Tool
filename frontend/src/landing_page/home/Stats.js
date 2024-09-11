import React from 'react';

function Stats() {
    return ( 
        <div className='continer p-3'>
            <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust with 3.5+ lakh crores worth of equity investments.</p>
                <h2 className='fs-4'>No spam or gimicks</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust with 3.5+ lakh crores worth of equity investments.</p>
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust with 3.5+ lakh crores worth of equity investments.</p>
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust with 3.5+ lakh crores worth of equity investments.</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
                <div className='text-center'>
                <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='' style={{textDecoration: "none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Stats;