import React from "react";
import CartWidget from "../CartWidget"

export const NabVar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_marca">
                    <a className="nav_link" href="#">WareHome</a>
                </div>
                <ul className="nav_item">

                    <li>
                        <a className="nav_link" href="">Productos</a>
                    </li>

                    <li>
                        <a className="nav_link" href="">Marcas</a>
                    </li>

                    <li>
                        <a className="nav_link" href="">Soporte</a>
                    </li>

                    <li>
                        <a className="nav_link" href="">
                            <CartWidget />
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default NabVar;