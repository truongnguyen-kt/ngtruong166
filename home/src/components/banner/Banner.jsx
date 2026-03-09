import { FaRocket } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"

export default function Banner(props) {

    const scrollToProjects = () => {
        document.getElementById("main")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section
            className={`relative h-[90vh]
            flex flex-col items-center justify-center
            text-center overflow-hidden
            ${props.darkMode
                    ? "bg-gradient-to-br from-[#1a0b2e] via-[#1e1b4b] to-[#020617] text-white"
                    : "bg-gradient-to-br from-purple-50 via-indigo-100 to-cyan-100 text-slate-900"
                }`}
        >

            {/* GRID */}
            <div
                className={`absolute inset-0
                ${props.darkMode
                        ? "bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)]"
                        : "bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)]"
                    }
                bg-[size:40px_40px]`}
            />

            {/* GLOW */}
            <div
                className={`absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[900px] h-[900px]
                blur-[160px] rounded-full
                ${props.darkMode ? "bg-purple-500/20" : "bg-purple-300/30"}
                `}
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center">

                {/* BADGE */}
                <div
                    className={`px-4 py-1 mb-6 text-sm rounded-full
                    border backdrop-blur-md
                    ${props.darkMode
                            ? "border-white/20 bg-white/10"
                            : "border-black/10 bg-white/40"
                        }`}
                >
                    ✨ Portfolio & Projects
                </div>

                {/* TITLE */}
                <h1 className="text-7xl font-extrabold mb-4">
                    Nguyễn Hoàng Lam Trường
                </h1>

                {/* DESCRIPTION */}
                <p
                    className={`max-w-xl text-lg
                    ${props.darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                    Tuyển tập các dự án và công cụ nhỏ được xây dựng với đam mê
                </p>

                {/* STATS */}
                <div className="flex gap-16 mt-10">

                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-purple-500">
                            {props.numsOfProjects}
                        </span>
                        <span className={`${props.darkMode ? "text-slate-400" : "text-slate-600"}`}>
                            Dự án
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-sky-500">
                            {props.numsOfCategories}
                        </span>
                        <span className={`${props.darkMode ? "text-slate-400" : "text-slate-600"}`}>
                            Danh mục
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-emerald-500">
                            5
                        </span>
                        <span className={`${props.darkMode ? "text-slate-400" : "text-slate-600"}`}>
                            External
                        </span>
                    </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-10">

                    <button
                        onClick={scrollToProjects}
                        className="flex items-center gap-2
                        px-6 py-3 rounded-xl
                        bg-gradient-to-r
                        from-purple-500 via-fuchsia-500 to-pink-500
                        hover:scale-105 transition"
                    >
                        <FaRocket />
                        Khám phá dự án
                    </button>

                    <button
                        className={`flex items-center gap-2
                        px-6 py-3 rounded-xl border
                        transition
                        ${props.darkMode
                                ? "border-white/20 bg-white/10 hover:bg-white/20"
                                : "border-black/10 bg-white/40 hover:bg-white/70"
                            }`}
                    >
                        <IoSettingsOutline />
                        Quản trị
                    </button>

                </div>

            </div>

        </section>
    )
}