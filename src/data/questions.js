export const questions = [
  {
    id: 1,
    question: "Bé nhà mình có thích tháo lắp đồ chơi để xem bên trong có gì không?",
    trait: "Logic/Engineering",
    options: [
        { text: "Rất thích", score: 3 },
        { text: "Thỉnh thoảng", score: 2 },
        { text: "Không thích", score: 1 }
    ]
  },
  {
    id: 2,
    question: "Bé có hay kể lại những câu chuyện thú vị hoặc bịa ra những câu chuyện mới không?",
    trait: "Linguistic/Literature",
    options: [
        { text: "Thường xuyên", score: 3 },
        { text: "Thỉnh thoảng", score: 2 },
        { text: "Ít khi", score: 1 }
    ]
  },
  {
    id: 3,
    question: "Bé có nhạy cảm với âm nhạc, thích hát hoặc gõ nhịp theo bài hát không?",
    trait: "Art/Music",
    options: [
        { text: "Rất thích", score: 3 },
        { text: "Bình thường", score: 2 },
        { text: "Không quan tâm", score: 1 }
    ]
  },
  {
    id: 4,
    question: "Bé có thích các hoạt động vận động, chạy nhảy, thể thao không?",
    trait: "Physical/Sports",
    options: [
        { text: "Rất năng động", score: 3 },
        { text: "Bình thường", score: 2 },
        { text: "Thích ngồi yên", score: 1 }
    ]
  },
  {
    id: 5,
    question: "Bé có thích quan sát cây cối, con vật hoặc các hiện tượng tự nhiên không?",
    trait: "Naturalist/Science",
    options: [
        { text: "Rất thích", score: 3 },
        { text: "Có chút ít", score: 2 },
        { text: "Không thích", score: 1 }
    ]
  },
  {
    id: 6,
    question: "Bé có dễ dàng kết bạn và thường là người dẫn đầu trong nhóm bạn không?",
    trait: "Social/Leadership",
    options: [
        { text: "Rất đúng", score: 3 },
        { text: "Tương đối", score: 2 },
        { text: "Không đúng lắm", score: 1 }
    ]
  },
  {
    id: 7,
    question: "Bé có thích vẽ tranh, tô màu hoặc cắt dán thủ công không?",
    trait: "Art/Design",
    options: [
        { text: "Rất đam mê", score: 3 },
        { text: "Thích", score: 2 },
        { text: "Không thích", score: 1 }
    ]
  },
  {
    id: 8,
    question: "Bé có hay hỏi 'tại sao' và muốn tìm hiểu nguyên nhân của mọi việc không?",
    trait: "Logic/Science",
    options: [
        { text: "Suốt ngày hỏi", score: 3 },
        { text: "Thỉnh thoảng", score: 2 },
        { text: "Ít khi", score: 1 }
    ]
  },
  {
    id: 9,
    question: "Bé có thích chơi các trò chơi giải đố, xếp hình, sudoku không?",
    trait: "Logic/Math",
    options: [
        { text: "Rất thích", score: 3 },
        { text: "Bình thường", score: 2 },
        { text: "Không thích", score: 1 }
    ]
  },
  {
    id: 10,
    question: "Bé có biết chia sẻ đồ chơi và quan tâm đến cảm xúc của người khác không?",
    trait: "Social/Empathy",
    options: [
        { text: "Rất quan tâm", score: 3 },
        { text: "Có lúc có", score: 2 },
        { text: "Ít quan tâm", score: 1 }
    ]
  }
];

export const traitsMapping = {
  "Logic/Engineering": {
    field: "Khoa học Kỹ thuật & Công nghệ",
    subjects: ["Toán học", "Tin học", "Vật lý", "STEAM"]
  },
  "Linguistic/Literature": {
    field: "Xã hội & Ngôn ngữ",
    subjects: ["Tiếng Việt", "Tiếng Anh", "Văn học", "Lịch sử"]
  },
  "Art/Music": {
    field: "Nghệ thuật & Sáng tạo",
    subjects: ["Âm nhạc", "Mỹ thuật", "Biểu diễn"]
  },
  "Physical/Sports": {
    field: "Thể thao & Vận động",
    subjects: ["Thể dục", "Bơi lội", "Võ thuật"]
  },
  "Naturalist/Science": {
    field: "Khoa học Tự nhiên & Môi trường",
    subjects: ["Sinh học", "Địa lý", "Khoa học"]
  },
  "Social/Leadership": {
    field: "Quản lý & Lãnh đạo",
    subjects: ["Kỹ năng sống", "Hoạt động Đội/Nhóm", "Giáo dục công dân"]
  },
  "Art/Design": {
    field: "Thiết kế & Kiến trúc",
    subjects: ["Mỹ thuật", "Mô hình", "Đồ họa"]
  },
  "Logic/Science": {
    field: "Nghiên cứu & Khoa học",
    subjects: ["Khoa học", "Toán", "Thí nghiệm"]
  },
  "Logic/Math": {
    field: "Toán học & Tư duy",
    subjects: ["Toán tư duy", "Cờ vua", "Lập trình"]
  },
  "Social/Empathy": {
    field: "Y tế & Cộng đồng",
    subjects: ["Sinh học", "Giáo dục công dân", "Tâm lý"]
  }
};
