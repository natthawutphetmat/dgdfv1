import React from 'react';

// ข้อมูลตัวอย่าง
const sampleData = [
  {
    id: 1,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '1.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 2,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '2.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 3,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '3.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 4,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '4.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 5,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '5.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 6,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '6.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 7,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '7.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 8,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '8.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 9,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '9.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 10,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '10.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  },
  {
    id: 11,
    name: 'โทรศัพท์มือถือ PG Phone V9',
    description: 'สมาร์ทโฟนจอใหญ่ ราคาถูก คุณภาพเยี่ยม',
    price: 1099,
    img: '11.jpg',
    content: 'รายละเอียดสินค้า PG Phone V9'
  },
  {
    id: 12,
    name: 'โทรศัพท์มือถือ PG Phone V10',
    description: 'สมาร์ทโฟนรุ่นใหม่ หน้าจอขนาด 6.5 นิ้ว',
    price: 1599,
    img: '12.jpg',
    content: 'รายละเอียดสินค้า PG Phone V10'
  }


];

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4">ยินดีต้อนรับสู่ร้านค้า PG Phone</h1>
          <p className="lead">สมาร์ทโฟนคุณภาพเยี่ยม ราคาสุดคุ้ม พร้อมบริการหลังการขายที่คุณมั่นใจได้</p>
          <p className="lead">
            โปรโมชั่นพิเศษ! ซื้อวันนี้รับส่วนลด 10% และของแถมมากมาย รีบสั่งซื้อตอนนี้ก่อนสินค้าหมด!
          </p>
        </div>
      </header>

      {/* พื้นที่สำหรับ Banner โปรโมท */}
      <section className="container text-center my-5">
        <div className="alert alert-success">
          📢 <strong>โปรโมชันพิเศษ!</strong> ซื้อโทรศัพท์มือถือ PG Phone ทุกรุ่นวันนี้ รับฟรีทันที! หูฟังบลูทูธสุดคุ้ม พร้อมประกันจอแตก 1 ปีเต็ม! 😍
        </div>
        <div className="alert alert-info">
          🚚 <strong>บริการจัดส่งฟรี!</strong> ทั่วประเทศภายใน 3 วันทำการ เก็บเงินปลายทางได้ ไม่มีค่าธรรมเนียมเพิ่มเติม!
        </div>
      </section>

      {/* Content ส่วนแสดงสินค้าของเรา */}
      <div className="container my-5">
        <h1 className="text-center mb-4">สินค้าแนะนำ</h1>
        <div className="row">
          {/* แสดงการ์ดสินค้าโดยใช้ข้อมูลจาก sampleData */}
          {sampleData.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                {/* รูปภาพสินค้า */}
                <img
                  src={`https://tennyr10.com/img/img/${product.img}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
           
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-success">ราคา: {product.price} บาท</p>
                </div>
              
                <div className="card-footer text-center">
              
                  <a href={`/product/${product.id}`} passHref className='btn btn-info' >
                  ดูรายละเอียดสินค้า
                  </a>
                  <a href="#" className="btn btn-success ml-2">
                    สั่งซื้อทันที!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">
            © 2023 ร้านค้า PG Phone - สมาร์ทโฟนคุณภาพเยี่ยม ราคาสุดคุ้ม พร้อมบริการหลังการขาย
          </p>
          <p>
            ติดต่อเรา: 022-970-360 | อีเมล: support@pgphone.com | Facebook: <a href="https://www.facebook.com/meedee88shopping/" className="text-white">Meedee88 Shopping</a>
          </p>
        </div>
      </footer>
    </>
  );
}