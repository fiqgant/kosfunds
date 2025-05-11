import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const VideoPlayer = ({ videoUrl, mascotUrl }) => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl">
            <div className="flex items-stretch justify-center p-6 rounded-2xl">
                <div className="flex items-center p-4 rounded-xl">
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        id="videoPlayer"
                        className="w-[600px] h-full rounded-xl"
                        controls
                    />
                </div>
                <div className="flex items-center ml-4 rounded-xl">
                    <img
                        src={mascotUrl}
                        alt="Mascot"
                        className="w-[300px] h-full object-contain"
                    />
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={"/sign-in"}>
                    <Button className="group h-14 min-w-[200px] rounded-full bg-gradient-to-r from-kosfunds-blue to-kosfunds-darkblue px-8 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 dark:from-kosfunds-blue dark:to-kosfunds-darkblue dark:hover:shadow-blue-600/20">
                        Mulai Gratis
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>

                <Link href={"#videoPlayer"}>
                    <Button
                        onClick={playVideo}
                        variant="outline"
                        className="h-14 min-w-[200px] rounded-full bg-white/80 backdrop-blur-sm border-blue-200 px-8 text-lg font-medium text-blue-600 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:bg-gray-900/30 dark:text-blue-400 dark:hover:bg-blue-950/20"
                    >
                        Lihat Demo
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default VideoPlayer;
