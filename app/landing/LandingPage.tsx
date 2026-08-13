"use client";

import { useEffect, useState } from "react";
import {
  audience,
  discoveries,
  enrollmentUrl,
  faqs,
  includedItems,
  lessonSteps,
  transformations,
} from "./content";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " light" : ""}`}><span aria-hidden="true" />{children}</p>;
}

function Cta({ children, compact = false, source }: { children: React.ReactNode; compact?: boolean; source: string }) {
  return (
    <a className={`cta${compact ? " compact" : ""}`} href={enrollmentUrl} target="_blank" rel="noreferrer" data-cta={source}>
      <span>{children}</span><b aria-hidden="true">↗</b>
    </a>
  );
}

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowMobileCta(window.scrollY > window.innerHeight * 0.72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ansiedade Decifrada — início">
          <span className="brand-mark">CB</span>
          <span>Cainan Bastos<small>Psicólogo</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#aula">A aula</a>
          <a href="#cainan">Quem conduz</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <Cta compact source="header">Quero entender minha ansiedade</Cta>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker"><i /> Aula ao vivo · prática e direta</p>
            <h1>Sua ansiedade aparece do nada. <em>Mas ela não vem do nada.</em></h1>
            <p className="hero-description">Você já tentou respirar, se distrair e seguir em frente. Nesta aula, vai aprender a reconhecer o pensamento que acende o mal-estar — e praticar o primeiro passo para agir com mais clareza quando ele aparecer.</p>
            <Cta source="hero">Quero decifrar minha ansiedade</Cta>
            <div className="hero-trust">
              <span><b>Ao vivo</b> com Cainan Bastos</span>
              <span><b>Até 2 horas</b> de conteúdo prático</span>
              <span><b>Sem exposição</b> participe no seu ritmo</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img src="/cainan-hero.png" alt="Cainan Bastos, psicólogo e criador do Método Barulhos da Mente" />
              <div className="hero-photo-gradient" />
            </div>
            <div className="method-card"><small>Método</small><strong>Barulhos<br />da Mente</strong><span>clareza antes do controle</span></div>
            <p className="photo-signature"><strong>Cainan Bastos</strong><span>Psicólogo · palestrante · mentor</span></p>
          </div>
        </div>
      </section>

      <section className="authority-strip" aria-label="Experiência profissional de Cainan Bastos">
        <div className="shell">
          <p><strong>8 anos</strong><span>atuando com saúde mental e desenvolvimento emocional</span></p>
          <i />
          <p><strong>4 mil+</strong><span>pessoas atendidas ao longo da trajetória profissional</span></p>
          <i />
          <p><strong>1 método</strong><span>para reconhecer os pensamentos que alimentam a ansiedade</span></p>
        </div>
      </section>

      <section className="section transformation">
        <div className="shell">
          <Eyebrow>A transformação</Eyebrow>
          <div className="section-heading split-heading">
            <h2>Você não precisa continuar <em>lutando no escuro.</em></h2>
            <p>Quando o pensamento aparece com mais clareza, você deixa de reagir apenas ao sintoma e encontra um ponto de partida mais consciente.</p>
          </div>
          <div className="transformation-list">
            {transformations.map(([beforeLabel, before, afterLabel, after], index) => (
              <article key={before}>
                <span className="transformation-index">0{index + 1}</span>
                <div><small>{beforeLabel}</small><p>{before}</p></div>
                <b aria-hidden="true">→</b>
                <div className="after"><small>{afterLabel}</small><p>{after}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section discoveries" id="aula">
        <div className="shell">
          <Eyebrow>O que você vai descobrir</Eyebrow>
          <div className="section-heading"><h2>Do “não sei o que aconteceu” para <em>“agora eu sei por onde começar”.</em></h2></div>
          <div className="discovery-grid">
            {discoveries.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section belief-break">
        <div className="shell belief-grid">
          <div>
            <Eyebrow light>Uma verdade importante</Eyebrow>
            <h2>Respirar fundo pode aliviar. <em>Mas não revela a raiz.</em></h2>
          </div>
          <div className="belief-list">
            <p><span>01</span>Ansiedade não é falta de força de vontade.</p>
            <p><span>02</span>Pensar demais não significa pensar melhor.</p>
            <p><span>03</span>O problema não é ter pensamentos negativos — é acreditar em todos eles.</p>
            <blockquote>A maioria tenta silenciar a ansiedade. <strong>Cainan ensina você a investigar o pensamento que a alimenta.</strong></blockquote>
          </div>
        </div>
      </section>

      <section className="section lesson">
        <div className="shell lesson-heading">
          <Eyebrow>Como a aula funciona</Eyebrow>
          <h2>Menos teoria distante.<br /><em>Mais clareza para a vida real.</em></h2>
          <p>Uma experiência ao vivo, educativa e guiada para você entender o que acontece por dentro e praticar uma ferramenta que possa usar depois.</p>
        </div>
        <div className="shell lesson-track">
          {lessonSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section mentor" id="cainan">
        <div className="shell mentor-grid">
          <div className="mentor-photo">
            <img src="/cainan-apresentacao.png" alt="Retrato de Cainan Bastos em ambiente acolhedor" />
            <span className="photo-caption">Psicologia com linguagem simples</span>
          </div>
          <div className="mentor-copy">
            <Eyebrow>Quem conduz</Eyebrow>
            <h2>Apresentamos<br /><em>Cainan Bastos.</em></h2>
            <p>Psicólogo, palestrante e mentor, Cainan atua há 8 anos ajudando pessoas a compreender ansiedade, pensamentos automáticos, insegurança e autossabotagem.</p>
            <p>Ao longo da trajetória, já atendeu mais de 4 mil pessoas e desenvolveu o <strong>Método Barulhos da Mente</strong>: uma forma prática de reconhecer como pensamentos não tratados podem conduzir emoções, decisões e comportamentos.</p>
            <p>Seu trabalho une experiência clínica, Terapia Cognitivo-Comportamental, neurociência e psicologia aplicada — sem complicar o que precisa ser entendido.</p>
            <p>A aula nasce dessa prática: acolhimento, clareza e um primeiro passo possível para o momento em que a mente parece sair do controle.</p>
            <a className="social-link" href="https://youtube.com/@cainanbastos" target="_blank" rel="noreferrer">Conheça o canal de Cainan <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="section audience">
        <div className="shell audience-layout">
          <div>
            <Eyebrow>Para quem é</Eyebrow>
            <h2>Para quem quer entender a causa — <em>não apenas suportar o sintoma.</em></h2>
          </div>
          <div className="audience-card">
            <p className="card-label">Esta aula é para você se...</p>
            <ul>{audience.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="not-for-you"><strong>Não é promessa mágica.</strong><span>É para quem está disposto a se observar e praticar. Não substitui terapia ou psiquiatria.</span></div>
          </div>
        </div>
      </section>

      <section className="section offer" id="oferta">
        <div className="shell offer-grid">
          <div className="offer-copy">
            <Eyebrow light>Nova turma</Eyebrow>
            <h2>Comece a decifrar o que a sua ansiedade está <em>tentando dizer.</em></h2>
            <p className="offer-intro">Você não precisa sair sabendo tudo. Precisa sair sabendo qual é o primeiro passo.</p>
            <div className="offer-items">{includedItems.map((item) => <span key={item}><i>✓</i>{item}</span>)}</div>
          </div>
          <article className="offer-card">
            <span className="availability"><i /> Interesse na próxima turma</span>
            <h3>Ansiedade<br />Decifrada</h3>
            <p className="price-label">Valor de entrada previsto</p>
            <div className="price"><small>R$</small><strong>29</strong><span>,90</span></div>
            <p className="offer-note">Data, horário e link de pagamento serão confirmados na abertura oficial das inscrições.</p>
            <Cta source="offer">Quero receber os detalhes</Cta>
            <small className="contact-note">A conversa será aberta no perfil de Cainan no Instagram.</small>
          </article>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="shell faq-layout">
          <div><Eyebrow>Perguntas frequentes</Eyebrow><h2>Antes de dar<br /><em>o primeiro passo.</em></h2><p>Informação clara também é parte do cuidado. Veja o que esta aula entrega — e o que ela não promete.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <article key={question} className={isOpen ? "open" : ""}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-orbit" aria-hidden="true" />
        <div className="shell">
          <Eyebrow light>O barulho pode ter uma explicação</Eyebrow>
          <h2>Sua ansiedade pode parecer sem motivo. <em>Talvez você só não tenha aprendido a enxergar o que vem antes dela.</em></h2>
          <p>Dê o primeiro passo para reconhecer esse pensamento e responder com mais clareza quando ele aparecer.</p>
          <Cta source="final">Quero saber da próxima turma</Cta>
          <small>Aula educativa · participação no seu ritmo · não substitui acompanhamento clínico</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand" href="#inicio"><span className="brand-mark">CB</span><span>Cainan Bastos<small>Psicólogo</small></span></a>
          <p>Conteúdo educativo em saúde mental. Em situação de crise, risco ou sofrimento intenso, procure atendimento profissional e os serviços de emergência da sua região.</p>
          <span>© 2026 Cainan Bastos</span>
        </div>
      </footer>

      <div className={`mobile-sticky${showMobileCta ? " visible" : ""}`}>
        <span>Próxima turma <strong>R$ 29,90</strong></span><Cta compact source="mobile">Quero os detalhes</Cta>
      </div>
    </main>
  );
}
