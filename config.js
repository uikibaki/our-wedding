/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "송찬호",
    nameEn: "Groom",
    father: "송재섭",
    mother: "김근순",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "김의진",
    nameEn: "Bride",
    father: "김성락",
    mother: "유혜정",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "14:00",
    venue: "동서울 웨딩홀",
    address: "경기도 성남시 수정구 복정로76",
    tel: "031-721-6700",
    mapLinks: {
      kakao: "https://kko.to/RKFNMZiHes",
      naver: "https://map.naver.com/p/entry/place/33575815?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1282715&lat=37.4575233"
    }
  },

 // ── 인사말 ──
 greeting: {
   title: "소중한 분들을 초대합니다",
   content: "서로 다른 두 사람이 만나\n이제 같은 방향을 바라보게 되었습니다.\n\n그 시작을 함께해 주시면 감사하겠습니다."
},

 // ── 우리의 이야기 ──
 story: {
   title: "우리의 이야기",
   content: "묵묵하고 성실한 사람을 만나\n조용하지만 단단한 마음에 끌렸습니다.\n\n귀엽고 통통 튀는 사람을 만나\n밝은 웃음에 마음이 움직였습니다.\n\n서로 다른 두 사람이 만나\n이제는 같은 방향으로 걸어가려 합니다.\n\n저희의 시작을 따뜻하게 지켜봐 주세요.\n함께하지 못하시더라도\n전해주시는 마음을 소중히 간직하겠습니다."
 },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "송찬호", bank: "국민은행", number: "624802-01-499283" },
      { role: "어머니", name: "김근순", bank: "우리은행", number: "676925-96-100941" }
    ],
    bride: [
      { role: "신부", name: "김의진", bank: "우리은행", number: "1002-147-017750" },
      { role: "아버지", name: "김성락", bank: "우리은행", number: "422-08-001968" },
      { role: "어머니", name: "유혜정", bank: "우리은행", number: "457001-01-115568" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "송찬호 ♥ 김의진 결혼합니다",
    description: "2026년 6월 13일, 소중한 분들을 초대합니다."
  }
};
