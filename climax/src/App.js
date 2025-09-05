// src/App.js — Levi Carbon Technology (Native-like, Pure CSS, polished)
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png"; // ← LOGO 图片

const Nav = () => {
  const items = [
    { label: "Credit Pools", href: "#credit" },
    { label: "Integration", href: "#integration" },
    { label: "Swap", href: "#swap" },
    { label: "Docs", href: "/docs" }, // ← 使用真正路由
    { label: "Analytics", href: "#analytics" },
    { label: "Legacy V1", href: "#legacy" },
  ];
  return (
    <header className="nav">
      <div className="container nav__row">
        <a className="brand" href="#home" aria-label="Levi Carbon Technology Home">
          <img src={logo} alt="Levi Carbon Technology Logo" className="brand__logo" />
          <span className="brand__text">Levi Carbon Technology</span>
        </a>

        <nav className="nav__links">
          {items.map((it) =>
            it.label === "Docs" ? (
              <Link key={it.label} className="nav__link" to={it.href}>
                {it.label}
              </Link>
            ) : (
              <a key={it.label} className="nav__link" href={it.href}>
                {it.label}
              </a>
            )
          )}
        </nav>

        <a className="btn btn--primary nav__cta" href="mailto:edirentzhang@gmail.com">
          Request a Demo <span className="btn__arrow">→</span>
        </a>

        <button
          className="nav__menu"
          onClick={() => alert("Add a mobile menu if you need it.")}
          aria-label="Open Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="section hero">
    <div className="container hero__wrap">
      <h1 className="hero__title">The Future of Carbon Credit RWA</h1>
      <p className="hero__subtitle">
        Levi Carbon Technology builds cross-border liquidity for carbon markets.
        From CCER acquisition in China to SPV issuance in Hong Kong, and global ESG capital inflows.
      </p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#credit">
          Check Credit Pools <span className="btn__arrow">→</span>
        </a>
        <a className="btn btn--ghost" href="#integration">
          Get Integrated <span className="btn__arrow">→</span>
        </a>
        <Link className="btn btn--ghost" to="/docs">
          Docs <span className="btn__arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

const Feature = ({ title, desc }) => (
  <div className="card">
    <h3 className="card__title">{title}</h3>
    <p className="card__desc">{desc}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      title: "Stage 1: CCER Acquisition",
      desc: "收购国内新能源/煤炭企业 CCER，价格低廉但流动性不足。",
    },
    {
      title: "Stage 2: Rights Transfer → SPV",
      desc: "在香港设立 SPV，签署收益权转让协议，实现境内资产 → 境外工具合规映射。",
    },
    {
      title: "Stage 3: SPV Issues RWA",
      desc: "SPV 以未来收益权为底层资产，发行碳信用 RWA Token 或绿色债券，锚定国际标准。",
    },
    {
      title: "Stage 4: Global Capital Access",
      desc: "对接跨国企业与国际 ESG 基金，实现境内低买、境外高卖的套利与合规需求。",
    },
  ];

  return (
    <section id="features" className="section section--muted">
      <div className="container grid">
        {items.map((it) => (
          <Feature key={it.title} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer__row">
      <p>© {new Date().getFullYear()} Levi Carbon Technology. All rights reserved.</p>
      <div className="footer__links">
        <a href="mailto:edirentzhang@gmail.com">Contact: edirentzhang@gmail.com</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
