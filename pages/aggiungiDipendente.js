import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import { SidebarAA } from "../components/sidebarAA";


export default function Home() {
  return (
    <div>
      <SidebarAA/>
      <TopBar/>
    </div>
  )
}
