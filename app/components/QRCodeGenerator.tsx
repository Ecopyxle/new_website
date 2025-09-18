'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'

interface QRCodeGeneratorProps {
  url?: string
  size?: number
  className?: string
}

export default function QRCodeGenerator({ 
  url = 'https://ecopyxle.com', 
  size = 200, 
  className = '' 
}: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGenerated, setIsGenerated] = useState(false)

  useEffect(() => {
    const generateQRCode = async () => {
      if (canvasRef.current && typeof window !== 'undefined') {
        try {
          await QRCode.toCanvas(canvasRef.current, url, {
            width: size,
            margin: 2,
            color: {
              dark: '#1f2937', // gray-800
              light: '#ffffff'
            },
            errorCorrectionLevel: 'M'
          })
          setIsGenerated(true)
        } catch (error) {
          console.error('Error generating QR code:', error)
          // Don't throw the error, just log it
        }
      }
    }

    generateQRCode()
  }, [url, size])

  const downloadQRCode = () => {
    if (canvasRef.current && typeof window !== 'undefined') {
      try {
        const link = document.createElement('a')
        link.download = 'ecopyxle-qr-code.png'
        link.href = canvasRef.current.toDataURL('image/png')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        console.error('Download failed:', error)
        // Fallback: open in new tab
        if (canvasRef.current) {
          window.open(canvasRef.current.toDataURL('image/png'), '_blank')
        }
      }
    }
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="border border-gray-200 rounded-lg shadow-sm"
        style={{ display: isGenerated ? 'block' : 'none' }}
      />
      {!isGenerated && (
        <div 
          className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <div className="text-gray-500 text-sm">Generating QR Code...</div>
        </div>
      )}
      
      {isGenerated && (
        <button
          onClick={downloadQRCode}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download QR Code
        </button>
      )}
      
      <p className="text-sm text-gray-600 mt-2 text-center">
        Scan to visit Ecopyxle
      </p>
    </div>
  )
}
