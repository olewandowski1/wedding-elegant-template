import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <svg width='32' height='32' viewBox='0 0 100 100' fill='none'>
        <path
          d='M50 85s-35-20-35-45a20 20 0 1 1 40-5 20 20 0 1 1 40 5c0 25-35 45-35 45Z'
          fill='#c5a028'
        />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
