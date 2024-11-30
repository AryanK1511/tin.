interface ToggleSwitchProps {
    isFileUpload: boolean
    onToggle: (value: boolean) => void
  }
  
  export default function ToggleSwitch({ isFileUpload, onToggle }: ToggleSwitchProps) {
    return (
      <div className="bg-[#3B3B3B] rounded-md p-1 flex items-center w-fit">
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            isFileUpload ? 'bg-blue-500 text-white' : 'text-gray-400'
          }`}
          onClick={() => onToggle(true)}
        >
          Upload File
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            !isFileUpload ? 'bg-blue-500 text-white' : 'text-gray-400'
          }`}
          onClick={() => onToggle(false)}
        >
          Paste Code
        </button>
      </div>
    )
  }
  
  