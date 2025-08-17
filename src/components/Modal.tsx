import React, { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode,
  onClose: () => void,
}

export const Modal = ({children, onClose} : Props) => {
useEffect(() => {

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  window.addEventListener('keydown', handleEsc)

  return() => window.removeEventListener('keydown', handleEsc)
}, [onClose])

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center'>
        <div className='relative w-[90%] max-w-xl bg-neutral-900 text-white p-6 rounded-2xl shadow-lg animate-fadeIn'>
            <button onClick={onClose} className='absolute top-1 right-3 text-white text-xl hover:text-red-600 transition cursor-pointer' aria-label='Close modal'>
                x
            </button>
            <div className='flex justify-center items-center'>{children}</div>         
        </div>
    </div>,
    document.body
  );
};
