import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import { SITE_URL } from '@/lib/site';

const SHOW_REEL = '/videos/show-reel';
const SHOW_REEL_URL = `${SITE_URL}${SHOW_REEL}`;

interface VideoPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== 'show-reel') permanentRedirect(SHOW_REEL);
  const video = {
    title: "James Kenyon Magic Show Reel",
    description: "Watch James Kenyon's professional magic show reel featuring close-up magic, stage shows, and corporate entertainment.",
    videoUrl: "https://www.jameskenyonmagic.com/videos/websitie%20-%20Made%20with%20Clipchamp.mp4",
    thumbnailUrl: "https://www.jameskenyonmagic.com/images/hero.webp",
  }

  return {
    title: `${video.title} | James Kenyon Magic`,
    description: video.description,
    metadataBase: new URL('https://www.jameskenyonmagic.com'),
    alternates: {
      canonical: SHOW_REEL_URL,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      url: SHOW_REEL_URL,
      type: 'video.other',
      videos: [
        {
          url: video.videoUrl,
          type: 'video/mp4',
          width: 1920,
          height: 1080,
        },
      ],
      images: [
        {
          url: video.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: video.title,
        },
      ],
    },
    twitter: {
      card: 'player',
      title: video.title,
      description: video.description,
      images: [video.thumbnailUrl],
      players: [
        {
          playerUrl: SHOW_REEL_URL,
          streamUrl: video.videoUrl,
          width: 1920,
          height: 1080,
        },
      ],
    },
  }
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params;
  if (slug !== 'show-reel') permanentRedirect(SHOW_REEL);
  const video = {
    title: "James Kenyon Magic Show Reel",
    description: "Watch James Kenyon's professional magic show reel featuring close-up magic, stage shows, and corporate entertainment.",
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">{video.title}</h1>
      <div className="aspect-video w-full max-w-4xl mx-auto mb-6 sm:mb-8">
        <video
          controls
          className="w-full h-full rounded-lg shadow-lg"
          poster="/images/hero.webp"
          preload="metadata"
        >
          <source src="/videos/websitie%20-%20Made%20with%20Clipchamp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-base sm:text-lg mb-4 text-gray-300 max-w-3xl mx-auto sm:mx-0">{video.description}</p>
    </div>
  )
} 