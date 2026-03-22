"use client";
import {
  faBars,
  faCaretDown,
  faDownload,
  faSearch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DropdownType from "./DropdownType";
import DropdownNation from "./DropdownNation";
import DropdownMenuMobile from "./DropdownMenuMobile";
import ModalLogin from "./ModalLogin";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [openType, setOpenType] = useState(false);
  const [openNation, setOpenNation] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openBarMenu, setOpenBarMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();
  
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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (search.trim()) {
    //   router.push(`/search?query=${encodeURIComponent(search.trim())}`);
    // }
    openAffiliateLinks();
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
    <header
      className={`fixed top-0 left-0 w-full px-[16px] z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0F111A] bg-opacity-90" : "bg-transparent"
      } text-white`}
    >
      <div className="container max-w-full">
        <div
          className={`flex items-center justify-between py-3 mx-auto gap-[32px] ${
            scrolled ? "h-[70px]" : "h-[70px]"
          }`}
        >
          {openSearch === false ? (
            <div className="flex items-center">
              <div>
                {openBarMenu === true ? (
                  <a
                    onClick={() => setOpenBarMenu(!openBarMenu)}
                    className="cursor-pointer pr-[25px] min-[1360px]:hidden"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </a>
                ) : (
                  <a
                    onClick={() => setOpenBarMenu(!openBarMenu)}
                    className="cursor-pointer pr-[22px] min-[1360px]:hidden"
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </a>
                )}
                {openBarMenu ? <DropdownMenuMobile /> : null}
              </div>
              <a
                onClick={() => openAffiliateLinks()}
                className="cursor-pointer"
              >
                <img
                  src="/logo.svg"
                  alt="Footer Image"
                  className="h-[40px] max-w-[135px]"
                />
              </a>
              {/* onClick={() => router.push("/phimhay")} */}
            </div>
          ) : null}
          <div className="w-full max-[1360px]:hidden max-w-[368px]">
            <form className="flex w-full items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm phim, diễn viên"
                className="px-[48px] max-[1450px]:px-[15px] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[08px] bg-[#23232b] bg-[rgba(255,255,255,.08)]  text-white focus:outline-none"
              />
            </form>
          </div>
          <div className="flex max-[1360px]:hidden items-center ml-auto gap-8">
            <div className="flex items-center gap-[8px] text-[13px] cursor-pointer">
              <div className="whitespace-nowrap">
                <a
                  onClick={() => openAffiliateLinks()}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Chủ đề
                </a>
                {/* onClick={() => router.push("/chu-de")} */}
              </div>
              <div className="whitespace-nowrap relative">
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
              <div className="whitespace-nowrap">
                <a
                  onClick={() => openAffiliateLinks()}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Phim lẻ
                </a>
                {/* onClick={() => router.push("/phim-le")} */}
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => openAffiliateLinks()}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Phim bộ
                </a>
                {/* onClick={() => router.push("/phim-bo")} */}
              </div>
              <div className="whitespace-nowrap">
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
              <div className="whitespace-nowrap relative">
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
              <div className="whitespace-nowrap">
                <a
                  onClick={() => openAffiliateLinks()}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Diễn viên
                </a>
                {/* onClick={() => router.push("/dien-vien")} */}
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => openAffiliateLinks()}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Lịch chiếu
                </a>
                {/* onClick={() => router.push("/lich-chieu")} */}
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
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
            <a
              onClick={showModal}
              className="flex px-[12px]  py-[8px] rounded-full bg-[#fff] items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  fontSize: "14px",
                  paddingLeft: "4px",
                  color: "#191B24",
                }}
              />

              <p className="text-[14px] whitespace-nowrap font-bold text-[#191B24]">
                Thành viên
              </p>
            </a>
          </div>
          <div
            className={`hidden max-[1360px]:block absolute z-100 ${
              openSearch === true ? "left-[12px]" : ""
            } right-[12px] top-[12px]`}
          >
            <div className="flex items-center justify-between">
              <form
                className={`flex  ${
                  openSearch === true
                    ? "max-[1360px]:block"
                    : "max-[1360px]:hidden"
                } w-full items-center`}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm kiếm phim, diễn viên"
                  className="px-[48px] max-[1450px]:px-[15px] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[08px] bg-[#23232b] bg-[rgba(255,255,255,.08)]  text-white focus:outline-none"
                />
              </form>
              <div className="ml-auto h-[46px] flex items-center">
                {openSearch === true ? (
                  <a
                    onClick={() => setOpenSearch(!openSearch)}
                    className="cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        fontSize: "25px",
                        paddingLeft: "10px",
                      }}
                    />
                  </a>
                ) : (
                  <a
                    onClick={() => setOpenSearch(!openSearch)}
                    className="cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{
                        fontSize: "18px",
                        paddingLeft: "10px",
                      }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin setOpen={setOpen} open={open} />
    </header>
  );
}
