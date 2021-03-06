import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Hero from './../../assets/hero.jpg'

const LandingPageLayout = ({ heading, ...otherProps }) => {
  return (
    <div className="min-h-full bg-white font-body">
      <div className=" flex flex-col">
        <Header />

        {/* <div
          className="
            relative flex items-center justify-center h-full
            bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          {heading && (
            <h1
              className="
            relative px-2.5 text-white uppercase z-10 text-4xl text-center md:text-6xl
          "
            >
              {heading}
            </h1>
          )}

          <div
            className="
              z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40
            "
          />
        </div> */}
      </div>

      <div
        className="
        w-full min-h-screen my-5 max-w-7xl mx-auto
      "
      >
        {otherProps.children}
      </div>

      <Footer />
    </div>
  )
}

LandingPageLayout.defaultProps = {
  heading: '',
}

export default LandingPageLayout
