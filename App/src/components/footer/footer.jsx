import React from "react"

function Footer() {
    return (
        <footer className="relative bg-black bg-opacity-80 pt-14  pb-6">
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap text-gray-200 text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Contactanos!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Encuéntranos en cualquiera de estas plataformas:
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <i className="fab fa-twitter"></i></button><button
                                    className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                <i className="fab fa-facebook-square"></i></button><button
                                    className="bg-white text-fuchsia-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                <i className="fab fa-instagram"></i></button><button
                                    className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                <a href="https://github.com/ogrico/grupo_10_ibike" target="_blank"><i
                                    className="fab fa-github"></i></a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-4">Developers</span>
                                <ul className="list-unstyled">
                                    <li className="flex">
                                        <i className="fab fa-github mr-2" ></i>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/genemavare" target="_blank">Genesis Mavera</a>
                                    </li>
                                    <li className="flex">
                                        <i className="fab fa-github mr-2" ></i>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/ogrico" target="_blank">Geovany Rico</a>
                                    </li>
                                    <li className="flex">
                                        <i className="fab fa-github mr-2" ></i>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/verjhamn" target="_blank">Andrés
                                            Verjhamn</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-12 border-gray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-300 font-semibold py-1">
                            Copyright © <span id="get-current-year">2023</span><a className="text-blueGray-500" /> Todos los derechos
                            reservados
                            <a href="https://github.com/ogrico/grupo_10_ibike" target="_blank"
                                className="text-blueGray-500 hover:text-white">IBike</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer