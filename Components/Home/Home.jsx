import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import productlist from '../Product/productlist.js'
import Cart from '../Cart/Cart.jsx'
import MobileNav from '../MobileNav/MobileNav.jsx'

const Home = () => {
  // total calculation
  const [cart, setcart] = useState([])
  const [activepanel, setactivepanel] = useState(null)
  const [activebtn, setactivebtn] = useState('All')
  const [searchterm, setsearchterm] = useState('')
  const [isscrolled, setisscrolled] = useState('')
  const [mobileactive, setmobileactive] = useState(false)
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shiping = cart.reduce((acc, item) => acc + item.quantity * 2, 0)
  const total = subtotal + shiping
  const cartquantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const categories = [
    "All",
    "Hot Coffee",
    "Special Coffee",
    "Flavoured Coffee",
    "Cold Coffee",
    "Premium Coffee",
    "Seasonal Coffee"
  ];
  const addtocart = (product) => {
    const alreadyexist = cart.find(item => item.id === product.id);
    if (alreadyexist) {
      alert("Product already Exist")
      return;
    }
    setcart([...cart, { ...product, quantity: 1 }])
  }
  const removecartitem = (product) => {
    setcart(cart.filter(item => item.id !== product.id))
  }

  const incrementquantity = (product) => {

    setcart(cart.map(item => item.id == product.id ?
      { ...item, quantity: item.quantity + 1 } : item
    ))

  }

  const decrementquantity = (product) => {

    setcart(cart.map(item =>
      item.id == product.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item
    ))

  }


  let handlesearch = () => {
    let product = document.getElementById('product')

    if (product) {
      product.scrollIntoView({ behavior: 'smooth' })
    }

  }

  useEffect(() => {
    let handlescroll = () => {
      setisscrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handlescroll)

  })

  return (
    <>
      <Navbar
        cart={cart}
        isscrolled={isscrolled}
        setactivepanel={setactivepanel}
        handlesearch={handlesearch}
        setsearchterm={setsearchterm}
        setmobileactive={setmobileactive}
        mobileactive={mobileactive}
        cartquantity={cartquantity}
      />

      <MobileNav

        setmobileactive={setmobileactive}
        mobileactive={mobileactive}
      />
      <Banner />
      <Product

        searchterm={searchterm}
        categories={categories}
        activebtn={activebtn}
        setactivebtn={setactivebtn}
        productlist={productlist}
        addtocart={addtocart}
      />
      <Cart
        cart={cart}
        removecartitem={removecartitem}
        setcart={setcart}
        activepanel={activepanel}
        setactivepanel={setactivepanel}
        subtotal={subtotal}
        shiping={shiping}
        total={total}
        incrementquantity={incrementquantity}
        decrementquantity={decrementquantity}
      />

    </>
  )
}

export default Home
