'use client';
import { useRef } from 'react';
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export const TackChat = () => {
const tawkMessengerRef: any = useRef();

const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
};
  return (
    <>
    <button onClick={handleMinimize}> Minimize the Chat </button>
    <TawkMessengerReact
                propertyId="65deb1a68d261e1b5f664ad8"
                widgetId="1hnmubs9f"
                ref={tawkMessengerRef}/>
    </>
  )
}

