import React from 'react'

function NewArrivals() {
  return (
    <div className="p-4 mt-8 flex justify-center  items-center shadow-sm" style={{height:'50vh'}}>
    <div className="w-11/12 lg:w-9/12">
      <p className="text-xl md:text-2xl font-semibold mb-6">New Arrival - BonaCibo & Lamito!</p>
      {/* Enable horizontal scrolling */}
      <div className="flex overflow-x-auto space-x-6 md:space-x-16 py-3">
        {/* Card Component */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-44 md:w-64 h-72 md:h-80 flex-none flex flex-col"> {/* Use flex-none to prevent size change */}
            <div className="rounded-t-lg overflow-hidden flex-grow">
              <img
                src="/export-management-companies.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="my-4 text-center">Lorem ipsum</p>
            <button className="bg-black text-white w-full font-semibold text-lg rounded-b-lg h-12">
              ENQUIRE
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default NewArrivals
