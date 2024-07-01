// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const GST_RATE = 0.18;

//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUserId = sessionStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         if (!userId) {
//           console.log('User ID not found. No items to fetch.');
//           return;
//         }
//         const response = await fetch(`http://localhost:3006/api/cart/get-project-to-cart/${userId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch cart items');
//         }
//         const data = await response.json();
//         console.log('Fetched cart items:', data);

//         if (!Array.isArray(data)) {
//           console.error('Fetched data is not an array:', data);
//           return;
//         }

//         if (data.length === 0) {
//           console.log('No items in cart.');
//           setCartItems([]);
//           setTotalAmount(0);
//           return;
//         }

//         const products = await Promise.all(data.map(async item => {
//           const productResponse = await fetch(`http://localhost:3006/api/products/${item.productId}`);
//           if (!productResponse.ok) {
//             throw new Error('Failed to fetch product');
//           }
//           const product = await productResponse.json();
//           return { ...item, product };
//         }));

//         const total = products.reduce((sum, item) => {
//           if (item.product && typeof item.product.discountedPrice === 'number') {
//             return sum + item.product.discountedPrice;
//           } else {
//             console.error('Invalid discountedPrice:', item.product);
//             return sum;
//           }
//         }, 0);

//         console.log('Total amount:', total);
//         setCartItems(products);
//         setTotalAmount(total);
//       } catch (error) {
//         console.error('Error fetching cart items:', error.message);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   const handleRemoveFromCart = async (productId) => {
//     try {
//       const response = await fetch(`http://localhost:3006/api/cart/remove-from-cart/${productId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to remove item from cart');
//       }

//       const updatedCartItems = cartItems.filter(item => item.productId !== productId);
//       setCartItems(updatedCartItems);

//       const updatedTotalAmount = updatedCartItems.reduce((sum, item) => {
//         return sum + item.product.discountedPrice;
//       }, 0);
//       setTotalAmount(updatedTotalAmount);

//     } catch (error) {
//       console.error('Error removing item from cart:', error.message);
//     }
//     window.location.reload();
//   };

//   const gstAmount = totalAmount * GST_RATE;
//   const totalWithGst = totalAmount + gstAmount;

//   const handleCheckout = () => {
//     const orderDetails = {
//       userId,
//       cartItems,
//       totalAmount: totalWithGst
//     };
//     localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
//     navigate('/checkout');
//   };

//   return (
//     <div className="mx-auto px-4 py-8 mb-10 bg-gray-200">
//       <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <div className="text-center text-xl text-gray-700">
//           Your cart is empty.
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row justify-between">
//           <div className="w-full lg:w-2/3 pr-8" style={{ flexBasis: '65%' }}>
//             <div className="grid grid-cols-1 gap-4">
//               {cartItems.map(item => (
//                 <div key={item._id} className="border rounded-md p-4 bg-white">
//                   <ProductDetail product={item.product} />
//                   <button
//                     className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
//                     onClick={() => handleRemoveFromCart(item.productId)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/3 bg-white p-6 rounded-md shadow-md lg:fixed lg:right-4 lg:top-28 mt-20" style={{ width: '35%' }}>
//             <h2 className="text-2xl font-bold mb-4">Summary</h2>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-700">Total Amount</span>
//               <span className="font-bold text-gray-900">₹{totalAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-700">GST (18%)</span>
//               <span className="font-bold text-gray-900">₹{gstAmount.toFixed(2)}</span>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-xl font-bold text-gray-900">Total</span>
//               <span className="text-xl font-bold text-gray-900">₹{totalWithGst.toFixed(2)}</span>
//             </div>
//             <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4" onClick={handleCheckout}>
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ProductDetail = ({ product }) => {
//   return product ? (
//     <div className="border border-gray-300 rounded-lg p-6 shadow-md bg-white">
//       <div className="flex items-center justify-between">
//         <img src={product.imageUrl} alt={`Image of ${product.name}`} className="w-24 h-24 object-cover rounded-md" />
//         <div className="flex-1 ml-4">
//           <h2 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h2>
//           <div className="text-green-600 font-bold text-lg">₹ {product.discountedPrice}</div>
//           <div className="text-gray-500 line-through">₹{product.actualPrice}</div>
//           <div className="text-red-500">{product.discountPercentage}% off</div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <p>Loading product details...</p>
//   );
// };

// export default CartPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const GST_RATE = 0.18;

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (!userId) {
          console.log('User ID not found. No items to fetch.');
          return;
        }
        const response = await fetch(`http://localhost:3006/api/cart/get-project-to-cart/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        console.log('Fetched cart items:', data);

        if (!Array.isArray(data)) {
          console.error('Fetched data is not an array:', data);
          return;
        }

        if (data.length === 0) {
          console.log('No items in cart.');
          setCartItems([]);
          setTotalAmount(0);
          return;
        }

        const products = await Promise.all(data.map(async item => {
          const productResponse = await fetch(`http://localhost:3006/api/products/${item.productId}`);
          if (!productResponse.ok) {
            throw new Error('Failed to fetch product');
          }
          const product = await productResponse.json();
          return { ...item, product };
        }));

        const total = products.reduce((sum, item) => {
          if (item.product && typeof item.product.discountedPrice === 'number') {
            return sum + item.product.discountedPrice;
          } else {
            console.error('Invalid discountedPrice:', item.product);
            return sum;
          }
        }, 0);

        console.log('Total amount:', total);
        setCartItems(products);
        setTotalAmount(total);
      } catch (error) {
        console.error('Error fetching cart items:', error.message);
      }
    };

    fetchCartItems();
  }, [userId]);

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3006/api/cart/remove-from-cart/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      const updatedCartItems = cartItems.filter(item => item.productId !== productId);
      setCartItems(updatedCartItems);

      const updatedTotalAmount = updatedCartItems.reduce((sum, item) => {
        return sum + (item.product ? item.product.discountedPrice : 0);
      }, 0);
      setTotalAmount(updatedTotalAmount);

    } catch (error) {
      console.error('Error removing item from cart:', error.message);
    }
  };

  const gstAmount = totalAmount * GST_RATE;
  const totalWithGst = totalAmount + gstAmount;

  const handleCheckout = () => {
    const orderDetails = {
      userId,
      cartItems,
      totalAmount: totalWithGst
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    navigate('/checkout');
  };

  return (
    <div className="mx-auto px-4 py-8 mb-10 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-700">
          Your cart is empty.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-2/3 pr-8" style={{ flexBasis: '65%' }}>
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map(item => (
                <div key={item._id} className="border rounded-md p-4 bg-white">
                  <ProductDetail product={item.product} />
                  <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                    onClick={() => handleRemoveFromCart(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 bg-white p-6 rounded-md shadow-md lg:fixed lg:right-4 lg:top-28 mt-20" style={{ width: '35%' }}>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Total Amount</span>
              <span className="font-bold text-gray-900">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">GST (18%)</span>
              <span className="font-bold text-gray-900">₹{gstAmount.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-gray-900">₹{totalWithGst.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductDetail = ({ product }) => {
  return product ? (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <div className="flex items-center justify-between">
        <img src={product.imageUrl} alt={`Image of ${product.name}`} className="w-24 h-24 object-cover rounded-md" />
        <div className="flex-1 ml-4">
          <h2 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h2>
          <div className="text-green-600 font-bold text-lg">₹ {product.discountedPrice}</div>
          <div className="text-gray-500 line-through">₹{product.actualPrice}</div>
          <div className="text-red-500">{product.discountPercentage}% off</div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading product details...</p>
  );
};

export default CartPage;
