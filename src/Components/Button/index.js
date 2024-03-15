export const Button = ({ children, ...props }) => {
    return <button {...props} className="
    px-4
    py-2.5
    bg-[#ffcb05]
    rounded-full
    mx-6
    font-bold
    text-xl
    uppercase
    text-[#3c5aa6]
    shadow-xl
    hover:bg-[#c7a008]
    hover:text-[#2a75bb]
    transition-colors
    ">{children}</button>
}