import React from 'react'
import Navbars from '../Componentes/Navbars'
import PrivateRoutes from '../Componentes/PrivateRoutes'


const PrivateLayout = ({ children }) => {
    return (
        <div className="">
            <PrivateRoutes>
                <Navbars />
                <div className="flex w-full">
                    {children}

                </div>

            </PrivateRoutes>

        </div>
    )
}

export default PrivateLayout
