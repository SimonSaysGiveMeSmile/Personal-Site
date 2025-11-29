import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
 
export const size = {
  width: 100,
  height: 100,
}
export const contentType = 'image/png'
 
export default async function Icon() {
  try {
    const imagePath = join(process.cwd(), 'public', 'Simon-Logo.png')
    const imageBuffer = await readFile(imagePath)
    const imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`
    
    return new ImageResponse(
      (
        <div
          style={{
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={imageBase64}
            alt="S"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fallback to simple "S" if image can't be loaded
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            S
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  }
}

