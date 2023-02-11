import LayoutMain from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import Products from "@/components/Products"
import axios from 'axios';

const products = () => {
  
  return (
    <LayoutMain>
      <Products/>
    </LayoutMain>
    
  )
}

export default products