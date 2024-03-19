export const SelectType = ({types, ...props}) => {
  return (
    <select {...props} className="border-2 text-gray-600 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none">
      <option {...props} selected disabled>Selecione o tipo</option>
      {types.map(type => <option key={type} value={type}>{type}</option>)}
    </select>
  )
}