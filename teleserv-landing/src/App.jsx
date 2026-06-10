import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import './App.css'

const whatsappNumber = '5500000000000'
const phoneDisplay = '(00) 00000-0000'
const phoneUrl = `tel:${whatsappNumber}`
const instagramHandle = '@teleserv'
const instagramUrl = 'https://www.instagram.com/teleserv'
const whatsappMessage =
  'Olá, vim pela landing page da Teleserv e quero solicitar uma avaliação para infraestrutura de redes.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`

const benefits = [
  {
    title: 'Rede pronta para crescer',
    text: 'Planejamento e execução de infraestrutura para empresas que precisam de internet estável, conexão organizada e rede preparada para expansão.',
  },
  {
    title: 'Menos paradas operacionais',
    text: 'Diagnóstico técnico, padronização de pontos, rack, cabeamento, fibra óptica e equipamentos para reduzir falhas que travam o dia a dia.',
  },
  {
    title: 'Atendimento direto',
    text: 'Contato pelo WhatsApp para levantar a necessidade de conectividade, agendar visita técnica e acelerar a proposta comercial.',
  },
]

const services = [
  'Cabeamento estruturado',
  'Organização de racks',
  'Instalação de pontos de rede',
  'Infraestrutura para internet e fibra óptica',
  'Infraestrutura para telefonia e dados',
  'Manutenção preventiva',
  'Projetos para novas unidades',
]

const testimonials = [
  {
    quote:
      'A Teleserv organizou nossa estrutura de rede com rapidez e clareza. O ambiente ficou mais limpo, os pontos foram identificados e as quedas reduziram muito.',
    author: 'Mariana Lopes',
    role: 'Gerente administrativa',
  },
  {
    quote:
      'Precisávamos preparar uma nova unidade e o atendimento técnico ajudou desde o levantamento até a instalação. Conseguimos abrir a filial com a rede pronta.',
    author: 'Ricardo Almeida',
    role: 'Coordenador de operações',
  },
  {
    quote:
      'O diagnóstico mostrou onde estavam os gargalos da nossa infraestrutura. Depois da manutenção, os setores passaram a trabalhar com mais estabilidade.',
    author: 'Camila Santos',
    role: 'Responsável de TI',
  },
]

function CtaLink({ children, variant = 'primary' }) {
  return (
    <a className={`cta cta-${variant}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      <FaWhatsapp aria-hidden="true" />
      {children}
    </a>
  )
}

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Cabeçalho">
        <a className="brand" href="#top" aria-label="Teleserv">
          <img src="/assets/teleserv-logo.png" alt="Teleserv" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <CtaLink variant="small">WhatsApp</CtaLink>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Infraestrutura de redes, internet e fibra óptica</p>
          <h1>
            Internet mais estável e segura para sua empresa com uma rede profissional.
          </h1>
          <p className="subheadline">
            A Teleserv projeta, instala e organiza infraestrutura de telecomunicação para
            empresas que dependem de internet, fibra óptica e conectividade para não
            perder produtividade por falhas de conexão.
          </p>
          <div className="hero-actions">
            <CtaLink>Solicitar avaliação pelo WhatsApp</CtaLink>
            <CtaLink variant="secondary">Agendar visita técnica</CtaLink>
          </div>
          <div className="trust-row" aria-label="Reforços de credibilidade">
            <span>Atendimento para empresas</span>
            <span>Projetos sob medida</span>
            <span>Suporte técnico especializado</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Técnico de redes Teleserv">
          <div className="signal-card">
            <span>Status da rede</span>
            <strong>Projeto em análise</strong>
          </div>
          <img src="/assets/teleserv-tecnico.png" alt="Técnico de redes com capacete e maleta" />
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading">
          <p className="eyebrow">Benefícios</p>
          <h2>Internet estável e conectividade bem planejada aparecem no resultado da operação.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="card-marker" aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="services-copy">
          <p className="eyebrow">O que a Teleserv entrega</p>
          <h2>Da avaliação técnica à entrega da rede, internet e fibra óptica funcionando.</h2>
          <p>
            Cada projeto começa com entendimento do ambiente, volume de usuários,
            pontos críticos, conectividade e necessidade de crescimento. A partir disso,
            a Teleserv indica a melhor solução para sua empresa.
          </p>
          <CtaLink variant="secondary">Falar com um técnico</CtaLink>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <div className="service-item" key={service}>
              <span aria-hidden="true">+</span>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="quote-block">
          <p className="eyebrow">Feedback de clientes</p>
          <h2>Empresas que precisam de internet e rede funcionando sentem a diferença.</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <blockquote>"{testimonial.quote}"</blockquote>
                <cite>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </cite>
              </article>
            ))}
          </div>
        </div>
        <div className="credibility-card">
          <h2>Garantia de clareza técnica antes da execução.</h2>
          <p>
            Você recebe orientação objetiva sobre rede corporativa, internet, fibra
            óptica e pontos que merecem prioridade para manter a continuidade da operação.
          </p>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <p className="eyebrow">Pronto para melhorar sua rede?</p>
        <h2>Solicite uma avaliação e receba o próximo passo pelo WhatsApp.</h2>
        <p>
          Envie uma mensagem para iniciar o atendimento, agendar uma visita técnica
          ou pedir uma proposta para sua empresa.
        </p>
        <CtaLink>Chamar a Teleserv no WhatsApp</CtaLink>
        <div className="contact-links" aria-label="Outros canais de contato">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <FaInstagram aria-hidden="true" />
            <span>Instagram</span>
            <strong>{instagramHandle}</strong>
          </a>
          <a href={phoneUrl}>
            <FaPhoneAlt aria-hidden="true" />
            <span>Telefone</span>
            <strong>{phoneDisplay}</strong>
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <p>
          Desenvolvido por{' '}
          <a href="https://github.com/vinisousadev" target="_blank" rel="noreferrer">
            Vinícius Sousa
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
