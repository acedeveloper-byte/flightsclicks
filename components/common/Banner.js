import Image from 'next/image'
import React from 'react'

const Banner = ({page  , home}) => {
    return (
        <div style={{ position: "relative", height: "450px" }} className="home-page-image-layout">
            {/* Background Image */}
            <Image
                src="/images/banner/breadcrumbs.jpg"
                alt="Poster"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
            />

            {/* Centered Content */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                        background: "radial-gradient(#0000005c, transparent)"
                }}
                className="text-white text-center"
            >
                <h2>{page}</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-white mb-0">
                        <a className="text-decoration-none text-white" href="/">Home /</a>
                    </p>
                    
                    <p className="text-white mb-0 ms-2">{page}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
