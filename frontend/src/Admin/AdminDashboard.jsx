// import React, { useState } from 'react';
// import UploadProduct from './UploadProduct';
// import UpdateProduct from './UpdateProduct';
// import DeleteProduct from './DeleteProduct';



// function AdminDashboard() {
//   const [view, setView] = useState('default');

//   const handleAddProduct = () => {
//     setView('add');
//   };

//   const handleUpdateProduct = () => {
//     setView('update');
//   };

//   const handleDeleteProduct = () => {
//     setView('delete');
//   };

//   return (
//     <div className="flex h-screen bg-gray-200">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-white w-64 flex flex-col justify-between">
//         <div className="p-4">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <nav className="mt-6 bg-orange-300 text-black rounded-md">
//             <li onClick={handleAddProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Add Product</li>
//             <li onClick={handleUpdateProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer ">Update Any Product</li>
//             <li onClick={handleDeleteProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Delete Product</li>
//           </nav>
//         </div>
//         <div className="p-4 text-center">
//           <p>Logged in as Admin</p>
//           <button className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white">Logout</button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {view === 'add' && <UploadProduct />}
//         {view === 'update' && <UpdateProduct />}
//         {view === 'delete' && <DeleteProduct />}



//         {/* Conditionally render "Hello Admin!" when main content is blank */}
//         {view !== 'add' && view !== 'update' && view !== 'delete' && (
//           <div className="flex justify-center h-full mt-24">
//             <h1 className="text-8xl font-bold text-gray-800 ">Hello Admin!</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;
import React, { useState } from 'react';
import UploadProduct from './UploadProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import ProductCharts from '../Admin/Graphs/ProductCharts'; // Import the charts component

function AdminDashboard() {
  const [view, setView] = useState('default');

  const handleAddProduct = () => {
    setView('add');
  };

  const handleUpdateProduct = () => {
    setView('update');
  };

  const handleDeleteProduct = () => {
    setView('delete');
  };

  const handleGraphs = () => {
    setView('graphs');
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col justify-between min-h-screen">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <nav className="mt-6 bg-green-300 text-black rounded-md">
            <li onClick={handleGraphs} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Graphs</li>

          </nav>
          <nav className="mt-6 bg-orange-300 text-black rounded-md">
            <li onClick={handleAddProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Add Product</li>
            <li onClick={handleUpdateProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Update Any Product</li>
            <li onClick={handleDeleteProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md cursor-pointer">Delete Product</li>
          </nav>

        </div>
        {/* <div className="p-4 text-center">
          <p>Logged in as Admin</p>
          <button className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white">Logout</button>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {view === 'add' && <UploadProduct />}
        {view === 'update' && <UpdateProduct />}
        {view === 'delete' && <DeleteProduct />}

        {/* Conditionally render ProductCharts */}
        {view === 'graphs' && <ProductCharts />}

        {/* Conditionally render "Hello Admin!" when main content is blank */}
        {view !== 'add' && view !== 'update' && view !== 'delete' && view !== 'graphs' && (
          <div className="flex justify-center h-full mt-24">
            <h1 className="text-8xl font-bold text-gray-800">Hello Admin!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

