import React, { useState, useEffect } from 'react'
import '../styles/global.css'
import ResturantContext from '../context/Restaurant'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Products from '../components/Products'
import ProductDetails from '../components/ProductDetails'
import Orders from '../components/Orders'

export default function Home() {
  const [categories, setCategories] = useState([
    {
      id: 'recEG6YAEjBY5aQaM',
      name: 'Drink',
      icon: 'DRINK',
      Products: ['testing'],
    },
    {
      id: 'recAmbOTVvhVmy9OQ',
      name: 'Starter',
      icon: 'STARTER',
    },
  ])
  const [activeCategory, setActiveCategory] = useState({})

  // TODO: set up useEffect and fetch categories
  useEffect(() => {
    fetch('https://project-indie-api.netlify.app/.netlify/functions/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories)
        setActiveCategory(
          data.categories.filter(category => category.Products)[3]
        )
      })
  }, [setCategories])

  const [products, setProducts] = useState([])
  const [activeProduct, setActiveProduct] = useState({})

  useEffect(() => {
    fetch('https://project-indie-api.netlify.app/.netlify/functions/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [setProducts])


  const [orders, setOrders] = useState([])
  const addToOrders = product => setOrders([...orders, product])

  const removeOrderAtIndex = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }
  

  return (
    <ResturantContext.Provider
      value={{
        categories,
        setCategories,
        activeCategory,
        setActiveCategory,
        products,
        setProducts,
        activeProduct,
        setActiveProduct,
        orders,
        addToOrders,
        removeOrderAtIndex,
      }}
    >
      {/* <pre>{JSON.stringify(activeCategory, null, 2)}</pre> */}
      <Layout>
        <Navigation />
        <Products />
        <Orders />
        <ProductDetails />
      </Layout>
    </ResturantContext.Provider>
  )
}
