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

      {/* 하단 버튼 및 정보 영역 */}
      <div className="absolute bottom-10 left-0 flex w-full flex-col items-center">
        {/* Top 10 배지 영역 (임의로 #2 설정) */}
        <div className="mb-5 flex items-center gap-1.5">
          <Image src="/assets/icons/ic-top10.svg" alt="TOP 10" width={24} height={24} />
          <span className="text-body2 font-bold tracking-tight text-white">#2 in Korea Today</span>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex w-full items-center justify-center gap-10 px-10">
          <button className="flex flex-col items-center gap-1 text-white">
            <Image src="/assets/icons/ic-add.svg" alt="My List" width={24} height={24} />
            <span className="text-[12px] font-medium">My List</span>
          </button>

          <button className="flex items-center justify-center gap-2 rounded-md bg-white px-8 py-2 text-black transition-transform active:scale-95">
            <Image
              src="/assets/icons/ic-play.svg"
              alt="Play"
              width={20}
              height={20}
              className="brightness-0"
            />
            <span className="text-label1 font-bold">Play</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white">
            <Image src="/assets/icons/ic-info.svg" alt="Info" width={24} height={24} />
            <span className="text-[12px] font-medium">Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
