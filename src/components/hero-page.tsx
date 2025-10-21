"use client";

import React from 'react'
import Image from 'next/image'
const HeroPage = () => {
  return (
    <div className="w-[1000px] h-[600px] flex flex-col items-center justify-center gap-8 p-8 pointer-events-none">
        <div className="flex gap-8 items-center pointer-events-none">
            <Image
                src="/bcc_logo.png"
                alt="BCC UI Logo"
                width={250}
                height={250}
                className="object-contain pointer-events-none"
            />
            <Image
                src="/hh_logo.png"
                alt="HH UI Logo"
                width={250}
                height={250}
                className="object-contain pointer-events-none"
            />
            </div>
                <Image
                    src="/ctb_logo.png"
                    alt="CTB UI Logo"
                    width={1000}
                    height={600}
                    className="object-contain pointer-events-none"
                />
            </div>
  )
}

export default HeroPage