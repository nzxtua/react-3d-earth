import { HeartIcon } from '@heroicons/react/24/outline'

export const DonateButton = () => {
  const onClickDonate = () => window.open(import.meta.env.VITE_BACK_ALIVE_URL, '_blank');

  return (
    <div className="flex items-center justify-between mt-8 mb-8 border-[2px] bg-[#5b7742] hover:bg-[#435730]">
      <HeartIcon className='w-10 h-10 p-1 border-r-[2px]'/>

      <button type="button" onClick={onClickDonate} className="outline-none text-base font-semibold px-8 py-2 cursor-pointer transition duration-350 ease-in-out">
        <span className='uppercase'>Donate</span>
      </button>
    </div>
  )
}