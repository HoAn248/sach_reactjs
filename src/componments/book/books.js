const data = [
    {
        id: 1,
        name: "Nhà Giả Kim (Tái Bản 2020)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp",
        star: 5,
        price: 45000,
        author: "Paulo Coelho",
        address: "Hà Nội",
        trademark: "Nhà sách Fahasa",
        status: 'news',
        th: 'Uyên Loan'
    },
    {
        id: 2,
        name: "So sánh giá Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội",
        img: "https://salt.tikicdn.com/cache/w300/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg",
        star: 4,
        price: 105000,
        author: "Diệp Hồng Vũ",
        address: "Hà Nội",
        trademark: "Tiki Trading",
        status: 'olds',
        th: 'Campus'
    },
    {
        id: 3,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    },
    {
        id: 4,
        name: "Giải Thích Ngữ Pháp Tiếng Anh (Với Bài Tập Và Đáp Án) (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg.webp",
        star: 4.8,
        price: 147000,
        author: "Mai Lan Hương, Hà Thanh Uyên",
        address: "Hồ Chí Minh",
        trademark: "Nhà sách Thanh Hà",
        status: 'old',
        th: 'Văn Lang'
    },
    {
        id: 5,
        name: "Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép (Tặng Kèm 1 Bộ Bookmark Gồm 4 Cái)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/0c/ff/1f/091c739d2cc4c1b2a3a9c5025930adcc.jpg.webp",
        star: 3,
        price: 84000,
        author: "Yoo Eun Jung",
        address: "Đà Nẵng",
        trademark: "Tiệm Sách Hoa Hồng",
        status: 'news',
        th: 'Văn Lang'
    },
    {
        id: 6,
        name: "Giải Thích Ngữ Pháp Tiếng Anh (Với Bài Tập Và Đáp Án) (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg.webp",
        star: 4.8,
        price: 147000,
        author: "Mai Lan Hương, Hà Thanh Uyên",
        address: "Hồ Chí Minh",
        trademark: "Nhà sách Thanh Hà",
        status: 'news',
        th: 'Văn Lang'
    },
    {
        id: 7,
        name: "So sánh giá Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội",
        img: "https://salt.tikicdn.com/cache/w300/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg",
        star: 4,
        price: 105000,
        author: "Diệp Hồng Vũ",
        address: "Gia Lai",
        trademark: "Tiki Trading",
        status: 'olds',
        th: 'Văn Lang'
    },
    {
        id: 8,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Văn Lang'
    },
    {
        id: 9,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    },
    {
        id: 10,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    },
    {
        id: 11,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    },
    {
        id: 12,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    },
    {
        id: 13,
        name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg.webp",
        star: 5,
        price: 116000,
        author: "Cao Minh",
        address: "Hà Nội",
        trademark: "Minhhabooks",
        status: 'news',
        th: 'Thiên Long'
    }
]
export default data;

{/*
- id
- tên sách
- ảnh sách
- đánh giá sách
- Giá sách
- Tác giả
- Địa chỉ bán sách
- Thương hiệu sách


*/}