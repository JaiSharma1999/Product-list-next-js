import React, { useState } from 'react'
import Image from 'next/image.js'
import data from "../pages/data.js"
import { AiFillBell } from 'react-icons/Ai';
import { BiMenuAltLeft } from 'react-icons/Bi';
const Search = () => {
  const [filter, setFilter] = useState("")
  const search = (e) => {
    setFilter(e.target.value)
  }
  let datasearch = data.cardData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })
  return (
    <section className=' container'>

      <div className='row justify-content-center'>
        <div className='col-12 mb-5 border-2 bg-white'>
          <div className='row'>


            <div className='col-sm-2 pt-2 '>
              <Image src="/white.svg" alt=' ' width={100} height={50} />
            </div>
            <div className='mb-3 col-sm-4 pt-2'>
              <lable className="form-lable me-2 fs-3">Search</lable>
              <input type='text' placeholder='search...' className='control-form border-2 px-1' value={filter} onChange={search} />
              
            </div>
           
            <div className='col-sm-4 d-flex justify-content-evenly pt-2 '>
              <div className='fs-4'><BiMenuAltLeft /></div>
              <div className='fs-4'>Categories</div>
              <div className='fs-4'><AiFillBell /></div>
              <div><Image src="/img5.png" alt='' width={50} height={50} className='pb-2' /></div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 d-flex justify-between pb-4 '>
          <div className='cursor-pointer'>Home / Home decoration / Artificial</div>
          <div>
            <div className="dropdown">
              <button className=" btn btn-light  dropdown-toggle px-10" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">T-shirt</a></li>
                <li><a className="dropdown-item" href="#">Jacket</a></li>
                <li><a className="dropdown-item" href="#">Coffee</a></li>
                <li><a className="dropdown-item" href="#">Pizza</a></li>
                
              </ul>
            </div>


          </div>
        </div>


        {datasearch.map((item, index) => {
          return (
            <>


              <div className='col-6 col-md-2 col-lg-3' key={index}>
                <div className='card p-0 overflow-hidden h-75 shadow'>
                  <Image src={item.img}  alt="" className='card-img-top h-50' />
                  <div className='card-body'>
                    <h2 className='card-title fs-4 font-bold'>{item.title}</h2>
                    <p className='card-text  text-warning font-bold'>{item.desc}</p>
                    <p>High quality, reliable, efficient, cost-effective, innovative, user-friendly, durable, sustainable, convenient, and versatile.</p>
                  </div>

                </div>
              </div>
            </>
          )
        })}

      </div>
    </section>
  )
}

export default Search
