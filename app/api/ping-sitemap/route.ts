import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(
      'https://www.google.com/ping?sitemap=https://www.jameskenyonmagic.com/sitemap.xml',
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; JamesKenyonMagic/1.0; +https://jameskenyonmagic.com)',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Successfully pinged Google sitemap');
    return NextResponse.json({ success: true, message: 'Sitemap pinged successfully' });
  } catch (error) {
    console.error('Failed to ping Google sitemap:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to ping sitemap' },
      { status: 500 }
    );
  }
} 