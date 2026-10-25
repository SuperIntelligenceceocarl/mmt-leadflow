import { createElement as h } from 'react';
export default function Home(){
return h('main',{style:{maxWidth:900,margin:'auto',padding:'80px 24px'}},
h('div',{style:{color:'#c9a45e',letterSpacing:4}},'MILLIONAIRE MINDSETTERS TECHNOLOGY'),
h('h1',{style:{fontSize:64,lineHeight:1.05}},'Build your financial future with clarity.'),
h('p',{style:{fontSize:20,color:'#aaa'}},'MMT LeadFlow is preparing a modern financial education and client experience platform.'),
h('p',{},'Private preview. Independent financial technology company. Not a bank or lender.')
);
}
