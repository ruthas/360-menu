import React from 'react'

const RestaurantContext = React.createContext()

export default RestaurantContext

//   const fetchData = url => {
//     fetch(url)
//       .then(res => res.json())
//       .then(res => setCategory(res.results))
//   }

//   useEffect(() => {
//     fetchData(
//       'https://project-indie-api.netlify.app/.netlify/functions/categories'
//     )
//   }, [])
