'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const api_key = process.env.NEXT_PUBLIC_API_KEY;

interface ImageProps {
  src: string;
  title: string;
  desc: string;
}

const NasaAPOD = () => {
  const [viewImage, setViewImage] = useState<boolean>(false);

  const [data, setData] = useState<ImageProps | null>(null);

  function toggleImage() {
    setViewImage(true);
  }

  useEffect(() => {
    async function getData() {
      const year = Math.floor(Math.random() * 29) + 1995;
      const month = Math.floor(Math.random() * 11) + 1;
      const day = Math.floor(Math.random() * 27) + 1;

      const DATE = `${year}-${month}-${day}`;

      const result = await callAPI(
        `https://api.nasa.gov/planetary/apod?&api_key=${process.env.NEXT_PUBLIC_API_KEY}&date=${DATE}`
      );

      const newImage: ImageProps = {
        src: result.url,
        title: result.title,
        desc: result.explanation,
      };

      setData(newImage);
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center text-white h-100">
      <div
        className="relative h-100 w-100 bg-black flex justify-center items-center  border-white border-2 rounded-2xl"
        onClick={() => toggleImage()}
      >
        {!viewImage || !data ? (
          <h1>Click for really cool space image</h1>
        ) : (
          <Image
            src={data.src}
            alt="Random NASA image"
            fill={true}
            className="rounded-2xl"
          />
        )}
      </div>
      {!viewImage || !data ? (
        <h1> </h1>
      ) : (
        <>
          <h1 className="text-xl">{data.title}</h1>
          <h1 className="text-xs">Image via NASA APOD API</h1>
        </>
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
