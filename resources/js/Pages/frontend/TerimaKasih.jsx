import { Head, Link } from '@inertiajs/react';
import React from 'react'

export default function TerimaKasih({donatur, campaign}) {
  console.log(donatur.nominal)
  const formatNominal = Number(donatur.nominal).toLocaleString("id-ID");
  return (
    <div className='flex justify-center items-center m-3'>
            <Head title="Payment" />
      <div className='text-center mt-12'>
        <h2 className='text-2xl'>Terima Kasih</h2>
        <h2 className='text-3xl font-bold'>{formatNominal}</h2>
        <h2 className='text-xl'>Donasi yang saudara <span className='text-green-500'> {donatur.name} </span> akan sangat berarti bagi kami</h2>
        <h2 className='text-xl'>Melalui kontribusi Anda yang murah hati, <span className='text-green-500'>{campaign.title}</span> akan terlakasana dengan baik.</h2>
        <h2 className='text-xl'>Setiap kontribusi Anda memiliki dampak yang nyata dan berkelanjutan bagi ummat.</h2>

        <a href={'/home'} className='btn btn-primary btn-sm mt-5'> Kembali </a>
      </div>
    </div>
  )
}
