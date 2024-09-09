import { Video } from "@/tmdb/models"
import { yt } from "@/tmdb/utils"
import { Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface MediaTrailerDialogProps {
  videos: Video[]
  id: number
}

export const MediaFullMovieDialog: React.FC<MediaTrailerDialogProps> = ({
  id,
}) => {
  const movieUrl = `https://vidsrc.in/embed/movie?tmdb=${id}`

  return (
    <Dialog modal>
      <DialogTrigger className={cn(buttonVariants())}>
        <Play className="mr-2 size-4" /> Watch Full Movie
      </DialogTrigger>

        <DialogContent className="max-w-screen-lg">
          {/* <iframe
            className="aspect-square size-full rounded-md sm:aspect-video"
            src={yt.video(trailer.key, true)}
            allow="autoplay; encrypted-media"
            allowFullScreen={true}
          /> */}
          
          <iframe
          className="aspect-square size-full rounded-md sm:aspect-video"
          src={movieUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          referrerPolicy="origin"
          allowFullScreen
        />
        </DialogContent>
    </Dialog>
  )
}
