import { IMovie } from "@/app/interface";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function CardMovieTrend({
  Movie,
  index,
}: {
  Movie: IMovie;
  index: number;
}) {
  return (
    <div className="flex gap-[15px] h-[50px] items-center hover:bg-[#2a2a3a] px-3 py-2 rounded transition">
      <span className="text-[#FFD875] text-[18px] font-bold min-w-[30px]">{index + 1}.</span>
      <FontAwesomeIcon
        icon={faArrowTrendUp}
        style={{
          fontSize: "16px",
          paddingLeft: "5px",
          color: "#bedc33",
        }}
      />
      <div className="w-[25px] h-[36px] rounded overflow-hidden">
        <Image
          className="w-full object-cover h-full"
          unoptimized
          width={25}
          height={36}
          src={Movie.image}
          alt={Movie.title}
        />
      </div>
      <div className="max-w-[250px]">
        <p className="whitespace-nowrap cursor-pointer hover:text-[#FFD875] max-[650px]:w-[200px] w-[150px] overflow-hidden text-ellipsis text-white text-[14px] font-medium">
          {Movie.title}
        </p>
        <p className="text-[#999] text-[11px]">{Movie.subTitle}</p>
      </div>
      <span className="ml-auto text-[#FFD875] text-[12px] bg-[#3a3a4a] px-2 py-1 rounded">
        {Movie.imdb} ⭐
      </span>
    </div>
  );
}
