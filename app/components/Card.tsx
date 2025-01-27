"use client"
import React from 'react'
import Image from 'next/image'

const Card = ({ image, title, description }: { image: string, title: string, description: string }) => {
  return (
    <div className="max-w-sm  rounded-lg shadow-lg overflow-hidden bg-white">
    {/* Image */}
    <div className="relative w-full h-64">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
  )
}

export default Card