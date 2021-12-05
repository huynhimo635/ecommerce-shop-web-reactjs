import React, { Suspense, useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Routes from "../routes/Routes"

import Header from "./Header"
import Footer from "./Footer"
import ProductViewModal from "./ProductViewModal"

import Loading from "./Loading"
import Login from "./Login"
import Register from "./Register"

import { getAll } from "../redux/data-loading/productDataSlice"

const Layout = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productData.data)

    useEffect(() => {
        const fetchData = async () => await dispatch(getAll())
        if (products.length === 0) fetchData()
    }, [])

    return (
        <BrowserRouter>
            <Loading />
            <Login />
            <Register />
            <Route
                render={props => (
                    <div>
                        <Header {...props} />
                        <Suspense
                            fallback={<h1 className="loading">loading...</h1>}
                        >
                            <div className="container">
                                <div className="main">
                                    <Routes />
                                </div>
                            </div>
                            <ProductViewModal />
                        </Suspense>
                        <Footer />
                    </div>
                )}
            />
        </BrowserRouter>
    )
}

export default Layout
