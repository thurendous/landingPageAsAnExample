import YouTube from 'react-youtube'
import { Separator } from './ui/Separator'

export const EditedVideos = () => {
  const videoOptions = {
    height: '270',
    width: '480',
    className: 'rounded-lg shadow-lg',
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showInfo: 0,
      mute: 1,
      loop: 1,
    },
  }

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Videos I&apos;ve created
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <YouTube videoId="C7mDqwjXjBc" opts={videoOptions} />
          <YouTube videoId="JpV6LPxB-X4" opts={videoOptions} />
          <YouTube videoId="SjqmjAq2YAE" opts={videoOptions} />
          <YouTube videoId="ofbDgjXAs5s" opts={videoOptions} />
        </div>
      </div>
    </div>
  )
}
