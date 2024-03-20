export const SelectType = ({types, ...props}) => {
  return (
    <select 
    {...props} 
    defaultValue="default" 
    className="border-2 
    text-gray-600 
    border-gray-300 
    bg-white 
    h-10 
    px-5 
    rounded-lg 
    text-sm 
    focus:outline-none">
      <option 
      value="default" 
      disabled>
        Selecione o tipo
      </option>
      
      {types.map(type => <option key={type} value={type}>{type}</option>)}
    </select>
  )
}