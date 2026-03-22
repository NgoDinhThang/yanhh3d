import {
  faCaretDown,
  faDownload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropdownType from "./DropdownType";
import DropdownNation from "./DropdownNation";
import ModalLogin from "./ModalLogin";

export default function DropdownMenuMobile() {
  const router = useRouter();
  const [openType, setOpenType] = useState(false);
  const [openNation, setOpenNation] = useState(false);
  const [open, setOpen] = useState(false);
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
  const handleDripdownType = () => {
    setOpenType(!openType);
    setOpenNation(false);
  };

  const handleDripdownNation = () => {
    setOpenNation(!openNation);
    setOpenType(false);
  };
  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className="absolute min-[1360px]:hidden mt-[16px] p-[24px] max-w-[360px] w-full left-[10px] bg-[rgba(59,73,135,.95)] rounded-[8px] shadow-lg z-50">
      <div>
        <button
          onClick={showModal}
          className="flex px-[12px] w-full justify-center py-[8px] rounded-full bg-[#fff] items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{
              fontSize: "13px",
              paddingLeft: "4px",
              color: "#191B24",
            }}
          />
          <p className="text-[13px] whitespace-nowrap font-bold text-[#191B24]">
            Thành viên
          </p>
        </button>
      </div>
      <div className="flex mt-[10px] p-[8px] items-center gap-2 bg-[#ffffff11] rounded-[10px] cursor-pointer">
        <FontAwesomeIcon
          icon={faDownload}
          style={{
            fontSize: "20px",
            paddingRight: "12px",
            color: "#FFD875",
          }}
        />
        <div>
          <p className="text-[12px] whitespace-nowrap text-[#f8f9fa]">
            Tải ứng dụng
          </p>
          <span className="text-[13px] font-bold">Yanhh3d</span>
        </div>
      </div>
      <div className="ml-auto">
        <div className="grid grid-flow-col gap-[8px] grid-rows-4 text-[13px] cursor-pointer">
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Chủ đề
            </a>
            {/* onClick={() => router.push("/chu-de")} */}
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Phim lẻ
            </a>
            {/* onClick={() => router.push("/phim-le")} */}
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              <span className="text-black bg-[#FFD875] text-[12px] rounded p-[2px] mr-[10px]">
                New
              </span>
              Xem chung
            </a>
            {/* onClick={() => router.push("/xem-chung")} */}
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Diễn viên
            </a>
            {/* onClick={() => router.push("/dien-vien")} */}
          </div>
          <div className="whitespace-nowrap py-[8px] relative">
            <a
              onClick={handleDripdownType}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Thể loại
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ fontSize: "14px", paddingLeft: "4px" }}
              />
            </a>
            {openType ? <DropdownType /> : null}
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Phim bộ
            </a>
            {/* onClick={() => router.push("/phim-bo")} */}
          </div>
          <div className="whitespace-nowrap py-[8px] relative">
            <a
              onClick={handleDripdownNation}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Quốc gia
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ fontSize: "14px", paddingLeft: "4px" }}
              />
            </a>
            {openNation ? <DropdownNation /> : null}
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => openAffiliateLinks()}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Lịch chiếu
            </a>
            {/* onClick={() => router.push("/lich-chieu")} */}
          </div>
        </div>
      </div>
      <ModalLogin setOpen={setOpen} open={open} />
    </div>
  );
}
