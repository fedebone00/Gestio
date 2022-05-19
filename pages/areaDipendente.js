import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import home from '../public/home-outline.png'
import React, { Component } from 'react';
import {MdFirstPage, MdOutlineLogin , MdBeachAccess , MdLocalHospital , MdContacts , MdCloud} from 'react-icons/md';
import { SidebarDip } from '../components/sidebarDip'
import { SidebarAA } from '../components/sidebarAA'
import TopBar from '../components/topBar'
import DatePicker from 'sassy-datepicker'
import { Mensa } from '../components/Mensa'


export default function Home() {
  return (
    <div>
      <SidebarDip/>
      <TopBar title="A colpo d'occhio"/>

      <DatePicker className='absolute bottom-40 left-72'/>
      <Mensa/>
    </div>
  )
}