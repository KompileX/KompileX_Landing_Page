'use client';

import React from 'react';
import Link from 'next/link';

export default function ExactColorOptions() {
  return (
    <div className="exact-exactcoloroptions-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
      <div style={{ width: '1440px', padding: '72px 80px 88px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <p className="lab" style={{ color: '#475569' }}>KompileX / Brand color options</p>
    <h1 className="disp" style={{ fontSize: '64px', lineHeight: '1', fontWeight: '800', maxWidth: '900px' }}>Four directions, same page, light mode.</h1>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '24px', alignItems: 'start' }}>
    
      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="lab" style={{ color: '#1B3FCC' }}>Option A</span>
          <h2 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '800' }}>Cobalt blue</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '8px' }}>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#2457F5' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Primary</p><p style={{ fontSize: '11px', color: '#475569' }}>#2457F5</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#1B3FCC' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Deep</p><p style={{ fontSize: '11px', color: '#475569' }}>#1B3FCC</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#E8EEFF', border: '1px solid #D9E2F7' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Tint</p><p style={{ fontSize: '11px', color: '#475569' }}>#E8EEFF</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#0F1B3D' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Text</p><p style={{ fontSize: '11px', color: '#475569' }}>#0F1B3D</p></div>
        </div>

        {/*  mini page  */}
        <div style={{ background: '#F8FAFF', border: '1px solid #D9E2F7', borderRadius: '28px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px', color: '#0F1B3D' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #D9E2F7', borderRadius: '999px', padding: '7px 8px 7px 12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#2457F5', display: 'grid', placeItems: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
              </span>
              <span className="disp" style={{ fontSize: '15px', fontWeight: '800' }}>Kompile<span style={{ color: '#1B3FCC' }}>X</span></span>
            </span>
            <span style={{ height: '28px', padding: '0 12px', borderRadius: '999px', background: '#2457F5', color: '#fff', fontSize: '11.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Contact Us</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '2px 4px' }}>
            <span className="lab" style={{ fontSize: '10.5px', color: '#1B3FCC' }}>01 / Services</span>
            <p className="disp" style={{ fontSize: '27px', lineHeight: '1.02', fontWeight: '800' }}>Scale your software <span style={{ background: 'linear-gradient(transparent 60%,#CBD9FF 60%,#CBD9FF 92%,transparent 92%)' }}>without expanding</span> your team.</p>
            <p style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#4B5675' }}>We build, ship and run intelligent applications.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', background: '#2457F5', color: '#fff', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Start a Project</span>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', border: '1.5px solid #0F1B3D', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>See Our Work</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: '1', background: '#fff', border: '1px solid #D9E2F7', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="disp" style={{ fontSize: '30px', lineHeight: '1', fontWeight: '800', color: '#2457F5' }}>10+</span>
              <span style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#4B5675' }}>Products shipped</span>
            </div>
            <div style={{ flex: '1', background: '#E8EEFF', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#1B3FCC', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Next.js</span>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#1B3FCC', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Docker</span>
            </div>
          </div>
          <div style={{ background: '#2457F5', color: '#fff', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="disp" style={{ fontSize: '19px', lineHeight: '1.1', fontWeight: '800' }}>Your next product starts here.</p>
            <span style={{ alignSelf: 'flex-start', height: '32px', padding: '0 14px', borderRadius: '999px', background: '#fff', color: '#1B3FCC', fontSize: '12px', fontWeight: '800', display: 'inline-flex', alignItems: 'center' }}>Get started</span>
          </div>
        </div>
      </section>
    
      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="lab" style={{ color: '#07564F' }}>Option B</span>
          <h2 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '800' }}>Deep teal</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '8px' }}>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#0B7F73' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Primary</p><p style={{ fontSize: '11px', color: '#475569' }}>#0B7F73</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#07564F' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Deep</p><p style={{ fontSize: '11px', color: '#475569' }}>#07564F</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#DDF3EF', border: '1px solid #D2E8E4' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Tint</p><p style={{ fontSize: '11px', color: '#475569' }}>#DDF3EF</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#0C2A28' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Text</p><p style={{ fontSize: '11px', color: '#475569' }}>#0C2A28</p></div>
        </div>

        {/*  mini page  */}
        <div style={{ background: '#F5FBFA', border: '1px solid #D2E8E4', borderRadius: '28px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px', color: '#0C2A28' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #D2E8E4', borderRadius: '999px', padding: '7px 8px 7px 12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#0B7F73', display: 'grid', placeItems: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
              </span>
              <span className="disp" style={{ fontSize: '15px', fontWeight: '800' }}>Kompile<span style={{ color: '#07564F' }}>X</span></span>
            </span>
            <span style={{ height: '28px', padding: '0 12px', borderRadius: '999px', background: '#0B7F73', color: '#fff', fontSize: '11.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Contact Us</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '2px 4px' }}>
            <span className="lab" style={{ fontSize: '10.5px', color: '#07564F' }}>01 / Services</span>
            <p className="disp" style={{ fontSize: '27px', lineHeight: '1.02', fontWeight: '800' }}>Scale your software <span style={{ background: 'linear-gradient(transparent 60%,#B7E6DF 60%,#B7E6DF 92%,transparent 92%)' }}>without expanding</span> your team.</p>
            <p style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#46605D' }}>We build, ship and run intelligent applications.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', background: '#0B7F73', color: '#fff', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Start a Project</span>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', border: '1.5px solid #0C2A28', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>See Our Work</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: '1', background: '#fff', border: '1px solid #D2E8E4', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="disp" style={{ fontSize: '30px', lineHeight: '1', fontWeight: '800', color: '#0B7F73' }}>10+</span>
              <span style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#46605D' }}>Products shipped</span>
            </div>
            <div style={{ flex: '1', background: '#DDF3EF', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#07564F', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Next.js</span>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#07564F', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Docker</span>
            </div>
          </div>
          <div style={{ background: '#0B7F73', color: '#fff', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="disp" style={{ fontSize: '19px', lineHeight: '1.1', fontWeight: '800' }}>Your next product starts here.</p>
            <span style={{ alignSelf: 'flex-start', height: '32px', padding: '0 14px', borderRadius: '999px', background: '#fff', color: '#07564F', fontSize: '12px', fontWeight: '800', display: 'inline-flex', alignItems: 'center' }}>Get started</span>
          </div>
        </div>
      </section>
    
      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="lab" style={{ color: '#9A3412' }}>Option C</span>
          <h2 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '800' }}>Burnt orange</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '8px' }}>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#C2410C' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Primary</p><p style={{ fontSize: '11px', color: '#475569' }}>#C2410C</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#9A3412' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Deep</p><p style={{ fontSize: '11px', color: '#475569' }}>#9A3412</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#FFEADB', border: '1px solid #F3DFD0' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Tint</p><p style={{ fontSize: '11px', color: '#475569' }}>#FFEADB</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#2B1810' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Text</p><p style={{ fontSize: '11px', color: '#475569' }}>#2B1810</p></div>
        </div>

        {/*  mini page  */}
        <div style={{ background: '#FFFAF6', border: '1px solid #F3DFD0', borderRadius: '28px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px', color: '#2B1810' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #F3DFD0', borderRadius: '999px', padding: '7px 8px 7px 12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#C2410C', display: 'grid', placeItems: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
              </span>
              <span className="disp" style={{ fontSize: '15px', fontWeight: '800' }}>Kompile<span style={{ color: '#9A3412' }}>X</span></span>
            </span>
            <span style={{ height: '28px', padding: '0 12px', borderRadius: '999px', background: '#C2410C', color: '#fff', fontSize: '11.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Contact Us</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '2px 4px' }}>
            <span className="lab" style={{ fontSize: '10.5px', color: '#9A3412' }}>01 / Services</span>
            <p className="disp" style={{ fontSize: '27px', lineHeight: '1.02', fontWeight: '800' }}>Scale your software <span style={{ background: 'linear-gradient(transparent 60%,#FFD2B3 60%,#FFD2B3 92%,transparent 92%)' }}>without expanding</span> your team.</p>
            <p style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#6B5446' }}>We build, ship and run intelligent applications.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', background: '#C2410C', color: '#fff', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Start a Project</span>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', border: '1.5px solid #2B1810', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>See Our Work</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: '1', background: '#fff', border: '1px solid #F3DFD0', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="disp" style={{ fontSize: '30px', lineHeight: '1', fontWeight: '800', color: '#C2410C' }}>10+</span>
              <span style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#6B5446' }}>Products shipped</span>
            </div>
            <div style={{ flex: '1', background: '#FFEADB', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#9A3412', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Next.js</span>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#9A3412', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Docker</span>
            </div>
          </div>
          <div style={{ background: '#C2410C', color: '#fff', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="disp" style={{ fontSize: '19px', lineHeight: '1.1', fontWeight: '800' }}>Your next product starts here.</p>
            <span style={{ alignSelf: 'flex-start', height: '32px', padding: '0 14px', borderRadius: '999px', background: '#fff', color: '#9A3412', fontSize: '12px', fontWeight: '800', display: 'inline-flex', alignItems: 'center' }}>Get started</span>
          </div>
        </div>
      </section>
    
      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="lab" style={{ color: '#075A31' }}>Option D</span>
          <h2 className="disp" style={{ fontSize: '30px', lineHeight: '1.05', fontWeight: '800' }}>Emerald green</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '8px' }}>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#0B7A43' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Primary</p><p style={{ fontSize: '11px', color: '#475569' }}>#0B7A43</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#075A31' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Deep</p><p style={{ fontSize: '11px', color: '#475569' }}>#075A31</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#DDF3E6', border: '1px solid #D3E8DB' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Tint</p><p style={{ fontSize: '11px', color: '#475569' }}>#DDF3E6</p></div>
          <div><div style={{ height: '56px', borderRadius: '14px', background: '#0F2A1D' }}></div><p style={{ marginTop: '6px', fontSize: '11.5px', fontWeight: '600' }}>Text</p><p style={{ fontSize: '11px', color: '#475569' }}>#0F2A1D</p></div>
        </div>

        {/*  mini page  */}
        <div style={{ background: '#F6FBF8', border: '1px solid #D3E8DB', borderRadius: '28px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '18px', color: '#0F2A1D' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #D3E8DB', borderRadius: '999px', padding: '7px 8px 7px 12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#0B7A43', display: 'grid', placeItems: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"></path></svg>
              </span>
              <span className="disp" style={{ fontSize: '15px', fontWeight: '800' }}>Kompile<span style={{ color: '#075A31' }}>X</span></span>
            </span>
            <span style={{ height: '28px', padding: '0 12px', borderRadius: '999px', background: '#0B7A43', color: '#fff', fontSize: '11.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Contact Us</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '2px 4px' }}>
            <span className="lab" style={{ fontSize: '10.5px', color: '#075A31' }}>01 / Services</span>
            <p className="disp" style={{ fontSize: '27px', lineHeight: '1.02', fontWeight: '800' }}>Scale your software <span style={{ background: 'linear-gradient(transparent 60%,#BDE8CF 60%,#BDE8CF 92%,transparent 92%)' }}>without expanding</span> your team.</p>
            <p style={{ fontSize: '12.5px', lineHeight: '1.5', color: '#44614F' }}>We build, ship and run intelligent applications.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', background: '#0B7A43', color: '#fff', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Start a Project</span>
              <span style={{ height: '38px', padding: '0 16px', borderRadius: '999px', border: '1.5px solid #0F2A1D', fontSize: '12.5px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>See Our Work</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: '1', background: '#fff', border: '1px solid #D3E8DB', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="disp" style={{ fontSize: '30px', lineHeight: '1', fontWeight: '800', color: '#0B7A43' }}>10+</span>
              <span style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#44614F' }}>Products shipped</span>
            </div>
            <div style={{ flex: '1', background: '#DDF3E6', borderRadius: '18px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#075A31', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Next.js</span>
              <span style={{ alignSelf: 'flex-start', height: '24px', padding: '0 10px', borderRadius: '999px', background: '#fff', color: '#075A31', fontSize: '11px', fontWeight: '700', display: 'inline-flex', alignItems: 'center' }}>Docker</span>
            </div>
          </div>
          <div style={{ background: '#0B7A43', color: '#fff', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="disp" style={{ fontSize: '19px', lineHeight: '1.1', fontWeight: '800' }}>Your next product starts here.</p>
            <span style={{ alignSelf: 'flex-start', height: '32px', padding: '0 14px', borderRadius: '999px', background: '#fff', color: '#075A31', fontSize: '12px', fontWeight: '800', display: 'inline-flex', alignItems: 'center' }}>Get started</span>
          </div>
        </div>
      </section>
    
  </div>
</div>
    </div>
  );
}
