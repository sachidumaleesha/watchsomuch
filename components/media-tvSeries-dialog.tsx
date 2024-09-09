"use client"

import { useState } from "react"
import { Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MediaTrailerDialogProps {
  id: number
}

export const MediaTvSeriesDialog: React.FC<MediaTrailerDialogProps> = ({
  id,
}) => {
  const [selectedServer, setSelectedServer] = useState(
    process.env.NEXT_PUBLIC_TV_SERVER_URL_1
  )

  const servers = [
    { name: "Server 1", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_1 },
    { name: "Server 2", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_2 },
    { name: "Server 3", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_3 },
    { name: "Server 4", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_4 },
    { name: "Server 5", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_5 },
    { name: "Server 6", url: process.env.NEXT_PUBLIC_TV_SERVER_URL_6 },
  ]

  const tvSeriesUrl = `${selectedServer}${id}`

  const handleServerChange = (value: string) => {
    const selected = servers.find(server => server.name === value)
    if (selected) {
      setSelectedServer(selected.url)
    }
    console.log(selected?.url)
  }

  return (
    <Dialog modal>
      <DialogTrigger className={cn(buttonVariants())}>
        <Play className="mr-2 size-4" /> Watch Now
      </DialogTrigger>

      <DialogContent className="max-w-screen-lg">
        <Select onValueChange={handleServerChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Change Server"/>
          </SelectTrigger>
          <SelectContent>
            {servers.map((server, index) => (
              <SelectItem key={index} value={server.name}>
                {server.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <iframe
          className="aspect-square size-full rounded-md sm:aspect-video"
          src={tvSeriesUrl}
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  )
}
