import { ChevronRight, LayoutList, Maximize2, Mic2, MonitorSmartphone, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2} from 'lucide-react'
import { Home as HomeIcon, Search, Library, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
     <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className=' font-semibold text-3xl mt-10'> Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/albumpop.png" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>

            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/albumright.jpg" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/hotHitsUSA.jpg" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/albumright.jpg" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/albumpop.png" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/albumpop.png" width={104} height={104} alt="Capa do Album" />
              <strong>Pop Right Now</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className=' font-semibold text-2xl mt-10'> Made For Kédma Menezes</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/hotHitsUSA.jpg" className='w-full' width={104} height={104} alt="Capa do Album" />
              <strong className='font-semibold'>Hot Hits USA</strong>
              <span className='text-sm text-zinc-500'>The hottest tracks in the United States</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/albumpop.png" className='w-full' width={104} height={104} alt="Capa do Album" />
              <strong className='font-semibold'>Pop Right Now</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red an more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/albumright.jpg" className='w-full' width={104} height={104} alt="Capa do Album" />
              <strong className='font-semibold'>Pop Right Now</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red an more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/albumpop.png" className='w-full' width={104} height={104} alt="Capa do Album" />
              <strong className='font-semibold'>Pop Right Now</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red an more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/albumright.jpg" className='w-full' width={104} height={104} alt="Capa do Album" />
              <strong className='font-semibold'>Pop Right Now</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red an more</span>
            </a>
          </div>
        </main>
      </div>


      <Footer/>
    </div>
  )
}
