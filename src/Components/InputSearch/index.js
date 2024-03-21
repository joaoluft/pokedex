export const InputSearch = (props) => {
  return (
    <div className="flex border-2 border-gray-300 rounded-lg px-2 bg-white">
      <div className="flex-grow">
        <input {...props} className="px-2 py-2 text-sm focus:outline-none" />
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 h-4 w-4 fill-current">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}