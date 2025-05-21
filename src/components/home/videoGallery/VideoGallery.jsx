"use client";

import VideoModal from "@/components/modal/VideoModal";
import Heading from "@/components/ui/Heading";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const videos = [
  { id: "9fh1H8OMFsE", title: "" },
  { id: "M3VGWnZnWzA", title: "" },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-12 ">
      <div className="container mx-auto ">
        <div className="mb-12">
          <Heading>Video Gallery</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="cursor-pointer group overflow-hidden  shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-primary-green p-6"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={video.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <div className="hover:text-primary-green transition-all duration-300 flex items-center justify-center gap-4">
                    <FaPlay className=" size-10 " />
                    <span className="text-2xl ">Play Video</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};

export default VideoGallery;
