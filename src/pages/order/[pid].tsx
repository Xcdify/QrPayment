import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

import Header from '../../components/Header'

export default function Order() {

    const router = useRouter()
    const [cart, setCart] = useState({
        products: [],
        subtotal: 0
    });

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const setValues = async () => {
            const { pid } = router.query
            try {
                if (pid) {
                    const response = await axios.get(`http://localhost:8000/cart/${pid}`);
                    setCart(response.data);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        setValues();
    }, [router.isReady])

    return (
        <div className="w-screen h-screen">
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className="block">
                    <div className="text-center">Amount: {cart.subtotal}$</div>
                    <button className="mt-2 w-80 bg-primary-100 p-3 text-white">Pay Now</button>
                </div>
            </div>
        </div>
    )
}
