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
  const [clickCount, setClickCount] = useState(0);
  
  const openAffiliateLinks = () => {
    const newClickCount = (clickCount + 1) % 3;
    
    if (clickCount === 0) {
      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
    } else if (clickCount === 1) {
      window.open("https://www.tiktok.com/view/product/1731755371153688753?_svg=1&chain_key=%7B%22t%22%3A1%2C%22k%22%3A%22000000000000000007620112231788054279%22%2C%22sc%22%3A%22copy%22%7D&checksum=d8ff7d7e2eaf2567ddbe6f34cdc9939cbefd25478cf2feb07f97e0bbc8b19718&encode_params=MIIBUQQM0vHgN5DlCEo3ngKTBIIBLQrV5u6gbEbiTBdNkmnsSudWcaxuDORtfhQAB1qkocOpQCbuEdN6tykmZoBNi0NnaNIWvD-rehfYEhG6s-nznhA4qziEIoE_wIN3x3hzBb1XOoYxgsQHWEcGOVqHkpZUybZ288K2wu5zHs3HoL56PXJmRxtM4D0AlY0BUKm7lca2tMU21JIlM5-qsq5TdQRS6XqWqDmlynmcZ75hXaF5WbJAc8hSVDX0wIwzpwGIg5IbpM_-HQRpswBGAGbJGGv8dLJU_cDnmDKT67FA2Qg-LLlPItYKeySwJydcbtloYIEPMQMDjAkMG3x-xOuC_tv1hdSpJi9TqJh9ZyboiVLwDl5e4oCXXmxfBJk40L5JKIK_XMeDaklFlioO_bmQA3q2pGz6QaIEWsxYEcElQ_UEEOHtDam2CTa0DnDyn1GG2PI%3D&og_info=%7B%22title%22%3A%22HuyThanhJewelry+LNRAN+Qu%C3%A0+t%E1%BA%B8ng+l%C6%B0u+ni%E1%BB%87m+0%2C100+ch%E1%BB%89%5C%2FV%E1%BB%89+v%C3%A0ng+24K+LONG+V%C6%B0%E1%BB%A3ng+Ph%C3%A1t+H%C3%ACnh+R%E1%BA%AFn%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F720a70a2246a4ee7b20af2ab760ffd73~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Fdr%3D15582%26t%3D555f072d%26ps%3D933b5bde%26shp%3D7745054a%26shcp%3D9b759fb9%26idc%3Dmy%26from%3D2001012042%22%7D&sec_user_id=MS4wLjABAAAAY6jybaoj56vbYTSGzr0jalnnoJCTqLckqekDgSKtPIjqwQhnyc6UmTVHS6CAuYmC&share_app_id=1180&share_link_id=1491DFCF-9A93-4B34-A473-FDC80F3C9C80&share_region=VN&social_share_type=15&timestamp=1774195651&trackParams=%7B%22enable_shop_tab_popup%22%3A1%2C%22device_id%22%3A%227275834766631454226%22%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%7D&tt_from=copy&u_code=D4D%3A8I9L19JBI1&ug_btm=b6880%2Cb6661&unique_id=ngodinhthang5&user_id=6652947847447576577&utm_campaign=client_share&utm_medium=ios&utm_source=copy", "_blank");
    } else if (clickCount === 2) {
      window.open("https://s.lazada.vn/s.7GEmz?cc&t=p-i3Bxbqr-sFQ8YGp", "_blank");
    }
    
    setClickCount(newClickCount);
  };
  
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
                    onClick={() => openAffiliateLinks()}
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
                  <div 
                    className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer"
                    onClick={() => openAffiliateLinks()}
                  >
                    <p className="text-[#FFD875]">🔥 Phim Hot Nhất</p>
                  </div>
                  <div 
                    className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer"
                    onClick={() => openAffiliateLinks()}
                  >
                    <p className="text-[#FFD875]">✨ Phim Mới Nhất</p>
                  </div>
                  <div 
                    className="bg-[#2a2a3a] p-3 rounded hover:bg-[#3a3a4a] cursor-pointer"
                    onClick={() => openAffiliateLinks()}
                  >
                    <p className="text-[#FFD875]">⭐ Phim Đánh Giá Cao</p>
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
                  onClick={() => openAffiliateLinks()}
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
