import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as Spinner } from '../../Loading/spinner.svg'; // Import your spinner SVG file
import LoginModal from '../../User/LoginModal';

function OneProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyNow = async () => {
    if (isLoggedIn) {
      try {
        if (!userId) {
          throw new Error('User ID is missing');
        }

        const response = await fetch('http://localhost:3006/api/cart/add-project-to-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: product._id, // Use the actual product ID
            userId: userId, // Use the actual user ID
          }),
        });

        if (response.ok) {
          Navigate('/Cart')
        } else {
          throw new Error('Failed');
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Failed to add purchase this product');
      }
    } else {
      toggleLoginModal();
    }
  };

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const storedUserId = sessionStorage.getItem('userId'); // Get userId from sessionStorage
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUserId(storedUserId); // Set userId if logged in
    }
  }, []);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
    console.log("7888");
  };

  const handleAddToCartClick = async () => {
    if (isLoggedIn) {
      try {
        if (!userId) {
          throw new Error('User ID is missing');
        }

        const response = await fetch('http://localhost:3006/api/cart/add-project-to-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: product._id, // Use the actual product ID
            userId: userId, // Use the actual user ID
          }),
        });

        if (response.ok) {
          alert('Product added to cart!');
        } else {
          throw new Error('Failed to add product to cart');
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart');
      }
    } else {
      toggleLoginModal();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-14 w-14" />
      </div>
    );
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sp mx-auto my-4 max-w-7xl px-2 py-5 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt={`Product ${product.id}`}
                      src={product.imageUrl}
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{product.name}</h2>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-green-700 font-bold mr-2 bold text-lg">
                  ₹{product.discountedPrice}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  ₹{product.actualPrice}
                </p>
                <p className="text-sm text-red-500 ml-2">{product.discountPercentage}% off</p>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">{product.description}</p>
              </div>
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={isLoggedIn ? handleAddToCartClick : toggleLoginModal}
                  >
                    <span className="block">Add To Cart</span>
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handleBuyNow}
                    >
                      <span className="block">Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={toggleLoginModal}
        setIsLoggedIn={(value) => {
          sessionStorage.setItem('isLoggedIn', value ? 'true' : 'false');
          setIsLoggedIn(value);
        }}
      />
    </div>
  );
}

export default OneProductDetails;
