"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // นำเข้า Image Component จาก next/image
import QRCode from 'qrcode.react'; // นำเข้า QRCode จาก qrcode.react
import generatePayload from 'promptpay-qr'; // นำเข้า generatePayload จาก promptpay-qr

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
   
    const totalPriceCalculated = 1000;
    setTotalPrice(totalPriceCalculated);

 
    const qrCodeData = generatePayload("0960792769", { amount: totalPriceCalculated });
    setQrCode(qrCodeData);

    setLoading(false);  
  }, []);

  if (loading) {
    return <p>กำลังโหลดข้อมูล...</p>;  
  }

  return (
    
 

    
   <>
      <QRCode value={qrCode} style={{ width: 200, height: 200 }} alt='QR Code' />
      </>
 
  );
}
