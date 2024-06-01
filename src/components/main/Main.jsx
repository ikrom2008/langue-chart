import React from 'react'
import './Main.css'
function Main({product}) {
    let {price} = product
    let prs = product?.products?.map((item) => (
        <li className='list' key={item.id}>
            <div>
            <img src={item.images[0]} alt="" />
            </div>
            <h4>{item.title}</h4>
            <span className='oylikspan'>{item.price / 4 + ' ' + 'sum/month'}</span>
            <span className='oldprice'>${item.price + 50}</span>
            <p>${item.price}</p>
        </li>
    ))
  return (
    <>
      <main className='main'>
        <section className='productsection'>
        <ul className='lists'>
            {
                prs
            }
        </ul>
        </section>
      </main>
    </>
  )
}

export default Main
