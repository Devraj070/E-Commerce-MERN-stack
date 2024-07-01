// // // ProductCharts.jsx
// // import React from 'react';
// // import { Bar, Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     BarElement,
// //     Title,
// //     Tooltip,
// //     Legend,
// //     ArcElement
// // );

// // const ProductCharts = () => {
// //     const barData = {
// //         labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
// //         datasets: [
// //             {
// //                 label: 'Sales',
// //                 data: [120, 200, 150, 80],
// //                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
// //             },
// //         ],
// //     };

// //     const pieData = {
// //         labels: ['Category 1', 'Category 2', 'Category 3'],
// //         datasets: [
// //             {
// //                 label: 'Product Categories',
// //                 data: [300, 50, 100],
// //                 backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
// //             },
// //         ],
// //     };

// //     const options = {
// //         responsive: true,
// //         maintainAspectRatio: false,
// //     };

// //     return (
// //         <div className="flex flex-col items-center">
// //             <div className="w-full mb-8">
// //                 <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
// //                 <div className="w-full h-96">
// //                     <Bar data={barData} options={options} />
// //                 </div>
// //             </div>
// //             <div className="w-full">
// //                 <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
// //                 <div className="w-full h-96">
// //                     <Pie data={pieData} options={options} />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProductCharts;
// // ProductCharts.jsx// ProductCharts.jsx
// import React, { useEffect, useState } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import axios from 'axios';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
// );

// const ProductCharts = () => {
//     const [barData, setBarData] = useState({});
//     const [pieData, setPieData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3006/api/product-data');
//                 const products = response.data;

//                 // Validate and clean data
//                 const validProducts = products.filter(product =>
//                     product.name &&
//                     typeof product.discountedPrice === 'number' &&
//                     isFinite(product.discountedPrice) &&
//                     product.discountedPrice >= 0
//                 );

//                 if (validProducts.length === 0) {
//                     throw new Error("No valid product data available");
//                 }

//                 // Prepare bar chart data
//                 const barLabels = validProducts.map(product => product.name);
//                 const barDataset = validProducts.map(product => product.discountedPrice);

//                 setBarData({
//                     labels: barLabels,
//                     datasets: [
//                         {
//                             label: 'Sales',
//                             data: barDataset,
//                             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                         },
//                     ],
//                 });

//                 // Prepare pie chart data
//                 const categories = [...new Set(validProducts.map(product => product.category))];
//                 const categoryCounts = categories.map(category =>
//                     validProducts.filter(product => product.category === category).length
//                 );

//                 setPieData({
//                     labels: categories,
//                     datasets: [
//                         {
//                             label: 'Product Categories',
//                             data: categoryCounts,
//                             backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
//                         },
//                     ],
//                 });

//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching product data:', error);
//                 setError('Failed to load product data. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <div className="w-full mb-8">
//                 <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
//                 <div className="w-full h-96">
//                     <Bar data={barData} options={options} />
//                 </div>
//             </div>
//             <div className="w-full">
//                 <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
//                 <div className="w-full h-96">
//                     <Pie data={pieData} options={options} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCharts;
// ProductCharts.jsx
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const ProductCharts = () => {
    const [barData, setBarData] = useState({});
    const [pieData, setPieData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3006/api/product-data');
                const products = response.data;

                // Validate and clean data
                const validProducts = products.filter(product =>
                    product.name &&
                    typeof product.discountedPrice === 'number' &&
                    isFinite(product.discountedPrice) &&
                    product.discountedPrice >= 0
                );

                if (validProducts.length === 0) {
                    throw new Error("No valid product data available");
                }

                // Prepare bar chart data
                const barLabels = validProducts.map(product => product.name);
                const barDataset = validProducts.map(product => product.discountedPrice);

                setBarData({
                    labels: barLabels,
                    datasets: [
                        {
                            label: 'Sales',
                            data: barDataset,
                            backgroundColor: getRandomColors(barLabels.length), // Different colors for each bar
                        },
                    ],
                });

                // Prepare pie chart data
                const categories = [...new Set(validProducts.map(product => product.category))];
                const categoryCounts = categories.map(category =>
                    validProducts.filter(product => product.category === category).length
                );

                setPieData({
                    labels: categories,
                    datasets: [
                        {
                            label: 'Product Categories',
                            data: categoryCounts,
                            backgroundColor: getRandomColors(categories.length), // Different colors for each pie slice
                        },
                    ],
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
                setError('Failed to load product data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to generate random colors
    const getRandomColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
            colors.push(randomColor);
        }
        return colors;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
                <div className="w-full h-96">
                    <Bar data={barData} options={options} />
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
                <div className="w-full h-96">
                    <Pie data={pieData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default ProductCharts;
