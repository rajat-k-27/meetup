import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';


export const metadata: Metadata = {
  title: "MeetUp",
  description: "Created by Rajat",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>

        {children}

      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout