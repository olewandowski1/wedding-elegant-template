import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.NAME} — ${siteConfig.SHORT_DESCRIPTION}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

function WeddingLogo() {
  return (
    <div
      style={{
        width: 160,
        height: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        zIndex: 2,
      }}
    >
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: '100%', height: '100%' }}
      >
        <path
          d='M50 85s-35-20-35-45a20 20 0 1 1 40-5 20 20 0 1 1 40 5c0 25-35 45-35 45Z'
          fill='#c5a028'
        />
      </svg>
    </div>
  );
}

export default async function OpenGraphImage() {
  let fontData: Buffer | ArrayBuffer;

  try {
    fontData = await readFile(
      join(process.cwd(), 'assets/PlayfairDisplay-Regular.ttf'),
    );
  } catch {
    fontData = new ArrayBuffer(0);
  }

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        position: 'relative',
        backgroundImage:
          'linear-gradient(180deg, #fafaf9 0%, #f5f5f4 60%, #e7e5e4 100%)',
        color: '#1c1917',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 460,
          height: 460,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(197,160,40,0.15) 0%, rgba(197,160,40,0.08) 35%, rgba(197,160,40,0.03) 55%, rgba(0,0,0,0) 70%)',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        }}
      />

      <WeddingLogo />

      <div
        style={{
          fontSize: 84,
          fontFamily: 'Playfair Display, serif',
          marginBottom: 24,
          textAlign: 'center',
          lineHeight: 1.1,
          zIndex: 2,
          color: '#c5a028',
        }}
      >
        {siteConfig.NAME}
      </div>

      <div
        style={{
          fontSize: 36,
          maxWidth: 900,
          textAlign: 'center',
          opacity: 0.8,
          lineHeight: 1.4,
          zIndex: 2,
          fontFamily: 'Playfair Display, serif',
        }}
      >
        {siteConfig.DESCRIPTION}
      </div>
    </div>,
    {
      ...size,
      fonts:
        fontData.byteLength > 0
          ? [
              {
                name: 'Playfair Display',
                data: fontData,
                style: 'normal',
                weight: 400,
              },
            ]
          : [],
    },
  );
}
