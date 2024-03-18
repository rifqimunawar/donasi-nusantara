import React from 'react'

export default function DonaturComponent({donatur}) {

  const formattedNominal = Number(donatur.nominal).toLocaleString("id-ID");

  const waktuYangLalu = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = Math.abs(now - date) / 1000; // Menghitung selisih waktu dalam detik

    const intervals = {
      tahun: 31536000,
      bulan: 2592000,
      minggu: 604800,
      hari: 86400,
      jam: 3600,
      menit: 60,
      detik: 1,
    };

    for (let [unit, seconds] of Object.entries(intervals)) {
      const count = Math.floor(diff / seconds);
      if (count > 0) {
        return `${count} ${unit} yang lalu`;
      }
    }
    return 'Baru saja';
  };


  return (
    <div className='bg-base-100 mb-2'>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 flex justify-center items-center'>
        <img src='https://kitabisa.com/_next/image?url=https%3A%2F%2Fassets.kitabisa.cc%2Fimages%2Ficons%2Ficon_anonymous-user.png&w=64&q=75'/>
        </div>
        <div className='col-span-3' >
          <p>{donatur.name}</p>
          <p>berdonasi sebesar Rp: {formattedNominal} </p>
          <p>{waktuYangLalu(donatur.created_at)}</p>
        </div>
      </div>
    </div>
  )
}
