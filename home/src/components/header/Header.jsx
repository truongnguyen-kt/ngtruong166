import logo from "../../assets/logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlightRound } from "react-icons/md";

export default function Header(props) {
    return (
        <header
            className={`h-full flex items-center justify-between px-10 border-b backdrop-blur-md
            ${!props.darkMode ? "bg-gray-700 text-white border-gray-700" : "bg-blue-200/70 text-black border-gray-200"}`}
        >

            {/* left - name */}
            <div className="flex items-center gap-3 pl-20">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <h2 className="text-xl font-semibold tracking-wide">
                    Nguyen Hoang Lam Truong
                </h2>
            </div>

            {/* right - buttons */}
            <div className="flex items-center gap-4 pr-20">

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition duration-200 bg-blue-500 text-white hover:bg-blue-600">
                    <IoHomeOutline />
                    Trang chủ
                </button>

                {props.darkMode ? (
                    <button
                        className="flex items-center justify-center p-2 rounded-full transition duration-200 bg-gray-600 hover:bg-black"
                        onClick={props.toggleDarkMode}
                    >
                        <MdOutlineNightlightRound size={20} color="white" />
                    </button>
                ) : (
                    <button
                        className="flex items-center justify-center p-2 rounded-full transition duration-200 bg-gray-200 hover:bg-gray-400"
                        onClick={props.toggleDarkMode}
                    >
                        <CiLight size={20} color="black" />
                    </button>
                )}

            </div>

        </header>
    );
}