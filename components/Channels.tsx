import { DiscAlbum } from 'lucide-react'
import { Separator } from './ui/Separator'
import { link } from 'fs'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'

export const Channels = () => {
  const channels = [
    {
      logo: 'https://github.com/shadcn.png',
      name: 'Alpha',
      subs: '200,000',
      link: 'https://www.youtube.com/@AlphaCentralOfficial',
    },
    {
      logo: 'https://avatars.githubusercontent.com/u/40059593?v=4',
      name: 'Brookes',
      subs: '70,000',
      link: 'https://www.youtube.com/@FrazerBrookesChannel',
    },
    {
      logo: 'https://avatars.githubusercontent.com/u/40059593?v=4',
      name: 'Dan Kieft',
      subs: '14,000',
      link: 'https://www.youtube.com/@Dankieft',
    },
    {
      logo: 'https://avatars.githubusercontent.com/u/40059593?v=4',
      name: 'Joe Leech',
      subs: '30,000',
      link: 'https://www.youtube.com/@Joe_Leech',
    },
  ]
  // Avatar Styles
  const style = {
    width: {
      xs: 50, // width on extra-small devices
      sm: 100, // width on small devices
      md: 150, // default width
    },
    height: {
      xs: 50, // height on extra-small devices
      sm: 100, // height on small devices
      md: 150, // default height
    },
    // You can add more responsive keys (lg, xl) as needed
  }

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Channels I've Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
        {channels.map((channel, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link href={`${channel.link}`}>
                <Avatar className="xs:w-12 sm:w-24 md:w-38 xs:h-12 sm:h-24 md:h-38">
                  <AvatarImage src={channel.logo} />
                  <AvatarFallback>{channel.name}</AvatarFallback>
                </Avatar>
              </Link>
              <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
              <p className="text-lg mt-2">{channel.subs} subs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
