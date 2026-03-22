"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#14161E] border-t border-[#2A2A3A] py-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-[#FFD875] font-bold text-lg mb-4">Về HHPANDA</h3>
            <p className="text-[#999] text-sm leading-6">
              HHPANDA là nền tảng xem phim hoạt hình trung quốc và anime nhật bản hoàn toàn miễn phí, không quảng cáo xuyên tạc.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#FFD875] font-bold text-lg mb-4">Danh Mục</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Hoạt Hình Trung Quốc</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Anime Nhật Bản</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Drama Hàn Quốc</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Phim Lẻ Quốc Tế</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#FFD875] font-bold text-lg mb-4">Hỗ Trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Liên Hệ</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Báo Cáo Lỗi</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Yêu Cầu Phim</a></li>
              <li><a href="#" className="text-[#999] hover:text-[#FFD875] transition">Điều Khoản Dịch Vụ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#FFD875] font-bold text-lg mb-4">Kết Nối</h3>
            <div className="flex gap-3">
              <a href="https://t.me/hhpanda" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-[#2A2A3A] text-[#FFD875] rounded-full hover:bg-[#FFD875] hover:text-black transition">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
            <p className="text-[#999] text-xs mt-4">
              Liên Hệ: <span className="text-[#FFD875]">@rooster66789</span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A2A3A] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#999] text-sm">
              © 2024 - 2025 HHPANDA. All rights reserved.
            </p>
            <p className="text-[#999] text-xs mt-1">
              HHPANDA không chịu trách nhiệm về nội dung do người dùng cung cấp
            </p>
          </div>
          <div className="text-right text-[#999] text-xs">
            <p>Made with ❤️ for anime lovers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
