import { createElement, type ReactNode } from 'react';
export const metadata = { title: 'MMT LeadFlow', description: 'Millionaire Mindsetters Technology' };
export default function RootLayout({children}:{children:ReactNode}) {
  return createElement('html',{lang:'en'},createElement('body',{style:{margin:0,background:'#0b0b0b',color:'#fff',fontFamily:'Arial,sans-serif'}},children));
}
