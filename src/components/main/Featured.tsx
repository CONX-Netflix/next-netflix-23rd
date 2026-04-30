'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { movieService } from '@/api/movieService';
import { Movie } from '@/types/movie';

export default function Featured() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const movies = await movieService.getNowPlaying();
      // 첫 번째 영화를 대표작으로 선정
      if (movies.length > 0) setMovie(movies[0]);
    };
    fetchFeatured();
  }, []);

  if (!movie) return <div className="h-[60vh] bg-black" />;

  return (
    <section className="relative h-[80vh] w-full">
      {/* 배경 포스터 */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        fill
        className="object-cover"
        priority
      />

      <div className="bg-main-gradient absolute inset-0" />

      {/* 영화 정보 */}
      <div className="absolute bottom-10 left-0 w-full px-7 text-center">
        <h1 className="text-heading1 mb-4 text-white">{movie.title}</h1>
        <div className="flex justify-center gap-4">
          <button className="rounded bg-white px-6 py-2 font-semibold text-black">Play</button>
          <button className="bg-grey-800/80 rounded px-6 py-2 font-semibold text-white">
            My List
          </button>
        </div>
      </div>
    </section>
  );
}
