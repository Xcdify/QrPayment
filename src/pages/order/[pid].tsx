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
    const [paid, setPaid] = useState(false);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const setValues = async () => {
            const { pid } = router.query
            try {
                if (pid) {
                    const response = await axios.get(`http://localhost:8002/cart/${pid}`);
                    setCart(response.data);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        setValues();
    }, [router.isReady])

    const payNow = async () => {
        const { pid } = router.query
        try {
            if (pid) {
                const response = await axios.delete(`http://localhost:8002/cart/${pid}/clear`);
                setPaid(true)
                setCart({
                    products: [],
                    subtotal: 0
                });
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="w-screen h-screen">
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className="block">
                    {cart.subtotal > 0 && <div className="text-center">Amount: {cart.subtotal}$</div>}
                    {!paid && <button className="mt-2 w-80 bg-primary-100 p-3 text-white" onClick={() => payNow()}>Pay Now</button>}
                    {paid && <div className="mt-2 w-80 text-center text-primary-100 p-3">Order Completed Successfully</div>}
                </div>
            </div>
        </div>
    )
}
