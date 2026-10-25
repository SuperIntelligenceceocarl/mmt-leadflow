import type { ReactNode } from 'react';

export const metadata = {
  title: 'MMT LeadFlow',
  description: 'Millionaire Mindsetters Technology',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    &lt;html lang="en"&gt;
      &lt;body style={{margin:0,background:'#0b0b0b',color:'#fff',fontFamily:'Arial,sans-serif'}}&gt;
        {children}
      &lt;/body&gt;
    &lt;/html&gt;
  );
}
