import React, { useEffect } from "react";
import Dropdown from "./Dropdown";

function Header() {
    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, []);

    return (
        <header className="md:container md:mx-auto lg:flex lg:justify-center mb-3 md:my-3">
            <nav className="bg-white shadow-lg lg:w-2/3 md:rounded-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="hidden md:flex items-center space-x-3">
                            <Dropdown options="ALL TYPES" side="left" />
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href="."
                                className="py-4 px-2 text-blue-500 border-b-2 border-blue-500 font-semibold ">
                                Popular Products
                            </a>
                            <a
                                href="."
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                                Low Price
                            </a>
                            <a
                                href="."
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                                High Price
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ">
                            <Dropdown options="PRICE" side="right" />
                        </div>
                        <div className="md:hidden my-3 flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg
                                    className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile-menu">
                    <ul className=".">
                        <li className="active">
                            <a
                                href="index.html"
                                className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">
                                Popular Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">
                                Low Price
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">
                                High Price
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
