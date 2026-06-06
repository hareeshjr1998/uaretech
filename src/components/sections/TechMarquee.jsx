import { memo } from 'react';

const TechMarquee = () => {
  // Row 1 Technologies
  const row1 = [
    { name: 'Firebase', color: '#FFC857' },
    { name: 'Node.js', color: '#6EE7F9' },
    { name: 'n8n', color: '#FF6A88' },
    { name: 'WhatsApp API', color: '#60A5FA' },
    { name: 'Meta Ads', color: '#7C83FD' },
    { name: 'Google Ads', color: '#A78BFA' },
    { name: 'Shopify', color: '#FF99AC' },
    { name: 'Razorpay', color: '#C4B5FD' },
    { name: 'HubSpot', color: '#FF9A8B' },
    { name: 'Make', color: '#E9D5FF' },
    { name: 'Zapier', color: '#FFC857' },
  ];

  // Row 2 Technologies
  const row2 = [
    { name: 'Google Analytics', color: '#FF9A8B' },
    { name: 'Webflow', color: '#60A5FA' },
    { name: 'Klaviyo', color: '#6EE7F9' },
    { name: 'LangChain', color: '#7C83FD' },
    { name: 'Dialogflow', color: '#A78BFA' },
    { name: 'Twilio', color: '#FF6A88' },
    { name: 'Capacitor', color: '#FF99AC' },
    { name: 'Gemini AI', color: '#6EE7F9' },
    { name: 'ChatGPT API', color: '#FFC857' },
    { name: 'Stripe', color: '#C4B5FD' },
    { name: 'Google Cloud', color: '#E9D5FF' },
  ];

  const marquee1 = [...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2];

  return (
    <section className="relative py-16 bg-white overflow-hidden z-10 select-none">

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="font-outfit text-xs font-bold uppercase tracking-[0.25em] text-text-tertiary">
          Trusted Tools & Technologies We Work With
        </p>
      </div>

      {/* Infinite scrolling rows */}
      <div className="flex flex-col gap-6 relative w-full overflow-hidden">
        
        {/* Gradient overlays to fade out the left/right edges elegantly */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Right-to-Left */}
        <div className="flex w-max">
          <div className="flex gap-4 pr-4 animate-marquee-r2l">
            {marquee1.map((tool, idx) => (
              <div
                key={`r1-${idx}`}
                className="glass-card flex items-center gap-2.5 px-6 py-3 border border-slate-200/60 bg-white shadow-sm cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-sm" 
                  style={{ backgroundColor: tool.color }} 
                />
                <span className="font-outfit font-extrabold text-sm text-text-primary tracking-wide">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Left-to-Right */}
        <div className="flex w-max">
          <div className="flex gap-4 pr-4 animate-marquee-l2r">
            {marquee2.map((tool, idx) => (
              <div
                key={`r2-${idx}`}
                className="glass-card flex items-center gap-2.5 px-6 py-3 border border-slate-200/60 bg-white shadow-sm cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-sm" 
                  style={{ backgroundColor: tool.color }} 
                />
                <span className="font-outfit font-extrabold text-sm text-text-primary tracking-wide">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default memo(TechMarquee);
