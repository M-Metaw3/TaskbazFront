"use client"
import React,{useState,useEffect} from 'react';

// import React, {  } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
  import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    function SizeExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState('md')
      
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }}
    const size = 'full';
    const handleSizeClick = () => {
        onOpen();
      };
      const pathname = usePathname()
      useEffect(() => {
       
        if (pathname === '/checkout') {
          onOpen();
        }
      }, [onOpen]);
      
  return (
    
    <>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       {children}
          </ModalBody>
         
        </ModalContent>
      </Modal>
    </>
        
        

  );
}
