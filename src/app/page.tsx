"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hasClickedAff, setHasClickedAff] = useState(false); // Theo dõi click lần đầu
  const [mounted, setMounted] = useState(false);

  // Load trạng thái từ localStorage khi component mount
  useEffect(() => {
    setMounted(true);
    const clicked = localStorage.getItem("yanhh3d_first_click");
    if (clicked === "true") {
      setHasClickedAff(true);
    }
  }, []);

  const handleClick = () => {
    if (!hasClickedAff) {
      // Lần đầu: Mở aff Shopee ở tab mới
      window.open(
        "https://s.shopee.vn/40bwb41ZpA?sub_id=rophim-first", // <-- Giữ link của bạn, thêm sub_id track nếu muốn
        "_blank",
        "noopener,noreferrer"
      );
      // Đánh dấu đã click lần đầu (lưu vào localStorage)
      setHasClickedAff(true);
      localStorage.setItem("yanhh3d_first_click", "true");
    } else {
      // Lần sau: Chuyển hướng vào Shopee
      // router.push("/phimhay");
      window.open("https://s.shopee.vn/8086QedA5U", "_blank");
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full bg-[url('/home-background.jpg')] bg-cover bg-center">
      <div className="relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-white text-center xl:mt-[300px] mt-[100px] xl:mb-[128px] lg:mb-[90px] mb-[70px]">
          <div className="inset-0 bg-[#1B1B24] rounded-[40px] flex flex-col items-center justify-center gap-[40px] 2xl:py-[96px] xl:py-[80px] lg:py-[64px] md:py-[48px] sm:py-[40px] py-[50px] 2xl:px-[128px] xl:px-[96px] lg:px-[72px] md:px-[48px] sm:px-[40px] px-[46px] ">
            <Image
              src="/logo.svg"
              alt="HHPANDA - Xem Phim Hoạt Hình Trung Quốc - Anime Nhật Bản Hay"
              className="object-cover 2xl:w-[260px] xl:w-[250px] lg:w-[230px] md:w-[220px] sm:w-[200px] w-[180px]"
              width={260}
              height={60}
            />
            <p className="2xl:text-[41.6px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] text-center">
              Xem Hoạt Hình Trung Quốc & Anime Nhật Bản Hay - Miễn Phí & Liên Tục
            </p>
            <button
              onClick={handleClick}
              className="flex sm:px-[32px] max-[650px]:w-full flex justify-center sm:py-[15.2px] py-[15px] cursor-pointer text-[20px] font-bold items-center gap-2 text-black bg-gradient-to-tr rounded-[32px] from-[#fecf59] to-[#fff1cc] hover:opacity-90 transition-opacity"
            >
              Xem Ngay
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#14161E]">
        <div className="container mx-auto 2xl:px-[300px] xl:px-[200px] px-4 ">
          <h5 className="leading-7 text-[#cfcfcf]">
            HHPANDA là nền tảng xem phim hoạt hình trung quốc và anime nhật bản hoàn toàn miễn phí. Chúng tôi cung cấp các bộ phim, series anime chất lượng cao với phụ đề tiếng Việt cập nhật liên tục. Tất cả nội dung đều được cập nhật theo thời gian thực, giúp bạn không bỏ lỡ bất kỳ tập phim nào.
          </h5>
          <h2 className="text-[#FFD875] text-[24.64px] font-semibold py-[24px]">
            HHPANDA – Nền Tảng Xem Hoạt Hình Trung Quốc & Anime Nhật Bản Hay Nhất
          </h2>
          <h5 className="text-[#cfcfcf] leading-7">
            <span className=" font-semibold">HHPANDA</span> là một trang web xem phim hoạt hình trung quốc và anime nhật bản miễn phí, không quảng cáo xuyên tạc. Chúng tôi có khoảng vài ngàn bộ phim và series anime với chất lượng từ HD đến 4K. Mỗi ngày, chúng tôi cập nhật các tập phim mới nhất, giúp bạn luôn cập nhật với những bộ phim hot nhất.
          </h5>
          <h2 className="text-[24.64px] font-semibold pt-[60px] pb-[20px]">
            Kho Phim & Anime Hoạt Hình Khổng Lồ Cập Nhật Mỗi Ngày
          </h2>
          <h5 className="text-[#cfcfcf] leading-7">
            Với hơn 10.000+ bộ hoạt hình trung quốc, anime nhật bản, drama hàn quốc và phim lẻ quốc tế, <span className="inline font-semibold">HHPANDA</span> có thể đáp ứng thị hiếu của tất cả khán giả. Từ các bộ anime kinh điển đến những series mới nhất, tất cả đều có trên nền tảng của chúng tôi. Hơn nữa, <span className="inline font-semibold">tất cả nội dung đều miễn phí</span> và được phát hành nhanh nhất.
          </h5>
          <h2 className="text-[24.64px] font-semibold pt-[60px] pb-[20px]">
            Chất Lượng Video HD 4K - Trải Nghiệm Xem Phim Cực Tuyệt
          </h2>
          <h5 className="text-[#cfcfcf] leading-7">
            Chúng tôi cam kết mang đến trải nghiệm xem phim tốt nhất với chất lượng video HD 720p, Full HD 1080p, và 4K Ultra HD. Máy chủ của chúng tôi ổn định, không tình trạng lag hay giật. Bạn có thể tìm kiếm phim nhanh, tiện lợi và xem mà không lo lắng về chất lượng.
          </h5>
        </div>
      </div>
    </div>
  );
}