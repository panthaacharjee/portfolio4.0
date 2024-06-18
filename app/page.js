"use client"
import Image from "next/image";
// import video from  "@/public/bg.mp4"
import myvideo from "@/videos/bg.mp4"
import Video from "next-video"


export default function Home() {
  return (
    <>
      <div>
        <section className="h-[80vh] bg-black w-full">
        {/* <video width="320" height="240" controls>
          <source src="/public/bg.mp4" type="video/mp4"/>
        </video> */}
          <div>
            <Video src={myvideo} muted loop autoplay controls={false} height="300" width="300"/>
          </div>
        </section>
      </div>
    </>
  );
}


async function VideoComponent({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  })
  const { url } = blobs[0]
 
  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}