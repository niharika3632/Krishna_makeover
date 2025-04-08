import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSideBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // x.com/>a=I&b=2

  const [filter, setFilters] = useState({
    category: [],
    minPrice: 0,
    maxPrice: 2000
  })

  const [priceRange, setPriceRange] = useState([0, 100])

  const navigate = useNavigate()

  const categories = ["Basic", "Facials", "Wax", "Hair cutting", "Spa"]

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])

    setFilters({
      category: params.category ? params.size.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 2000,

    })

    setPriceRange([0, params.maxPrice || 1000])
  }, [searchParams])

  const handleFilterChange = (e) => {
    const {
      name, value, checked, type
    } = e.target;
    // console.log({name, value, checked, type})
    let newFilters = { ...filter }

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value)
      }
    } else {
      newFilters(newFilters)
    }
    // console.log(newFilters)

    setFilters(newFilters)
    updateURLParams(newFilters)
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParam();
    // {category : "", ""}

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","))
      } else if (newFilters[key]) {
          params.append(key, newFilters[key])
      }
    })

    setSearchParams(params)
    navigate(`?${params.toString()}`)
    // ?category=p1+p2
  }

  return (
    <div className='p-4'
    >
      {/* category filter */}
      <div className={`mb-6`}>
        <label className={`block text-gray-600 font-medium mb-2`}>
          Category
        </label>
        {categories.map((category) => (
          <div key={category} className={`flex items-center mb=1`}>

            <input
              type='checkbox'
              name='category'
              value={category}
              onChange={handleFilterChange}
              checked={filter.category === category}
              className={`mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300`}

            />
            <span
              className={`text-gray-700`}
            >{category}
            </span>
          </div>

        ))}
      </div>


      {/* price range filter */}
      <div className={`mb-8`}>
        <label className={`block text-gray-600 font-medium mb-2`}>Price Range</label>
      </div>
      <input type="range" name='priceRange'
        min={0} max={100} className={`w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer`} />
      <div className={`flex justify-between text-gray-600 mt-2`}>
        <span>Rs.0</span>
        <span>Rs.{priceRange[1]}</span>
      </div>
    </div>
  )
}

export default FilterSideBar