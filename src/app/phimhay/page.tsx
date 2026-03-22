"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "@/data/phimhay";
import { IMovie } from "../interface";
import MoviePage from "@/component/MoviePage";

export default function PhimHay() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const itemsPerPage = 20;
  let filteredMovies = data.ListMovie;
  
  if (selectedType && selectedType !== "all") {
    filteredMovies = data.ListMovie.filter((m: IMovie) => m.type === selectedType);
  }
  
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIdx, startIdx + itemsPerPage);

  const types = ["all", "anime"];
  const typeLabels: { [key: string]: string } = {
    all: "Tất cả",
    anime: "Anime",
  };

  return (
    <div className="bg-[#0f1419] min-h-screen text-white">
      {/* Header */}
      <div className="bg-[#14161e] border-b border-[#2a2a3a]">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-[#FFD875]">DANH SÁCH PHIM</h1>
          <p className="text-[#999] text-sm mt-2">Khám phá hàng ngàn bộ phim hoạt hình và anime</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#14161e] rounded-lg p-4 sticky top-20">
              <h3 className="text-lg font-bold text-[#FFD875] mb-4">DANH MỤC</h3>
              
              <div className="space-y-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
                      // setSelectedType(type === "all" ? null : type);
                      // setCurrentPage(1);
                    }}
                    className={`w-full cursor-pointer text-left px-4 py-2 rounded transition ${
                      (type === "all" && !selectedType) || selectedType === type
                        ? "bg-[#FFD875] text-black font-bold"
                        : "bg-[#2a2a3a] text-[#ccc] hover:bg-[#3a3a4a]"
                    }`}
                  >
                    {typeLabels[type]}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#2a2a3a]">
                <h4 className="text-sm font-bold text-[#FFD875] mb-3">MỌI NGƯỜI ĐÃ CHỌN</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer">
                    <p className="text-[#FFD875]"onClick={() => {
                      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
                      // setSelectedType(type === "all" ? null : type);
                      // setCurrentPage(1);
                    }}>🔥 Phim Hot Nhất</p>
                  </div>
                  <div className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer">
                    <p className="text-[#FFD875]"onClick={() => {
                      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
                      // setSelectedType(type === "all" ? null : type);
                      // setCurrentPage(1);
                    }}>✨ Phim Mới Nhất</p>
                  </div>
                  <div className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer">
                    <p className="text-[#FFD875]"onClick={() => {
                      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
                      // setSelectedType(type === "all" ? null : type);
                      // setCurrentPage(1);
                    }}>⭐ Phim Đánh Giá Cao</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Movie Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {paginatedMovies.map((movie: IMovie, index: number) => (
                <div 
                  key={index}
                  onClick={() => window.open("https://s.shopee.vn/8086QedA5U", "_blank")}
                  className="cursor-pointer group"
                >
                  <MoviePage Movie={movie} index={index} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8 pb-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded bg-[#2a2a3a] text-[#ccc] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3a3a4a]"
                >
                  ← Trước
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 rounded transition ${
                        currentPage === pageNum
                          ? "bg-[#FFD875] text-black font-bold"
                          : "bg-[#2a2a3a] text-[#ccc] hover:bg-[#3a3a4a]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="text-[#999]">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="px-3 py-2 rounded bg-[#2a2a3a] text-[#ccc] hover:bg-[#3a3a4a]"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded bg-[#2a2a3a] text-[#ccc] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3a3a4a]"
                >
                  Tiếp →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
