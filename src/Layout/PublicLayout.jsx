import React from 'react'
import Navbars from '../Componentes/Navbars'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Navbars />
            este es mi publicLayout
            {children}
        </div>
    )
}

export default PublicLayout
