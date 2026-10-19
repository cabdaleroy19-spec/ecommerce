import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../shopContext.jsx";
const Header = () => {
  const Context = useContext(ShopContext);
  console.log(Context);
  const products= useContext(ShopContext)
  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-white/60 backdrop-blur-md shadow z-10">
      <div className="max-w-4xl mx-auto h-full flex justify-between items-center px-4">


        <Link to="/" className="text-xl font-semibold text-gray-700">
          logo
      </Link>

        <nav>
          <ul className="flex flex-row items-center space-x-8 text-gray-700">
           <Link to="/"className="hover:text-pink-600" >Home</Link>
           <Link to="/Products"className="hover:text-pink-600" >Products</Link>
            <li><Link to="/contact" className="hover:text-blue-600" >Contact</Link></li>
            <li><Link  to="/about" className="hover:text-pink-900">About</Link></li>
                <li> <Link to="/Cart" className="hover:text-pink-900"  > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 
  0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

<span className="absolute top-5 right-50 bg-pink-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
  {Context.products.length}
</span>
</Link>

</li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;