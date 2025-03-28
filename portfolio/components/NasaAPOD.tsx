'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const api_key = process.env.NEXT_PUBLIC_API_KEY;

const NasaAPOD = () => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      const result = await callAPI(
        'https://api.nasa.gov/planetary/apod?api_key=' +
          process.env.NEXT_PUBLIC_API_KEY
      );
      setSrc(result.url);
    }

    getData();
  }, []);

  console.log(src);

  return (
    <div className="h-40 bg-amber-100">
      {src ? (
        <Image src={src} alt="Random NASA image" height={50} width={50} />
      ) : (
        <h1>bruh</h1>
      )}
    </div>
  );
};

export default NasaAPOD;

export async function callAPI(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
