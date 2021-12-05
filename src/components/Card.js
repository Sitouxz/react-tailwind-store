import { MenuIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/solid";

// import img from "../images/2cd43b_f2a3d48273304f8cbb635168719fc241_mv2.png";

function Card(props) {
    return (
        <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center mb-3">
                <label className="font-semibold font-bold text-gray-400 px-3 py-2 bg-gray-200 rounded-md">
                    NEW
                </label>
                <div className="flex justify-center align-center">
                    <a href=".">
                        <MenuIcon className="text-gray-300 w-10" />
                    </a>
                    <a href=".">
                        <HeartIcon className="text-gray-300 w-10" />
                    </a>
                </div>
            </div>
            <div className="mb-3 flex flex-col justify-between items-center">
                <img src={props.data.image} width="300px" alt="" />
            </div>
            <div>
                <h1 className="text-center text-xl font-semibold text-gray-500 mb-3">
                    {props.data.name}
                </h1>
                <div className="flex justify-start sm:justify-between flex-col sm:flex-row items-start sm:items-center">
                    <div>
                        <ul className="flex">
                            <li>
                                <StarIcon className="w-5 text-yellow-400" />
                            </li>
                            <li>
                                <StarIcon className="w-5 text-yellow-400" />
                            </li>
                            <li>
                                <StarIcon className="w-5 text-yellow-400" />
                            </li>
                            <li>
                                <StarIcon className="w-5 text-yellow-400" />
                            </li>
                            <li>
                                <StarIcon className="w-5 text-gray-300" />
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center text-gray-400 border-2 px-1 py-1 rounded-md">
                        <h3 className="font-bold sm:mr-2 lg:mr-4">
                            {props.data.price}
                        </h3>
                        <ShoppingCartIcon className="w-8 border-l-2 p-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
