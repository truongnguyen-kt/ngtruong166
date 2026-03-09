import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5"

export default function Main(props) {

    const [search, setSearch] = useState("")
    const [activeCategory, setActiveCategory] = useState("Tất cả")

    const categories = [
        "Tất cả",
        "Tiện ích",
        "Productivity",
        "Game",
        "Education",
        "Social",
        "Utility",
        "Portfolio"
    ]

    const projects = [
        {
            title: "Tra cứu Biển số xe",
            category: "Tiện ích",
            image: "/projects/map.png",
            url: "https://bien-so-xe.vercel.app/"
        },
        {
            title: "Tuan Note",
            category: "Productivity",
            image: "/projects/note.png",
            url: "https://tuan-note.vercel.app/"
        },
        {
            title: "Game Caro",
            category: "Game",
            image: "/projects/caro.png",
            url: "https://game-caro.vercel.app/"
        }
    ]

    return (
        <section className={`pt-20 ${props.darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-white to-slate-200'}`}>

            {/* HEADER */}
            <div className="max-w-6xl mx-auto text-center mb-14">

                <div className={`inline-block px-4 py-1 mb-4 text-sm rounded-full 
                ${props.darkMode ? 'bg-purple-100 text-purple-600' : 'bg-purple-600 text-purple-100'}`}>
                    📦 Danh sách dự án
                </div>

                <h2 className={`text-5xl font-bold mb-4
                    ${props.darkMode ? 'text-white' : 'text-slate-900'}
                `}>
                    Các dự án của tôi
                </h2>

                <p className={`text-slate-600 max-w-xl mx-auto
                    ${props.darkMode ? 'text-white' : 'text-slate-900'}
                `}>
                    Khám phá các ứng dụng và công cụ hữu ích
                </p>

            </div>

            {/* SEARCH + FILTER */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row
            items-center justify-between gap-6 mb-12">

                {/* SEARCH */}
                <div className="relative w-full md:w-[400px]">

                    <IoSearchOutline className="absolute left-4 top-3.5 text-slate-400 text-xl" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`w-full pl-11 pr-4 py-3
                        rounded-xl border border-slate-200
                        focus:outline-none focus:ring-2 focus:ring-purple-400
                        ${props.darkMode ? 'text-white' : 'text-slate-900'}
                        `}
                    />

                </div>

                {/* CATEGORY */}
                <div className="flex flex-wrap gap-3 justify-center">

                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActiveCategory(c)}
                            className={`px-4 py-2 rounded-xl text-sm border transition
                            
                            ${activeCategory === c
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                                    : "bg-white hover:bg-slate-100 border-slate-200"
                                }`}
                        >
                            {c}
                        </button>
                    ))}

                </div>

            </div>

            {/* PROJECT GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((p, i) => (

                    <div
                        key={i}
                        className="rounded-2xl overflow-hidden
                        bg-white shadow-md hover:shadow-xl
                        transition hover:-translate-y-1"
                    >

                        {/* IMAGE */}
                        <div className="h-48 bg-slate-200"></div>

                        {/* CONTENT */}
                        <div className="p-6">

                            <div className="text-xs mb-2 px-3 py-1
                            rounded-full inline-block
                            bg-slate-100 text-slate-600">
                                {p.category}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {p.title}
                            </h3>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}