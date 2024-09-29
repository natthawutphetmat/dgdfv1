"use client";
import Swal from 'sweetalert2'

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // นำเข้า Image Component จาก next/image
import QRCode from 'qrcode.react'; // นำเข้า QRCode จาก qrcode.react
import generatePayload from 'promptpay-qr'; // นำเข้า generatePayload จาก promptpay-qr

const sampleData = [
  {
    id: 1,
    name: 'กัญชาสายพันธุ์ใดรุนแรงที่สุด',
    description: 'ในขณะที่ THC อาจจะเป็นสารหลักที่ขับเคลื่อนความรุนแรงของกัญชา สาร THC คืออะไร? แต่เทอร์ปีนส์ก็มีส่วนสำคัญที่ช่วยเพิ่มและส่งเสริมความเมาของกัญชาสายพันธุ์นั้น ๆ  เทอร์ปีนส์นั้นคือสสารกลิ่นแรงที่เป็นตัวสร้างกลิ่นเฉพาะตัวให้กับกัญชาสายพันธุ์ต่าง ๆ (เช่นเดียวกับมายร์ซีน คาริโอไฟลีน และลิโมนีน) และสายพันธุ์กัญชาที่เปี่ยมไปด้วยเทอร์ปีนส์และ THC นั้นมักจะส่งผลดีกว่าพันธุ์ที่มีความหลาก',
    price: 1870 ,
    img: '1.webp',
    content: 'ขาอ่อนปวกเปียกไปเลยครับ แถมร่างกายก็ผ่อนคลาย มันทำให้ผมเห็นทุกอย่างชัดเจนแถมยังเพิ่มความคิดสร้างสรรค์ให้อีกด้วย'
  },
  {
    id: 2,
    name: 'สายพันธุ์ GSC',
    description: 'GSC และลูกหลานพันธุ์ผสมกับคุกกี้อันหลายของมันนั้นไต่เต้าความนิยมขึ้นมาได้ไกลในช่วงปีกลาย ถือว่าเหมาะสมทีเดียว คุณจะสามารถสัมผัสได้ถึงความสุขอันเอ่อล้นราวกับคลื่นซัดซาดทั้งกายใจและความอุ่นกายสบายใจไปนานหลายชั่วโมง',
    price: 1870,
    img: '2.webp',
    content: 'ขาอ่อนปวกเปียกไปเลยครับ แถมร่างกายก็ผ่อนคลาย มันทำให้ผมเห็นทุกอย่างชัดเจนแถมยังเพิ่มความคิดสร้างสรรค์ให้อีกด้วย'
  },
  {
    id: 3,
    name: 'สายพันธุ์ Kosher Kush',
    description: 'พันธุ์ Kosher Kush ถือกำเนิดขึ้นบนโลกในช่วงปี ค.ศ. 2010 และชนะรางวัลประกวดกัญชาอยู่เรื่อยมา ประวัติกรรมพันธุ์ของสายพันธุ์นี้ไม่ปรากฏแน่ชัด แต่ผู้ที่เพาะพันธุ์มันขึ้นมาได้นั้นถือเป็นผู้ชนะในด้านพันธุกรรมโดยแท้จริง เพียงแค่มองเห็นเรซินที่ปกคลุมอยู่โดยรอบดอกก็อาจบอกได้ว่ากัญชาสายพันธุ์อินดิคานี้ไม่ได้มาเล่น ๆ',
    price: 1870,
    img: '3.webp',
    content: 'ผมไม่รู้สึกหน้า…หรือแขน หรือเท้า หรืออะไรเลยครับ เหมือนกับว่าผมเป็นสสารไร้น้ำหนักที่สติพร่าเลือนและล่องลอยอยู่บนลานกว้าง'
  },
  {
    id: 4,
    name: 'สายพันธุ์ Ghost OG',
    description: 'โกสต์โอจีเป็นสายพันธุ์กัญชาที่เพาะขึ้นมาเพื่อความรู้สึกเคลิบเคลิ้มแบบอ็อกเทนสูง ตัวดอกปกคลุมไปด้วยเรซินสีขาวสะอาด สายพันธุ์นี้ถูกตัดออกจากสายโอจีคุชแบบดั้งเดิม เพราะความรุนแรงของโกสโอจีนั้นมีผลมาจากเทอร์ปีนส์หลากหลายที่ผสมผสานกันและส่งเสริม THC ที่รุนแรง ลองหามุมนั่งสบาย ๆ และปล่อยตัวปล่อยใจไปกับความเคลิบเคลิ้มอันรุนแรงที่เหมาะจะใช้เพื่อการผ่อนคลาย',
    price: 1870,
    img: '4.webp',
    content: 'เทอร์ปีนส์ตัวหลัก ไมร์ซีน ลิโมนีน คาริโอไฟลีน THC เฉลี่ย 20%'
  },
  {
    id: 5,
    name: 'สายพันธุ์ Bruce Banner',
    description: 'Bruce Banner ได้รับการตั้งชื่อตามร่างจริงของฮัลค์ ที่รุนแรงสมชื่อเลยทีเดียว พันธุ์นี้เป็นลูกผสมที่มี THC สูงมาก ได้รับการขนานนามจากนิตยสาร High Times ว่าเป็นพันธุ์กัญชาที่แรงที่สุดในปี 2014 หลังจากชนะการประกวดคานนาบิส คัพ ในเด็นเวอร์ปี 2013 ทำให้กลานเป็นพันธุ์ขึ้นชื่อไปในทันที พลังที่ได้รับมาจากยีนส์ของสายพันธุ์ OG Kush และ Strawberry Diesel ทำให้ BB ส่งผลทำให้มีความเปรมปรีดิ์แบบหนักหน่วงและทำให้ร่างกายอยู่ในภาวะผ่อนคลายอย่างล้ำลึกอีกด้วย',
    price: 1870,
    img: '5.webp',
    content: 'เทอร์ปีนส์ตัวหลัก ไมร์ซีน ลิโมนีน คาริโอไฟลีน THC เฉลี่ย 23%'
  },
  {
    id: 6,
    name: 'สายพันธุ์ Ghost Train Haze',
    description: 'พันธุ์นี้ถูกเพาะขึ้นโดยกลุ่ม Rare Darkness Seeds สายพันธุ์ Ghost Train Haze นี้เป็นพันธุ์ที่มีชีวิตชีวาและสดใสเป็นอย่างยิ่ง มันได้รับยีนส์มาจากพันธุ์ Ghost OG และ Nevil’s Wreck ทำให้ความมึนเมานั้นพุ่งเป้าไปที่สมองโดยตรง ช่วยเพิ่มสมาธิและความคิดสร้างสรรค์',
    price: 1870,
    img: '6.webp',
    content: 'ปฏิกิริยาแรกของผมคือแหกปากตะโกน มันแรงเสียจนแทบจะบ้า แต่ก็นุ่มและหอมกลิ่นซีตรัส แต่แรงมากครับ ผมบอกไปหรือยังครับว่ามันแรง มันแรงมากจริง ๆ เป็นพันธุ์ซาติวาที่เหนือระดับจริง ๆ ทำเอาผมรู้สึกเหมือนเป็นคนเพิ่งเริ่มสูบเลย ระวังกันนะครับ มันแรงมากจริง ๆ'
  },
  {
    id: 7,
    name: 'สายพันธุ์ Chemdog',
    description: 'Chemdog เป็นสายพันธุ์คลาสสิคที่มีฐานแฟนคลับเหนียวแน่นเพราะความรุนแรง Chemdog แม้จะมีกลิ่นน้ำมันที่รุนแรงแบบเฉพาะตัวแต่ก็ให้รสชาติที่ลืมไม่ลงแถมความเมาที่เติมพลัง ช่วยเพิ่มความคิดสร้างสรรค์และลดความเครียดได้ดี',
    price: 1870,
    img: '7.webp',
    content: 'ผมรู้สึกเหมือนอยู่ในน้ำเกรวี่ และผมมีความสุขมาก'
  },
  {
    id: 8,
    name: 'สายพันธุ์ Original Glue',
    description: 'Original Glue ได้ชื่อนี้เพราะความเหนียวของดอกที่ชุ่มไปด้วยเรซิน ความรุนแรงของสายพันธุ์นี้เป็นที่เลื่องลือ พร้อมยังมีรางวัลคานนาบิส คัพ อีกหลายครั้งเป็นเครื่องยืนยันถึงความสุดยอด แต่เราคิดว่าคุณคงไม่การข้อพิสูจน์อะไรเท่าไรเมื่อคุณล้มตัวลงบนโซฟาและนอนเคลิบเคลิ้มอย่างเปี่ยมสุข',
    price: 1870,
    img: '8.webp',
    content: 'เทอร์ปีนส์ตัวหลัก คาริโอไฟลีน ลิโมนีน ไมร์ซีน THC เฉลี่ย 20%'
  },
  {
    id: 9,
    name: 'สายพันธุ์ The White',
    description: 'ตั้งชื่อพันธุ์ตามเรซินที่เปลี่ยนเป็นคริสตัลสีขาวครอบดอกตูมเอาไว้ The White เป็นพันธุ์ฟ้าประทานสำหรับบรรดานักเพาะที่ต้องการนำความรุนแรงจากยีนส์ของมันไปใช้ The White มอบความรู้สึกเปี่ยมสุขที่หนักหน่วงราวกับพายุเสียจนทำให้ร่างกายต้องผ่อนคลายเพราะยอมจำนน',
    price: 1870,
    img: '9.webp',
    content: 'เทอร์ปีนส์ตัวหลัก คาริโอไฟลีน ไมร์ซีน ลิโมนีน THC เฉลี่ย 21%'
  },
  {
    id: 10,
    name: 'สายพันธุ์ Death Star',
    description: 'เมื่อ Sensi Star และ Sour Diesel มารวมพลังหลอนประสาทกัน ก่อให้เกิดเป็นลูกผสมนาม Death Star ที่สั่งให้คุณต้องชิลด้วยความสุขอันเปี่ยมล้นและฤทธิ์ระงับประสาทของตัวมัน',
    price: 1870,
    img: '10.webp',
    content: 'ไม่มีทางเลยที่คนอื่นจะไม่รู้ว่าคุณเมา Death Star อยู่ ผมกับเพื่อนไปซื้อต้นคริสมาสต์กันในวันที่หนาวโคตร ๆ เราใช้เวลาไป 45 นาทีกว่าจะเลือกต้นไม้ได้…มันคือต้นแรกที่เห็นนั่นแหละ แล้วเราก็ไปต่อกันที่บาร์ ผมนึกว่ากระจกเป็นหน้าต่างไปเสียฉิบ'
  },
  {
    id: 11,
    name: 'สายพันธุ์ White Fire OG',
    description: 'ลูกผสมของ The White และ Fire OG White Fire OG (หรือที่รู้จักกันในนาม WiFi OG) ไม่ได้มาเล่น ๆ ฤทธิ์ทำให้มีความสุขนั้นจะส่งคุณล่องลอยไปกับหมู่เมฆพร้อมความรู้สึกอันแสนหวานที่จะทำให้ความคิดสร้างสรรค์และความสุขของคุณทั่งท้นออกมา',
    price: 1870,
    img: '11.webp',
    content: 'เทอร์ปีนส์ตัวหลัก ลิโมนีน ไมร์ซีน คาริโอไฟลีน THC เฉลี่ย 20.5%'
  }
  


];

export default function ProductDetailPage({ params }) {
  const [quantity, setQuantity] = useState(1); // state สำหรับเก็บจำนวนหน่วยสินค้า
  const [showForm, setShowForm] = useState(false); // state สำหรับแสดงฟอร์มกรอกข้อมูล
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: ''
  }); // state สำหรับเก็บข้อมูลที่ผู้ใช้กรอก


  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qrCode, setQrCode] = useState("");


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState("");
  const [total, setTotal] = useState(0);
  const [myok, setMyok] = useState([]);
  





  useEffect(() => {
   
const amount = total;
    const qrCodeData = generatePayload("1969800077553", {amount});
    setQrCode(qrCodeData);



    setLoading(false); 

  }
);


  if (loading) {
    return <p>กำลังโหลดข้อมูล...</p>;  
  }

  const id = parseInt(params.id); // แปลง id จาก params เป็นตัวเลข
  const product = sampleData.find((item) => item.id === id); // ค้นหาสินค้าที่มี id ตรงกับ params.id

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h1>ไม่พบสินค้าที่คุณต้องการดู</h1>
        <p>กรุณากลับไปหน้ารายการสินค้าและเลือกสินค้าที่ต้องการดูใหม่</p>
      </div>
    );
  }

  // ฟังก์ชันสำหรับคำนวณราคาต่อหน่วยตามจำนวนที่เลือก
  const calculateUnitPrice = () => {
    if (quantity < 5) {
      return 280;
    } else if (quantity >= 5 && quantity <= 7) {
      return 250;
    } else if (quantity >= 10) {
      return product.price / 10; // ราคาตามจริงต่อหน่วยเมื่อซื้อ 10 หน่วยขึ้นไป
    }
    return product.price / 10; // ราคาตามจริง
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleOrderClick = () => {
    setShowForm(true); // แสดงฟอร์มกรอกข้อมูลเมื่อกดปุ่มสั่งซื้อ
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMyok([
      name, phone, address
    ])

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name":name,
  "phone": phone,
  "address": address
});



const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://ads.service-ads.com/add", requestOptions)
  .then((response) => response.text())
  .then((result) =>  setSuccess(result))
  .catch((error) => console.error(error));
    

  
  };

  const unitPrice = calculateUnitPrice(); // เรียกใช้ฟังก์ชันคำนวณราคาต่อหน่วย
  const finalPrice = unitPrice * quantity; // คำนวณราคาสุดท้าย

  if(success){
    Swal.fire({
      title: "เรียบร้อย!",
      text: "เราได้รับข้อมูลที่อยู่ของท่านแล้ว!",
      icon: "success",
      showCancelButton: false, // แสดงเฉพาะปุ่ม OK
      confirmButtonText: 'OK' // ข้อความบนปุ่ม OK
    }).then((result) => {
      if (result.isConfirmed) {
        
        
      }
    });

   setName('');
   setPhone('');
   setAddress('');
   setSuccess('');

   setTotal(finalPrice);

  }

 

  
   
  
 

  return (
    <div className="container my-5">
      <div className="card mb-3">
        <div className="cardtow text-center">
          <img src={`/img/${product.img}`} className="imgphone" alt={product.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text text-success">ราคา: {unitPrice.toLocaleString()} บาท/หน่วย</p>
          <p className="card-text">{product.content}</p>
          <p className="card-text">
            <small className="text-muted">สินค้าชิ้นนี้มีจำกัด รีบสั่งซื้อก่อนสินค้าหมด!</small>
          </p>

          <div className="my-3 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="mx-3" style={{ fontSize: '1.5rem', minWidth: '50px', textAlign: 'center' }}>
              {quantity}
            </span>
            <button className="btn btn-outline-primary" onClick={() => handleQuantityChange(quantity + 1)}>
              +
            </button>
          </div>

          <h5 className="text-primary">ราคารวม: {finalPrice.toLocaleString()} บาท</h5>
                                 
         
          <h1> {total}</h1>
        

         
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
              <input type="text" className="form-control" placeholder="ชื่อ-สกุล" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  เบอร์โทรศัพท์:
                </label>
                <input type="number" className="form-control" placeholder="เบอร์โทรศัพท์" value={phone} onChange={(e) => setPhone(e.target.value)} required  />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  ที่อยู่สำหรับจัดส่ง:
                </label>
               
               <textarea type="text" className="form-control" placeholder="ที่อยู่สำหรับจัดส่ง:" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-success">
                ยืนยันการสั่งซื้อ
              </button>
            </form>
          

         
              <div className="text-center mt-3">



                
        
                <div className="myok">
                <p>  Name: {myok[0]} </p>
                <p> เบอร์โทรศัพท์:{myok[1]} </p>
                <p>ที่อยู่:{myok[2]} </p>



                </div>
             {total ? ( 
              <><QRCode value={qrCode} size={256} alt="QR Code" />
            <h5>  ยอดชำระ :{total}</h5> 
              </>
             ):(
             <>
             
             </>
             
             )  }

           

              </div>
            
             
        </div>
      </div>  <a href="https://lin.ee/Fsn29TB"> ชำระแล้ว กดที่นี้  </a>

     
    </div> 
  );
}
