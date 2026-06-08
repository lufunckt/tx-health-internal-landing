import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  GraduationCap,
  Layers,
  Map,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import infoprodutoMockup from './assets/prototypes/infoproduto.png'
import surveyMockup from './assets/prototypes/survey.png'
import landingInfoprodutoMockup from './assets/prototypes/landing-infoproduto.png'
import txHeroSection from './assets/prototypes/tx-health-sections/tx-hero.png'
import txPilaresSection from './assets/prototypes/tx-health-sections/tx-pilares.png'
import txDesafiosSection from './assets/prototypes/tx-health-sections/tx-desafios.png'
import txComoTrabalhamosSection from './assets/prototypes/tx-health-sections/tx-como-trabalhamos.png'
import txResultadosSection from './assets/prototypes/tx-health-sections/tx-resultados.png'
import txCtaFinalSection from './assets/prototypes/tx-health-sections/tx-cta-final.png'

const txHealthSections = [
  {
    title: 'Hero',
    caption: 'Abertura institucional com posicionamento, promessa central e primeira chamada para ação.',
    image: txHeroSection,
  },
  {
    title: 'Pilares',
    caption: 'Blocos principais que organizam a proposta de valor da TX Health Growth.',
    image: txPilaresSection,
  },
  {
    title: 'Desafios',
    caption: 'Leitura dos problemas que clínicas e profissionais enfrentam na jornada digital.',
    image: txDesafiosSection,
  },
  {
    title: 'Como trabalhamos',
    caption: 'Explicação visual do modelo de atuação, consultoria e execução da TX.',
    image: txComoTrabalhamosSection,
  },
  {
    title: 'Resultados',
    caption: 'Seção voltada aos indicadores e resultados esperados para a operação de crescimento.',
    image: txResultadosSection,
  },
  {
    title: 'CTA final',
    caption: 'Fechamento da landing com chamada clara para iniciar a conversa estratégica.',
    image: txCtaFinalSection,
  },
]

const prototypeCards = [
  {
    title: 'Landing principal da TX Health Growth',
    caption: 'Página institucional para posicionar a TX como parceira de crescimento em saúde.',
    image: txHeroSection,
    sections: txHealthSections,
  },
  {
    title: 'Landing do infoproduto',
    caption: 'Página de captação para transformar interesse no Radar em leads qualificados.',
    image: landingInfoprodutoMockup,
  },
  {
    title: 'Exemplo do infoproduto',
    caption: 'Protótipo do mapa visual que traduz dados agregados em inteligência acionável.',
    image: infoprodutoMockup,
  },
  {
    title: 'Survey para respondentes',
    caption: 'Pesquisa curta, cuidadosa e voltada à jornada digital do paciente.',
    image: surveyMockup,
  },
]

const structureCards = [
  {
    icon: Target,
    title: 'Posicionamento',
    text: 'Organiza a TX Health Growth como marca consultiva, especialista em crescimento para saúde.',
  },
  {
    icon: BarChart3,
    title: 'Inteligência de mercado',
    text: 'Transforma um levantamento exploratório em dados agregados sobre comportamento digital.',
  },
  {
    icon: FileText,
    title: 'Produto de autoridade',
    text: 'Cria um ativo proprietário para educar o mercado e sustentar conversas comerciais.',
  },
  {
    icon: TrendingUp,
    title: 'Geração de demanda',
    text: 'Conecta conteúdo, landing pages e distribuição para gerar leads com contexto.',
  },
  {
    icon: Users,
    title: 'Comercial consultivo',
    text: 'Apoia reuniões com diagnóstico, perguntas melhores e narrativa baseada em dados.',
  },
]

const radarTabs = [
  'Visão geral do Radar',
  'Mapa da Jornada Digital do Paciente',
  'Mapa das Fricções',
  'Perfis de Paciente Digital',
  'Diagnóstico para Clínicas',
  'Recomendações Estratégicas',
]

const surveyBlocks = [
  'Perfil geral',
  'Como a busca começa',
  'Confiança e comparação',
  'Fricções na jornada',
  'WhatsApp e agendamento',
  'Tecnologia, automação e IA',
  'Privacidade e dados',
  'Pergunta aberta',
  'Perfil de Paciente Digital',
  'Opt-in para receber o mapa',
]

const respondentGoals = [
  {
    title: 'Meta mínima',
    value: '300',
    text: 'respostas qualificadas para uma primeira leitura consistente do comportamento digital.',
  },
  {
    title: 'Meta ideal',
    value: '500+',
    text: 'respostas para enriquecer recortes, narrativas e insumos comerciais do Radar.',
  },
  {
    title: 'Meta avançada',
    value: '1.000',
    text: 'respostas para estruturar uma segunda fase com mais profundidade analítica.',
  },
]

const trainingModules = [
  'Entender o posicionamento',
  'Entender a jornada digital do paciente',
  'Usar dados do Radar na conversa comercial',
  'Diagnosticar fricções da clínica',
  'Conduzir reunião consultiva',
  'Apresentar a TX como parceira de crescimento',
]

const salesQuestions = [
  'Hoje vocês sabem em qual etapa mais pacientes desistem?',
  'O WhatsApp de vocês tem fluxo ou depende de improviso?',
  'A clínica consegue medir quantos contatos viram agendamento?',
  'O paciente entende rapidamente convênio, valores, horários e próximos passos?',
  'A presença digital de vocês gera confiança antes do primeiro contato?',
]

const projectFunnel = [
  'Pesquisa respondida por pacientes',
  'Dados agregados',
  'Mapa Interativo',
  'Landing de download',
  'Lead qualificado',
  'Nutrição com insights',
  'Reunião estratégica',
  'Diagnóstico da jornada digital da clínica',
  'Proposta TX Health Growth',
]

const executionTracks = [
  'Definição estratégica',
  'Pesquisa e coleta de dados',
  'Produto de autoridade',
  'Landing pages e captação',
  'Conteúdo e distribuição',
  'Treinamento comercial',
  'Ativação comercial',
]

const decisionItems = [
  'Nome final do projeto',
  'Estrutura da survey',
  'Meta inicial de respondentes',
  'Canais de divulgação',
  'Design da landing geral da TX',
  'Design da landing do infoproduto',
  'Formato do mapa interativo',
  'Responsáveis por conteúdo, design, tráfego e comercial',
  'Estrutura de execução',
  'Critérios de sucesso',
]

const heroFlow = ['Pesquisa', 'Mapa Interativo', 'Landing', 'Leads', 'Reuniões', 'Vendas']

function SectionHeader({ label, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? 'text-teal-300' : 'text-[#6D4AFF]'
        }`}
      >
        {label}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-[-0.04em] md:text-5xl ${
          dark ? 'text-white' : 'text-[#061428]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

function IconFrame({ icon: Icon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-teal-300 shadow-lg shadow-cyan-950/20">
      <Icon size={22} strokeWidth={1.8} />
    </div>
  )
}

function MockupFrame({ image, title, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-3 shadow-2xl shadow-cyan-950/30 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full rounded-[1.35rem] object-contain object-top"
        loading="lazy"
      />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061428] px-5 py-8 text-white md:px-8 md:py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(32,214,181,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(109,74,255,0.24),transparent_30%),linear-gradient(135deg,#061428_0%,#111827_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="TX Health Growth">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black tracking-[-0.08em] text-[#061428]">
            TX
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-200">
            HEALTH GROWTH
          </span>
        </a>
        <a
          href="#decisoes"
          className="hidden rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-200 md:inline-flex"
        >
          Decisões necessárias
        </a>
      </header>

      <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-16 md:grid-cols-[1fr_0.86fr] md:pb-24 md:pt-24">
        <div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Plano Estratégico TX Health Growth
          </h1>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-tight text-teal-200 md:text-3xl">
            Crescimento em saúde não é só marketing. É infraestrutura.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Como transformar pesquisa, dados, infoproduto e treinamento comercial em uma
            estrutura de diferenciação para vender crescimento em saúde.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Este projeto organiza a TX Health Growth como uma marca consultiva, baseada em
            dados reais sobre comportamento do paciente, experiência digital, atendimento,
            automação e jornada de agendamento.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#decisoes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20D6B5] px-6 py-4 text-sm font-bold text-[#061428] shadow-xl shadow-teal-950/40 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              Aprovar estrutura do projeto
              <ArrowRight size={18} />
            </a>
            <a
              href="#plano"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
            >
              Ver plano completo
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm font-semibold text-white">Radar TX Health Growth</p>
              <p className="text-xs text-slate-400">Sistema de inteligência comercial</p>
            </div>
            <span className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-semibold text-teal-200">
              Estrutura integrada
            </span>
          </div>
          <div className="space-y-3">
            {heroFlow.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#061428]/55 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#061428]">
                  {index + 1}
                </span>
                <span className="flex-1 text-sm font-semibold text-slate-100">{item}</span>
                {index < heroFlow.length - 1 ? <ArrowRight className="text-teal-300" size={17} /> : <CheckCircle2 className="text-teal-300" size={18} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PrototypeSection() {
  const [openPrototype, setOpenPrototype] = useState(null)

  return (
    <section id="plano" className="bg-[#F5F7FA] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Protótipos visuais já criados"
          title="Os principais ativos do Radar em uma narrativa única."
          description="Os mockups abaixo são os assets reais do projeto e funcionam como referência visual para aprovação da estrutura."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {prototypeCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <button
                type="button"
                onClick={() => setOpenPrototype(card)}
                className="flex h-[360px] w-full items-center justify-center overflow-hidden bg-slate-100 p-4 text-left transition hover:bg-slate-200/80 sm:h-[440px] lg:h-[520px]"
                aria-label={`Ampliar protótipo: ${card.title}`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>
              <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#061428]">{card.title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-slate-600">{card.caption}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenPrototype(card)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#061428] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6D4AFF]"
                >
                  Ampliar protótipo
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {openPrototype ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/90 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8"
          onClick={() => setOpenPrototype(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="prototype-modal-title"
        >
          <button
            type="button"
            onClick={() => setOpenPrototype(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Fechar modal"
          >
            <X size={22} />
          </button>
          <div
            className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
              <h3 id="prototype-modal-title" className="text-2xl font-semibold tracking-[-0.04em] text-[#061428]">
                {openPrototype.title}
              </h3>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">{openPrototype.caption}</p>
              {openPrototype.sections ? (
                <p className="mt-3 rounded-2xl border border-purple-200 bg-purple-50 px-4 py-3 text-sm leading-6 text-purple-950">
                  Protótipos visuais para aprovação interna. Conteúdos, métricas e dados finais
                  devem ser validados antes da publicação externa.
                </p>
              ) : null}
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-[#F5F7FA] p-3 sm:p-6">
              {openPrototype.sections ? (
                <div className="mx-auto grid max-w-6xl gap-6">
                  {openPrototype.sections.map((section) => (
                    <article
                      key={section.title}
                      className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
                    >
                      <div className="px-5 py-5 sm:px-7">
                        <h4 className="text-xl font-semibold tracking-[-0.03em] text-[#061428]">
                          {section.title}
                        </h4>
                        <p className="mt-2 leading-7 text-slate-600">{section.caption}</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-3 sm:p-5">
                        <img
                          src={section.image}
                          alt={`Landing principal da TX Health Growth - ${section.title}`}
                          className="mx-auto w-full rounded-2xl object-contain"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <img
                  src={openPrototype.image}
                  alt={openPrototype.title}
                  className="mx-auto w-full max-w-6xl rounded-2xl object-contain shadow-xl shadow-slate-900/12"
                />
              )}
            </div>
            <div className="flex justify-end border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={() => setOpenPrototype(null)}
                className="inline-flex items-center justify-center rounded-full bg-[#061428] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6D4AFF]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function TxHealthSectionsSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Aprovação por blocos"
          title="Landing principal da TX Health por seções"
          description="A landing geral da TX Health Growth aparece abaixo como uma sequência de seções aprováveis, sem depender de um único print comprimido."
        />
        <p className="mx-auto mb-8 max-w-3xl rounded-2xl border border-purple-200 bg-purple-50 px-5 py-4 text-center text-sm leading-6 text-purple-950">
          Protótipos visuais para aprovação interna. Conteúdos, métricas e dados finais devem
          ser validados antes da publicação externa.
        </p>
        <div className="grid gap-7 lg:grid-cols-2">
          {txHealthSections.map((section) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F5F7FA] shadow-xl shadow-slate-900/6"
            >
              <div className="border-b border-slate-200 bg-white p-6 md:p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#061428]">
                  {section.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{section.caption}</p>
              </div>
              <div className="flex min-h-[320px] items-start justify-center p-3 sm:min-h-[400px] sm:p-5">
                <img
                  src={section.image}
                  alt={`Landing principal da TX Health Growth - ${section.title}`}
                  className="w-full rounded-[1.25rem] object-contain object-top"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StructureSection() {
  return (
    <section className="bg-[#061428] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Estrutura TX Health Growth"
          title="Uma arquitetura de crescimento, não uma campanha isolada."
          description="O Radar conecta posicionamento, inteligência proprietária, produto de autoridade e operação comercial em uma mesma estrutura."
          dark
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {structureCards.map(({ icon, title, text }) => (
            <article key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
              <IconFrame icon={icon} />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MockupDetailSection({ id, image, icon: Icon, title, description, reverse = false, children }) {
  return (
    <section id={id} className="bg-[#111827] px-5 py-20 text-white md:px-8 md:py-28">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        <MockupFrame image={image} title={title} />
        <div>
          <IconFrame icon={Icon} />
          <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

function InfoproductExample() {
  return (
    <section className="bg-[#F5F7FA] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#6D4AFF]">Exemplo do infoproduto</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#061428] md:text-5xl">
              Não será um ebook comum. Será um mapa visual e interativo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              O Mapa Interativo da Jornada Digital do Paciente transforma dados agregados em
              leitura estratégica para clínicas, profissionais de saúde e conversas comerciais.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {radarTabs.map((tab) => (
                <div key={tab} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#061428] shadow-sm">
                  {tab}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-4 text-sm leading-6 text-purple-950">
              Dados ilustrativos para protótipo. Os dados finais serão inseridos após a coleta da pesquisa.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/12">
            <img src={infoprodutoMockup} alt="Exemplo do infoproduto" className="w-full rounded-[1.35rem] object-contain object-top" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SurveySection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F5F7FA] p-3 shadow-2xl shadow-slate-900/10">
            <img src={surveyMockup} alt="Survey para respondentes" className="w-full rounded-[1.35rem] object-contain object-top" loading="lazy" />
          </div>
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061428] text-teal-300">
              <ClipboardList size={24} />
            </div>
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#061428] md:text-5xl">
              Survey cuidadosa para entender a jornada digital do paciente.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-8 text-slate-600">
              <p>
                O objetivo da pesquisa é captar percepções sobre busca, confiança, atendimento,
                agendamento, tecnologia e privacidade na jornada digital.
              </p>
              <p>
                Tempo estimado: <strong className="text-[#061428]">4 a 6 minutos</strong>.
              </p>
              <p>
                Cuidados: não coleta sintomas, diagnósticos, exames, medicamentos, prontuários
                ou relatos clínicos.
              </p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F5F7FA] p-5">
                <p className="text-sm font-semibold text-[#061428]">Resultado para o participante</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Perfil de Paciente Digital.</p>
              </div>
              <div className="rounded-2xl bg-[#F5F7FA] p-5">
                <p className="text-sm font-semibold text-[#061428]">Resultado para a TX</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Base de dados para mapa, conteúdos e comercial.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader
            label="Estrutura da survey"
            title="Da primeira busca ao opt-in para receber o mapa."
            description="A sequência foi desenhada para gerar inteligência sobre a jornada digital sem entrar em dados clínicos sensíveis."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {surveyBlocks.map((block, index) => (
              <div key={block} className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-4">
                <span className="text-xs font-bold text-[#6D4AFF]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#061428]">{block}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RespondentGoals() {
  return (
    <section className="bg-[#061428] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Meta de respondentes"
          title="Primeira edição como estudo proprietário exploratório."
          description="A comunicação deve tratar a primeira edição como levantamento exploratório com dados agregados, evitando promessas amplas sobre o mercado."
          dark
        />
        <div className="grid gap-5 md:grid-cols-3">
          {respondentGoals.map((goal) => (
            <article key={goal.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{goal.title}</p>
              <p className="mt-5 text-6xl font-semibold tracking-[-0.08em]">{goal.value}</p>
              <p className="mt-5 leading-7 text-slate-300">{goal.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrainingSection() {
  return (
    <section className="bg-[#F5F7FA] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Treinamento comercial"
          title="Do dado à conversa consultiva."
          description="O treinamento prepara o time para usar o Radar como ferramenta de diagnóstico, não como argumento genérico de marketing."
        />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] bg-[#061428] p-8 text-white">
            <IconFrame icon={GraduationCap} />
            <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">Módulos de capacitação</h3>
            <div className="mt-6 space-y-3">
              {trainingModules.map((module) => (
                <div key={module} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-teal-300" size={18} />
                  <p className="text-sm font-medium leading-6 text-slate-100">{module}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#061428]">Perguntas comerciais</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Perguntas para abrir diagnóstico e posicionar a TX como parceira de crescimento.
            </p>
            <div className="mt-7 space-y-4">
              {salesQuestions.map((question) => (
                <div key={question} className="flex gap-4 rounded-2xl bg-[#F5F7FA] p-5">
                  <MessageCircle className="mt-1 shrink-0 text-[#6D4AFF]" size={20} />
                  <p className="font-semibold leading-7 text-[#061428]">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FunnelSection() {
  return (
    <section className="bg-[#111827] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Funil do projeto"
          title="Da resposta do paciente à proposta comercial."
          description="A força do Radar está em transformar um estudo proprietário em fluxo de aquisição, nutrição e diagnóstico."
          dark
        />
        <div className="grid gap-3 md:grid-cols-3">
          {projectFunnel.map((item, index) => (
            <div key={item} className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <span className="text-xs font-bold text-teal-300">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-3 min-h-12 text-base font-semibold leading-6">{item}</p>
              {index < projectFunnel.length - 1 ? (
                <ArrowRight className="absolute right-5 top-5 hidden text-white/30 md:block" size={18} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExecutionAndDecisions() {
  return (
    <section id="decisoes" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#F5F7FA] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061428] text-teal-300">
              <Layers size={24} />
            </div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em] text-[#061428] md:text-4xl">
              Etapas de execução
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A execução deve ser organizada por frentes de trabalho, sem sequência temporal
              pública ou promessas operacionais desnecessárias.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {executionTracks.map((track) => (
                <div key={track} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[#061428]">
                  {track}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#061428] p-8 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#061428]">
              <CheckCircle2 size={24} />
            </div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Decisões necessárias
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Pontos que precisam ser validados para aprovar a estrutura e iniciar a execução.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {decisionItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-teal-300" size={17} />
                  <p className="text-sm font-medium leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#061428,#111827_55%,#6D4AFF)] p-8 text-white md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                Aprovar plano e iniciar execução
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-200">
                A aprovação libera a estrutura estratégica do Radar TX Health Growth como motor
                de inteligência, demanda e vendas consultivas.
              </p>
            </div>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20D6B5] px-7 py-4 text-sm font-bold text-[#061428] transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              Aprovar plano
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-[#061428] font-sans antialiased">
      <Hero />
      <PrototypeSection />
      <TxHealthSectionsSection />
      <StructureSection />
      <MockupDetailSection
        id="landing-principal"
        image={txHeroSection}
        icon={Search}
        title="Landing principal da TX Health"
        description="A página institucional posiciona a TX como parceira de crescimento para clínicas e profissionais de saúde, conectando aquisição, atendimento, dados e experiência digital em uma proposta única."
      />
      <MockupDetailSection
        id="landing-infoproduto"
        image={landingInfoprodutoMockup}
        icon={Map}
        title="Mapa Interativo da Jornada Digital do Paciente"
        description="A landing do infoproduto serve para captar leads qualificados e gerar reuniões a partir de um ativo consultivo, baseado em respostas reais e dados agregados."
        reverse
      >
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <Database className="text-teal-300" size={22} />
            <p className="mt-3 text-sm font-semibold text-white">Inteligência sobre a jornada digital do paciente</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <Brain className="text-teal-300" size={22} />
            <p className="mt-3 text-sm font-semibold text-white">Mapa interativo baseado em respostas reais</p>
          </div>
        </div>
      </MockupDetailSection>
      <InfoproductExample />
      <SurveySection />
      <RespondentGoals />
      <TrainingSection />
      <FunnelSection />
      <section className="bg-[#F5F7FA] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5">
            <ShieldCheck className="text-[#20D6B5]" size={30} />
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#061428]">Termos seguros</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Estudo proprietário, dados agregados, levantamento exploratório e inteligência
              sobre a jornada digital do paciente.
            </p>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5 md:col-span-2">
            <Target className="text-[#6D4AFF]" size={30} />
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#061428]">Critério estratégico</h3>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              O Radar deve ser apresentado como infraestrutura de crescimento: um sistema que
              gera diagnóstico, autoridade, relacionamento e oportunidades comerciais mais
              qualificadas para a TX Health Growth.
            </p>
          </article>
        </div>
      </section>
      <ExecutionAndDecisions />
    </main>
  )
}

export default App
