import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Magic Show Videos | James Kenyon Magic',
  description: 'Watch professional magic show videos featuring close-up magic, stage shows, and corporate entertainment by James Kenyon.',
  metadataBase: new URL('https://www.jameskenyonmagic.com'),
  alternates: {
    canonical: 'https://www.jameskenyonmagic.com/videos/show-reel',
  },
}

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
} 