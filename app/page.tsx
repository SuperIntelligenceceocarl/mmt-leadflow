import { createElement as h, Fragment } from 'react';

const S = {
  page: { font: '16px/1.7 system-ui, sans-serif', color: '#e0e0e0', background: '#0a0a0a', minHeight: '100vh' },
  hdr: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', borderBottom: '1px solid #1a1a1a' },
  brand: { fontSize: '1.1rem', fontWeight: 700, color: '#d4af37', letterSpacing: 3, textDecoration: 'none' },
  hero: { maxWidth: 860, margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' },
  h1: { fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 },
  sub: { fontSize: 18, color: '#999', marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' },
  btn: { display: 'inline-block', padding: '14px 32px', borderRadius: 6, fontSize: 16, fontWeight: 600, textDecoration: 'none', margin: '8px', cursor: 'pointer' },
  pri: { background: '#d4af37', color: '#0a0a0a' },
  sec: { border: '1px solid #d4af37', color: '#d4af37', background: 'transparent' },
  secHover: { background: '#d4af37', color: '#0a0a0a' },
  offers: { maxWidth: 1060, margin: '0 auto', padding: '60px 24px' },
  tit: { fontSize: 28, fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 40 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 },
  card: { background: '#111', border: '1px solid #222', borderRadius: 8, padding: '24px', display: 'flex', flexDirection: 'column' },
  cNam: { fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 },
  cPri: { fontSize: 22, fontWeight: 700, color: '#d4af37', marginBottom: 10 },
  cDesc: { fontSize: 14, color: '#888', marginBottom: 14, flex: 1 },
  cBtn: { display: 'inline-block', padding: '10px 20px', borderRadius: 5, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center', cursor: 'pointer' },
  cBtnLink: { background: '#1a1a1a', border: '1px solid #d4af37', color: '#d4af37' },
  how: { maxWidth: 700, margin: '0 auto', padding: '60px 24px', textAlign: 'center' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 24, marginTop: 36 },
  step: { padding: 20, background: '#0e0e0e', borderRadius: 8 },
  stepN: { fontSize: 36, fontWeight: 800, color: '#d4af37', marginBottom: 8 },
  stepT: { fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 6 },
  stepD: { fontSize: 14, color: '#888' },
  res: { maxWidth: 860, margin: '0 auto', padding: '60px 24px', textAlign: 'center' },
  resTxt: { fontSize: 14, color: '#666', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' },
  foot: { borderTop: '1px solid #1a1a1a', padding: '24px', textAlign: 'center', fontSize: 13, color: '#555' },
  a: { color: '#d4af37', textDecoration: 'none' },
};

export default function Home() {
  return h(Fragment, null,
    h('style', null, '\n' +
      '@media(max-width:600px){' +
      '.offers-grid,.steps-grid{grid-template-columns:1fr!important}' +
      '} ' +
      '.card-btn:hover{background:#d4af37!important;color:#0a0a0a!important}' +
      '.hero-btn-sec:hover{background:#d4af37!important;color:#0a0a0a!important}'
    ')

    h('header', { style: S.hdr },
      h('a', { href: '#offers', style: S.brand }, 'MMT / MILLIONAIRE MINDSETTERS TECHNOLOGY')
    ),

    h('main', { style: S.page },

      h('section', { style: S.hero },
        h('h1', null, 'Build stronger credit. Build a fundable business.'),
        h('p', { style: S.sub }, 'Practical credit-building resources and professional guidance to prepare your personal and business finances for growth.'),
        h('a', { href: '#offers', style: { ...S.btn, ...S.pri } }, 'Browse Offers'),
        h('a', { href: 'mailto:info@millionairemindsetters.net', style: { ...S.btn, ...S.sec }, className: 'hero-btn-sec' }, 'Contact Us')
      ),

      h('section', { id: 'offers', style: S.offers },
        h('h2', { style: S.tit }, 'Offers'),
        h('div', { style: S.grid, className: 'offers-grid' },
          h('div', { style: S.card },
            h('div', { style: S.cNam }, 'AI Credit Toolkit'),
            h('div', { style: S.cPri }, '$97'),
            h('p', { style: S.cDesc }, 'Digital self-guided toolkit. AI-powered credit analysis templates and strategies.'),
            h('a', { href: 'mailto:info@millionairemindsetters.net?subject=AI Credit Toolkit Inquiry', style: { ...S.cBtn, ...S.cBtnLink }, className: 'card-btn' }, 'Inquire')
          ),
          h('div', { style: S.card },
            h('div', { style: S.cNam }, 'Expedited Assistance'),
            h('div', { style: S.cPri }, '$1,000'),
            h('p', { style: S.cDesc }, 'Prioritized consultation. Tailored guidance for urgent credit and business needs.'),
            h('a', { href: 'mailto:info@millionairemindsetters.net?subject=Expedited Assistance Inquiry', style: { ...S.cBtn, ...S.cBtnLink }, className: 'card-btn' }, 'Inquire')
          ),
          h('div', { style: S.card },
            h('div', { style: S.cNam }, 'Level One'),
            h('div', { style: S.cPri }, '$1,499'),
            h('p', { style: S.cDesc }, 'Comprehensive program. Structured credit and business readiness plan with ongoing support.'),
            h('a', { href: 'mailto:info@millionairemindsetters.net?subject=Level One Inquiry', style: { ...S.cBtn, ...S.cBtnLink }, className: 'card-btn' }, 'Inquire')
          ),
          h('div', { style: S.card },
            h('div', { style: S.cNam }, 'Done Package'),
            h('div', { style: S.cPri }, '$4,999'),
            h('p', { style: S.cDesc }, 'Full-service done-for-you. We handle credit strategy, business prep, and implementation.'),
            h('a', { href: 'mailto:info@millionairemindsetters.net?subject=Done Package Inquiry', style: { ...S.cBtn, ...S.cBtnLink }, className: 'card-btn' }, 'Inquire')
          ),
          h('div', { style: S.card },
            h('div', { style: S.cNam }, 'Level Two'),
            h('div', { style: S.cPri }, 'Custom Quote'),
            h('p', { style: S.cDesc }, 'Enterprise-level solution. Bespoke consulting and implementation for complex requirements.'),
            h('a', { href: 'mailto:info@millionairemindsetters.net?subject=Level Two Custom Quote Inquiry', style: { ...S.cBtn, ...S.cBtnLink }, className: 'card-btn' }, 'Request Quote')
          )
        )
      ),

      h('section', { style: S.how },
        h('h2', { style: S.tit }, 'How It Works'),
        h('div', { style: S.stepGrid, className: 'steps-grid' },
          h('div', { style: S.step },
            h('div', { style: S.stepN }, '1'),
            h('h3', { style: S.stepT }, 'Explore'),
            h('p', { style: S.stepD }, 'Review our offers and resources to understand what fits your goals.'),
          ),
          h('div', { style: S.step },
            h('div', { style: S.stepN }, '2'),
            h('h3', { style: S.stepT }, 'Choose'),
            h('p', { style: S.stepD }, 'Reach out to select the option that best matches your needs.'),
          ),
          h('div', { style: S.step },
            h('div', { style: S.stepN }, '3'),
            h('h3', { style: S.stepT }, 'Get Support'),
            h('p', { style: S.stepD }, 'Begin your credit and business journey with our guidance.'),
          )
        )
      ),

      h('section', { style: S.res },
        h('h2', { style: S.tit }, 'Resources & Referrals'),
        h('p', { style: S.resTxt }, 'We share curated educational resources and partner referrals for personal and business credit building. MMT is an independent financial technology company — we are not a bank, lender, or credit repair organization. We do not guarantee reporting outcomes, approval, or specific credit results. Always verify partner terms independently.'),
      ),

      h('footer', { style: S.foot },
        '© ' + new Date().getFullYear() + ' Millionaire Mindsetters Technology (MMT). ' +
        'Independent fintech — not a bank or lender. Results vary. ' +
        h('a', { href: 'mailto:info@millionairemindsetters.net', style: S.a }, 'info@millionairemindsetters.net')
      )
    )
  );
}
