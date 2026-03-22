import { IMovie } from "@/app/interface";
import Image from "next/image";

export default function MoviePage({
  Movie,
  index,
}: {
  Movie: IMovie;
  index: number;
}) {
  // Định dạng tập phim theo HHPanda
  const getEpisodeDisplay = () => {
    if (Movie.part === "Trailer") return "Trailer";
    if (Movie.part === "Hoàn Tất") return `Hoàn Tất (${Movie.episodes}/${Movie.episodes})`;
    return `Tập ${Movie.episodes}`;
  };

  return (
    <div className="relative">
      <div className="px-2 cursor-pointer group">
        <div className="w-full aspect-[2/3] bg-transparent relative overflow-hidden ">
          <div
            className={`bg-[#FFD875] ${
              index % 2 != 0 ? "custom-clip-left" : "custom-clip-right"
            } absolute top-0 left-0 right-0 w-full h-full rounded-[20px]`}
          ></div>
          <Image
            className={`w-full h-full ${
              index % 2 != 0 ? "custom-clip-left" : "custom-clip-right"
            } object-cover transition-transform duration-300 rounded-[15px] group-hover:scale-98`}
            unoptimized
            width={211}
            height={316}
            src={Movie.image}
            alt={Movie.title}
          />
          <div className="absolute bottom-[-1px] left-0 z-10 w-full flex justify-center gap-1">
            <span className="text-white bg-[#5e6070] text-[11px] px-[8px] py-[7px]">
              {Movie.quality}
            </span>
            <span className="text-white bg-[#2ca35d] text-[11px] px-[8px] py-[7px]">
              {getEpisodeDisplay()}
            </span>
          </div>
        </div>
        <div className="pt-2">
          <div className="flex items-center max-[650px]:gap-3 gap-6">
            <span className="text-[60px] max-[650px]:text-[30px] italic font-[800] text-transparent bg-clip-text bg-[linear-gradient(39deg,_rgba(254,_207,_89,_1),_rgba(255,_241,_204,_1))]">
              {index + 1}
            </span>
            <div>
              <h1 className="text-[14px] max-w-[170px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis font-medium">
                {Movie.title}
              </h1>
              <h1 className="text-[#aaa] py-[2px] max-w-[170px] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">
                {Movie.subTitle}
              </h1>
              <div className="max-[650px]:hidden flex items-center justify-start gap-3 mt-1">
                <span className="text-white text-[11px] bg-[#3a3a4a] px-2 py-1 rounded">
                  {Movie.year}
                </span>
                <span className="text-white text-[11px]">
                  {Movie.imdb} ⭐
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
