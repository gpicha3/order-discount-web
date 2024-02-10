import React, { useEffect, useState } from "react";
import 'tailwindcss/tailwind.css';
import createCoupon from "../services/coupon";
import createSeasonal from "../services/seasonal";
import createOnTop from "../services/ontop";

const MyCart = () => {
    const [userPoints, setUserPoints] = useState(100);
    const [selectedOnTop, setSelectedOnTop] = useState(0);
    const [selectedCoupon, setSelectedCoupon] = useState(0);
    const [selectedSeasonal, setSelectedSeasonal] = useState(0);

    const handleOnTopChange = (event) => {
        setSelectedOnTop(parseInt(event.target.value));
    };

    const handleCouponChange = (event) => {
        setSelectedCoupon(parseInt(event.target.value));
    };

    const handleSeasonalChange = (event) => {
        setSelectedSeasonal(parseInt(event.target.value));
    };

    useEffect(() => {
        createCoupon("Fixed amount", 100);
    }, []);

    const inventory = [
        {
            id: 1,
            category: "T-shirt",
            product: "Red T-shirt",
            img: "https://via.placeholder.com/150?text=Red+T-shirt",
            price: 20,
        },
        {
            id: 2,
            category: "T-shirt",
            product: "Blue T-shirt",
            img: "https://via.placeholder.com/150?text=Blue+T-shirt",
            price: 25,
        },
        {
            id: 3,
            category: "Shoes",
            product: "Running Shoes",
            img: "https://via.placeholder.com/150?text=Running+Shoes",
            price: 80,
        },
        {
            id: 4,
            category: "Shoes",
            product: "Casual Shoes",
            img: "https://via.placeholder.com/150?text=Casual+Shoes",
            price: 70,
        },
    ];

    const couponOptions = [
        createCoupon("Fixed amount", 100),
        createCoupon("Percentage discount", 20),
    ];

    const seasonalOptions = [
        createSeasonal(10, 1),
        createSeasonal(15, 1),
    ];

    const onTopOptions = [
        createOnTop("T-shirt", 5),
        createOnTop("Shoes", 10),
    ];

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
                <div className="space-y-4">
                    {inventory.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img src={item.img} alt="Product Image" className="w-12 h-12 rounded-lg" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.product}</h3>
                                    <p className="text-gray-500">Price: ${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold">User Points: {userPoints}</h4>
                    <div className="mt-4">
                        <div className="mt-4">
                            <label htmlFor="onTop" className="block text-sm font-medium text-gray-700">
                                Select On Top Discount:
                            </label>
                            <select
                                id="onTop"
                                name="onTop"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                onChange={handleOnTopChange}
                                value={selectedOnTop}
                            >
                                <option value={0}>No On Top Discount</option>
                                {onTopOptions.map(option => (
                                    <option key={option.discount} value={option.discount}>{option.categoryProduct}: {option.discount}%</option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="coupon" className="block text-sm font-medium text-gray-700">
                                Select Coupon:
                            </label>
                            <select
                                id="coupon"
                                name="coupon"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                onChange={handleCouponChange}
                                value={selectedCoupon}
                            >
                                <option value={0}>No Coupon</option>
                                {couponOptions.map(option => (
                                    <option key={option.discount} value={option.discount}>{option.coupon}: {option.discount}%</option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="seasonal" className="block text-sm font-medium text-gray-700">
                                Select Seasonal Discount:
                            </label>
                            <select
                                id="seasonal"
                                name="seasonal"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                onChange={handleSeasonalChange}
                                value={selectedSeasonal}
                            >
                                <option value={0}>No Seasonal Discount</option>
                                {seasonalOptions.map(option => (
                                    <option key={option.discount} value={option.discount}>{option.every}: {option.discount}%</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Total: {/* Calculate total price here */}</h4>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default MyCart;
