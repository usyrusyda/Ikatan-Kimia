import React, { useEffect } from 'react';

export const IonPage: React.FC = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.sidebar .nav-btn[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    const handleClick = function (this: Element) {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    const handleScroll = () => {
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || 'home';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        :root{
          --bg:#02041d;
          --bg2:#040828;
          --panel:rgba(11,15,45,.88);
          --panel-border:rgba(101,130,255,.14);
          --cyan:#18efff;
          --cyan2:#0ae7ff;
          --pink:#ff31d2;
          --green:#40ff9a;
          --yellow:#ffd93d;
          --purple:#b86dff;
          --orange:#ff7a59;
          --text:#ffffff;
          --muted:rgba(255,255,255,.78);
          --muted2:rgba(255,255,255,.60);
        }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        .ion-page-wrapper{
          font-family:"Poppins", sans-serif;
          color:var(--text);
          background:
            radial-gradient(circle at 50% 18%, rgba(0,220,255,.10), transparent 18%),
            radial-gradient(circle at 70% 20%, rgba(255,0,200,.08), transparent 14%),
            linear-gradient(180deg, #010318 0%, #020522 55%, #010318 100%);
          min-height:100vh;
          overflow-x:hidden;
          position:relative;
        }

        .ion-page-wrapper::before{
          content:"";
          position:fixed;
          inset:0;
          z-index:0;
          pointer-events:none;
          background-image:
            radial-gradient(circle, rgba(255,255,255,.85) 0 1px, transparent 1.5px),
            radial-gradient(circle, rgba(0,255,255,.8) 0 1px, transparent 1.5px),
            radial-gradient(circle, rgba(255,60,220,.7) 0 1px, transparent 1.5px);
          background-size: 180px 180px, 260px 260px, 320px 320px;
          background-position: 0 0, 60px 100px, 120px 40px;
          opacity:.55;
          animation: starsMove 40s linear infinite;
        }

        @keyframes starsMove{
          from{ transform:translateY(0); }
          to{ transform:translateY(-180px); }
        }

        .constellation{
          position:fixed;
          inset:0;
          z-index:0;
          pointer-events:none;
          opacity:.18;
        }

        .constellation span{
          position:absolute;
          display:block;
          height:1px;
          background:linear-gradient(90deg, transparent, rgba(100,180,255,.9), transparent);
          transform-origin:left center;
        }

        .sidebar{
          position:fixed;
          left:16px;
          top:50%;
          transform:translateY(-50%);
          width:52px;
          background:rgba(4,8,30,.88);
          border:1px solid rgba(110,130,255,.18);
          border-radius:28px;
          padding:10px 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:12px;
          z-index:20;
          backdrop-filter:blur(10px);
          box-shadow:0 10px 30px rgba(0,0,0,.35);
        }

        .nav-btn{
          width:34px;
          height:34px;
          border-radius:50%;
          border:none;
          background:transparent;
          color:#9fb6ff;
          font-size:16px;
          display:grid;
          place-items:center;
          cursor:pointer;
          transition:.25s ease;
          text-decoration:none;
        }

        .nav-btn:hover{
          color:#fff;
          transform:scale(1.05);
        }

        .nav-btn.active{
          background:linear-gradient(180deg, #20f6ff, #00d8ff);
          color:#041424;
          box-shadow:0 0 20px rgba(0,240,255,.6);
        }

        .nav-btn.logo{
          background:linear-gradient(180deg, #9d4dff, #43ddff);
          color:#fff;
          box-shadow:0 0 16px rgba(120,140,255,.45);
        }

        .nav-divider{
          width:28px;
          height:1px;
          background:rgba(255,255,255,.10);
          margin:4px 0;
        }

        .page{
          position:relative;
          z-index:1;
          width:100%;
          max-width:1400px;
          margin:0 auto;
          padding:90px 70px 80px 110px;
        }

        .hero{
          min-height:100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          position:relative;
        }

        .hero-glow{
          position:absolute;
          width:420px;
          height:420px;
          border-radius:50%;
          left:50%;
          top:46%;
          transform:translate(-50%, -50%);
          background:radial-gradient(circle, rgba(0,220,255,.15), rgba(0,0,0,0) 68%);
          filter:blur(22px);
          z-index:-1;
        }

        .pill{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 18px;
          border-radius:999px;
          border:1px solid rgba(0,230,255,.28);
          background:rgba(6,20,44,.50);
          font-family:"Orbitron", sans-serif;
          font-size:12px;
          font-weight:700;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:#8cf6ff;
          margin-bottom:26px;
          box-shadow:inset 0 0 10px rgba(0,255,255,.08);
        }

        .hero h1{
          font-family:"Orbitron", sans-serif;
          font-size:100px;
          line-height:.95;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:-.04em;
          margin-bottom:20px;
          background:linear-gradient(90deg, #12f2ff 0%, #dff8ff 48%, #ff28cf 100%);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          text-shadow:
            0 0 16px rgba(0,240,255,.16),
            0 0 28px rgba(255,50,220,.10);
        }

        .hero h2{
          font-family:"Orbitron", sans-serif;
          font-size:48px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.02em;
          color:#dfe4f3;
          margin-bottom:28px;
        }

        .hero p{
          max-width:760px;
          font-size:19px;
          line-height:1.55;
          color:var(--muted);
          margin-bottom:42px;
        }

        .cta{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:18px;
          min-width:375px;
          padding:20px 34px;
          border-radius:999px;
          text-decoration:none;
          font-family:"Orbitron", sans-serif;
          font-size:17px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.04em;
          color:#031422;
          background:linear-gradient(90deg, #1ff5ff, #0ae7ff);
          box-shadow:
            0 0 24px rgba(0,240,255,.50),
            0 0 60px rgba(0,240,255,.20),
            inset 0 -4px 12px rgba(0,0,0,.12);
          transition:.25s ease;
        }

        .cta:hover{
          transform:translateY(-2px) scale(1.01);
          box-shadow:
            0 0 28px rgba(0,240,255,.65),
            0 0 70px rgba(0,240,255,.25),
            inset 0 -4px 12px rgba(0,0,0,.12);
        }

        .play{
          width:30px;
          height:30px;
          border-radius:50%;
          background:#041625;
          color:#14edff;
          display:grid;
          place-items:center;
          font-size:14px;
          font-weight:700;
        }

        .module-section{
          min-height:100vh;
          padding-top:80px;
        }

        .module-header{
          display:flex;
          align-items:center;
          gap:20px;
          margin-bottom:34px;
        }

        .module-header .accent{
          width:4px;
          height:64px;
          border-radius:999px;
          background:linear-gradient(180deg, #1ff5ff, #00d9ff);
          box-shadow:0 0 16px rgba(0,240,255,.45);
        }

        .module-icon{
          width:60px;
          height:60px;
          border-radius:14px;
          display:grid;
          place-items:center;
          font-size:28px;
          color:#8ff7ff;
          background:linear-gradient(180deg, rgba(0,255,255,.12), rgba(0,255,255,.06));
          border:1px solid rgba(0,240,255,.12);
          box-shadow:inset 0 0 16px rgba(0,240,255,.08);
        }

        .module-title h3{
          font-family:"Orbitron", sans-serif;
          font-size:42px;
          text-transform:uppercase;
          line-height:1;
          margin-bottom:8px;
          color:#eef3ff;
        }

        .module-title p{
          font-size:18px;
          color:var(--muted2);
          font-weight:600;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(3, minmax(260px, 1fr));
          gap:24px;
        }

        .card{
          min-height:230px;
          padding:24px 24px 22px;
          border-radius:22px;
          background:linear-gradient(180deg, rgba(10,15,48,.88), rgba(7,11,34,.95));
          border:1px solid var(--panel-border);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.02),
            0 8px 30px rgba(0,0,0,.28);
          position:relative;
          overflow:hidden;
          transition:.25s ease;
        }

        .card:hover{
          transform:translateY(-4px);
          border-color:rgba(0,240,255,.18);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.02),
            0 12px 34px rgba(0,0,0,.32),
            0 0 24px rgba(0,240,255,.06);
        }

        .card::before{
          content:"";
          position:absolute;
          left:-25px;
          bottom:-25px;
          width:120px;
          height:120px;
          border-radius:50%;
          background:radial-gradient(circle, rgba(0,238,255,.10), transparent 70%);
          filter:blur(10px);
        }

        .icon{
          font-size:30px;
          margin-bottom:16px;
          display:inline-block;
          filter:drop-shadow(0 0 10px rgba(0,240,255,.18));
        }

        .card h4{
          font-size:20px;
          font-weight:800;
          color:#eef2ff;
          margin-bottom:10px;
        }

        .card p{
          font-size:14px;
          line-height:1.65;
          color:var(--muted2);
          margin-bottom:24px;
        }

        .btn-learn{
          display:inline-block;
          padding:11px 18px;
          border-radius:10px;
          background:linear-gradient(90deg, #1ff5ff, #0ae7ff);
          color:#031422;
          font-weight:800;
          font-size:13px;
          text-transform:uppercase;
          text-decoration:none;
          box-shadow:0 0 16px rgba(0,240,255,.30);
        }

        .cyan{ color:#59a6ff; }
        .orange{ color:#ff715f; }
        .green{ color:#49ff9e; }
        .yellow{ color:#ffe24b; }
        .purple{ color:#b67cff; }
        .pink{ color:#ff6abf; }

        @media (max-width:1100px){
          .page{
            padding:80px 30px 60px 90px;
          }

          .hero h1{
            font-size:78px;
          }

          .hero h2{
            font-size:38px;
          }

          .hero p{
            font-size:17px;
            max-width:680px;
          }

          .module-title h3{
            font-size:34px;
          }

          .cards{
            grid-template-columns:repeat(2, minmax(260px, 1fr));
          }
        }

        @media (max-width:768px){
          .sidebar{
            left:10px;
            width:46px;
          }

          .nav-btn{
            width:30px;
            height:30px;
            font-size:14px;
          }

          .page{
            padding:78px 16px 40px 66px;
          }

          .hero{
            min-height:100vh;
          }

          .hero h1{
            font-size:52px;
          }

          .hero h2{
            font-size:24px;
          }

          .hero p{
            font-size:14px;
            max-width:360px;
            margin-bottom:28px;
          }

          .pill{
            font-size:10px;
            padding:7px 12px;
          }

          .cta{
            min-width:250px;
            font-size:14px;
            padding:16px 24px;
          }

          .module-section{
            padding-top:40px;
          }

          .module-header{
            align-items:flex-start;
            gap:14px;
          }

          .module-header .accent{
            height:52px;
          }

          .module-icon{
            width:50px;
            height:50px;
            font-size:22px;
          }

          .module-title h3{
            font-size:24px;
          }

          .module-title p{
            font-size:14px;
          }

          .cards{
            grid-template-columns:1fr;
            gap:14px;
          }

          .card{
            min-height:190px;
          }
        }
      `}</style>

      <div className="ion-page-wrapper">
        <div className="constellation" aria-hidden="true">
          <span style={{ left: '120px', top: '150px', width: '120px', transform: 'rotate(4deg)' }}></span>
          <span style={{ left: '240px', top: '250px', width: '170px', transform: 'rotate(60deg)' }}></span>
          <span style={{ right: '120px', top: '220px', width: '140px', transform: 'rotate(-50deg)' }}></span>
          <span style={{ left: '70px', top: '620px', width: '120px', transform: 'rotate(30deg)' }}></span>
          <span style={{ right: '160px', top: '660px', width: '180px', transform: 'rotate(12deg)' }}></span>
          <span style={{ left: '280px', top: '980px', width: '140px', transform: 'rotate(-20deg)' }}></span>
        </div>

        <aside className="sidebar">
          <button className="nav-btn logo">⚛</button>
          <a href="#home" className="nav-btn active" title="Beranda">⌂</a>
          <a href="#materi" className="nav-btn" title="Materi">📖</a>
          <button className="nav-btn" title="Game">🎮</button>
          <button className="nav-btn" title="Lab">⚗</button>
          <button className="nav-btn" title="Folder">📁</button>
          <button className="nav-btn" title="Chat">💬</button>
          <button className="nav-btn" title="Badge">🎖</button>
          <div className="nav-divider"></div>
          <button className="nav-btn" title="Suara">🔊</button>
          <button className="nav-btn" title="Tema">☼</button>
        </aside>

        <main className="page">
          <section className="hero" id="home">
            <div className="hero-glow"></div>

            <div className="pill">✦ Welcome to the quantum realm</div>

            <h1>Ikatan Kimia</h1>
            <h2>Petualangan Molekul</h2>

            <p>
              Platform pembelajaran imersif untuk mahasiswa. Kuasai konsep ikatan atom
              melalui laboratorium virtual, tantangan interaktif, dan bantuan asisten AI.
            </p>

            <a href="#materi" className="cta">
              Mulai Petualangan
              <span className="play">▶</span>
            </a>
          </section>

          <section className="module-section" id="materi">
            <div className="module-header">
              <div className="accent"></div>
              <div className="module-icon">📘</div>
              <div className="module-title">
                <h3>Modul Materi</h3>
                <p>Eksplorasi konsep ikatan kimia secara mendalam.</p>
              </div>
            </div>

            <div className="cards">
              <article className="card">
                <div className="icon yellow">⚡</div>
                <h4>Ikatan Ion</h4>
                <p>
                  Memahami perpindahan elektron antara atom logam dan nonlogam serta
                  pembentukan kation dan anion.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>

              <article className="card">
                <div className="icon purple">🔗</div>
                <h4>Ikatan Kovalen</h4>
                <p>
                  Mempelajari pemakaian bersama pasangan elektron antar atom untuk
                  membentuk senyawa kovalen.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>

              <article className="card">
                <div className="icon pink">△</div>
                <h4>Kepolaran</h4>
                <p>
                  Menentukan molekul polar dan nonpolar berdasarkan perbedaan
                  keelektronegatifan dan distribusi muatan.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>

              <article className="card">
                <div className="icon orange">⛓</div>
                <h4>Ikatan Logam</h4>
                <p>
                  Menganalisis model lautan elektron pada logam dan kaitannya dengan
                  sifat konduktivitas serta kelenturan.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>

              <article className="card">
                <div className="icon green">🔺</div>
                <h4>Bentuk Molekul</h4>
                <p>
                  Mempelajari bentuk geometri molekul menggunakan teori VSEPR seperti
                  linear, trigonal, tetrahedral, dan lainnya.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>

              <article className="card">
                <div className="icon cyan">✦</div>
                <h4>Gaya Molekul</h4>
                <p>
                  Mengidentifikasi gaya antarmolekul seperti gaya London, dipol-dipol,
                  dan ikatan hidrogen serta pengaruhnya pada sifat zat.
                </p>
                <a href="#" className="btn-learn">Pelajari</a>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
