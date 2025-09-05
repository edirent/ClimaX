// src/pages/Docs.jsx — ClimaX Docs (Carbon Credit RWA)
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FlowChart = () => (
  <div className="flow">
    <svg className="flow__svg" viewBox="0 0 1200 420" aria-labelledby="climax-flow">
      <title id="climax-flow">ClimaX Carbon Credit RWA Flow</title>

      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#111"/><stop offset="1" stopColor="#333"/>
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#0ea5e9"/><stop offset="1" stopColor="#22d3ee"/>
        </linearGradient>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0" stopColor="#34d399"/><stop offset="1" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="g4" x1="0" x2="1">
          <stop offset="0" stopColor="#a78bfa"/><stop offset="1" stopColor="#6366f1"/>
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.18"/>
        </filter>
        <marker id="arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto">
          <path d="M0,0 L12,6 L0,12 z" fill="currentColor" />
        </marker>
      </defs>

      {/* edges */}
      <g stroke="#9aa2ad" strokeWidth="2" fill="none" markerEnd="url(#arrow)">
        <path d="M255 210 C 330 210, 360 210, 435 210" />
        <path d="M715 210 C 790 210, 820 210, 895 210" />
        <path d="M975 255 C 975 310, 600 360, 315 330" opacity="0.6" />
      </g>

      {/* nodes */}
      <g filter="url(#soft)" fontFamily="ui-sans-serif, system-ui">
        {/* Stage 1 */}
        <rect x="80" y="130" rx="18" ry="18" width="290" height="160" fill="url(#g2)" />
        <text x="225" y="165" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">Stage 1: CCER Acquisition</text>
        <foreignObject x="95" y="176" width="260" height="110">
          <div xmlns="http://www.w3.org/1999/xhtml" className="flow__box flow__box--light">
            <ul>
              <li>收购国内新能源/煤炭企业或国企的 CCER</li>
              <li>价格低、流动性不足、跨境受限</li>
            </ul>
          </div>
        </foreignObject>

        {/* Stage 2 */}
        <rect x="460" y="130" rx="18" ry="18" width="250" height="160" fill="url(#g3)" />
        <text x="585" y="165" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0b0c0f">Stage 2: Rights → HK SPV</text>
        <foreignObject x="475" y="176" width="220" height="110">
          <div xmlns="http://www.w3.org/1999/xhtml" className="flow__box">
            <ul>
              <li>香港注册 SPV，签《收益权转让协议》</li>
              <li>3–5 年收益权过户，境内资产→境外工具</li>
            </ul>
          </div>
        </foreignObject>

        {/* Stage 3 */}
        <rect x="920" y="110" rx="18" ry="18" width="260" height="200" fill="url(#g4)" />
        <text x="1050" y="145" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">Stage 3: SPV Issues RWA</text>
        <foreignObject x="935" y="156" width="230" height="140">
          <div xmlns="http://www.w3.org/1999/xhtml" className="flow__box flow__box--light">
            <ul>
              <li>发行碳信用 RWA Token / 绿色债券</li>
              <li>锚定 Verra / Gold Standard</li>
              <li>Core Climate、链上、绿色债券平台挂牌</li>
            </ul>
          </div>
        </foreignObject>

        {/* Stage 4 ribbon */}
        <rect x="220" y="320" rx="16" ry="16" width="540" height="70" fill="url(#g1)" />
        <text x="490" y="362" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
          Stage 4: Global Capital Access — 跨国企业 / ESG 基金 资金流入
        </text>
      </g>
    </svg>
  </div>
);

export default function Docs() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container nav__row">
          <Link className="brand" to="/">
            <span className="brand__dot">c</span>
            <span className="brand__text">ClimaX</span>
          </Link>
          <nav className="nav__links">
            <Link className="nav__link" to="/">Home</Link>
            <a className="nav__link" href="#stages">Stages</a>
            <a className="nav__link" href="#contact">Contact</a>
          </nav>
          <a className="btn btn--primary nav__cta" href="mailto:edirentzhang@gmail.com">Contact</a>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h1 className="doc__title">Carbon Credit RWA — End-to-End Playbook</h1>
            <p className="doc__lead">
              从境内 CCER 低成本收购，到香港 SPV 桥接，再到 SPV 发行碳信用 RWA / 绿色债券并对接全球 ESG 资金，形成合规与资本效率兼顾的跨境链路。
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="flow">
          <div className="container">
            <h2 id="flow" className="doc__h2">流程图（Overview）</h2>
            <FlowChart />
          </div>
        </section>

        <section id="stages" className="section section--muted">
          <div className="container doc__grid4">
            <article className="doc__card">
              <h3>Stage 1 — CCER Acquisition</h3>
              <ul>
                <li>从境内新能源、煤炭企业或国企收购 CCER</li>
                <li>国内价格低、流动性不足</li>
                <li>直接跨境受限，需结构化设计</li>
              </ul>
            </article>
            <article className="doc__card">
              <h3>Stage 2 — Rights Transfer → 香港 SPV</h3>
              <ul>
                <li>注册 SPV 并签署《收益权转让协议》/《碳中和合作协议》</li>
                <li>将未来 3–5 年 CCER 收益权转移至 SPV</li>
                <li>实现境内资产 → 境外金融工具的合规映射</li>
              </ul>
            </article>
            <article className="doc__card">
              <h3>Stage 3 — SPV Issues RWA</h3>
              <ul>
                <li>以收益权为底层资产，发行碳信用 RWA Token / 绿色债券</li>
                <li>对标 Verra / Gold Standard 国际标准</li>
                <li>在 Core Climate、链上市场、绿色债券平台挂牌</li>
              </ul>
            </article>
            <article className="doc__card">
              <h3>Stage 4 — Global Capital Access</h3>
              <ul>
                <li>目标客户：跨国企业/国际 ESG 基金</li>
                <li>用于 ESG/碳中和合规，促进资金回流</li>
                <li>境内低买 → 境外高卖，套利与规模化</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="doc__h2">Contact</h2>
            <p className="doc__lead">
              业务合作与对接：<a href="mailto:edirentzhang@gmail.com">edirentzhang@gmail.com</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__row">
          <p>© {new Date().getFullYear()} ClimaX. All rights reserved.</p>
          <div className="footer__links">
            <a href="mailto:edirentzhang@gmail.com">Contact: edirentzhang@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
