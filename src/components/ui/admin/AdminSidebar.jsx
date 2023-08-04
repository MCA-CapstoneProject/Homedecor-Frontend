import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <>
      <nav className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center  h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img className="object-fill w-[13rem]"
                  src="assets/logo.png" alt="website-logo" />
              </div>
              {/* Pages */}
              <div className='flex gap-x-10'>
                <div className="flex gap-x-6">
                  <Link key="1" to="/admin-dashboard"
                    className={` font-thin text-black hover:text-gray-500 
                  hover:font-semibold  py-2 uppercase`}       >
                    <div className="">
                    </div>
                    Dashboard
                  </Link>
                  <Link key="2" to="/admin-dashboard/sellers"
                    className={`font-thin text-black hover:text-gray-500 
                  hover:font-semibold  py-2 uppercase`}>
                    Sellers
                  </Link>

                  <Link key="" to="/admin-dashboard/customers"
                    className={`font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}>
                    Customers
                  </Link>
                  <Link key="" to="/admin-dashboard/products"
                    className={`font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}>
                    Products
                  </Link>
                  <Link key="" to="/admin-dashboard/orders"
                    className={`font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}>
                    Orders
                  </Link>
                  <Link key=""
                    className={` font-thin text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminSidebar