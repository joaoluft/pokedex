export const InputText = ({ pokemonrename, ...props }) => {

    return <input 
    data-pokemonrename={pokemonrename} 
    {...props} 
    className="
    px-4 
    py-2.5 
    rounded-full 
    outline-none
    text-lg
    font-medium
    text-center
    placeholder:text-gray-400
    border
    border-[#c7a008]
    data-[pokemonRename=true]:border-gray-400
    bg-gray-50
    shadow-xl
    text-gray-700
    " />
}