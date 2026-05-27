'use client'

import Headers from '@/components/Headers'
import React, { useState } from 'react'

const Teams = () => {
    const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
        const addToast = (message: string) => {
          const id = Date.now();
          setToasts((prev) => [...prev, { id, message }]);
          setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
          }, 3000);
        };
  return (
    <div>
        <Headers addToast={addToast} />
      Teams
    </div>
  )
}

export default Teams
