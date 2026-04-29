import React from 'react'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'

const Home = () => {
  return (
    <div>
      {/* Yahan aap apna Hero Section (Banner) bhi daal sakte hain */}
      <div className="hero bg-base-200 p-10 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-orange-500">Delicious Food</h1>
            <p className="py-6">Order your favorite food from the best restaurants nearby.</p>
            <button className="btn btn-primary bg-orange-500 border-none">View Menu</button>
          </div>
        </div>
      </div>
      
      {/* Food items display karne ke liye */}
      <FoodDisplay />
    </div>
  )
}

export default Home