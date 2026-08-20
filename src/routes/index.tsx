import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Shield,
  Scale,
  Gavel,
  FileSearch,
  ClipboardCheck,
  FileText,
  BookOpen,
  Users,
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Handshake,
  Lock,
  Sparkles,
  Compass,
} from "lucide-react";
import logoImg from "@/assets/logo-cropped.png";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat, WA_LINK } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Junio de Souza Ferreira — Assessoria Jurídica Trabalhista Empresarial | Quissamã/RJ" },
      {
        name: "description",
        content:
          "Assessoria jurídica trabalhista para empresas. Consultoria preventiva, compliance e representação judicial. Atendimento online em todo o Estado do Rio de Janeiro. OAB/RJ 237.824.",
      },
      { name: "keywords", content: "advogado trabalhista empresarial, direito do trabalho empresarial, assessoria jurídica trabalhista, consultoria trabalhista, compliance trabalhista, Quissamã, Macaé, Campos dos Goytacazes, Rio das Ostras, Rio de Janeiro" },
      { property: "og:title", content: "Junio de Souza Ferreira — Assessoria Jurídica Trabalhista Empresarial" },
      { property: "og:description", content: "Consultoria preventiva e representação judicial em matéria trabalhista para empresas. Atendimento online em todo o Estado do Rio de Janeiro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Junio de Souza Ferreira — Advocacia Trabalhista Empresarial",
          description:
            "Assessoria jurídica trabalhista para empresas: consultoria preventiva, compliance, auditoria e representação judicial.",
          areaServed: "Estado do Rio de Janeiro",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Barão de Monte Cedro, 481",
            addressLocality: "Quissamã",
            addressRegion: "RJ",
            postalCode: "28735-071",
            addressCountry: "BR",
          },
          founder: {
            "@type": "Person",
            name: "Junio de Souza Ferreira",
            identifier: "OAB/RJ 237.824",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const areas = [
  { icon: Shield, title: "Consultoria Trabalhista Empresarial", desc: "Orientação contínua às empresas na condução das relações de trabalho e na interpretação da legislação aplicável." },
  { icon: Gavel, title: "Defesa em Reclamações Trabalhistas", desc: "Representação judicial em todas as fases processuais, com atuação técnica e acompanhamento personalizado." },
  { icon: ClipboardCheck, title: "Compliance Trabalhista", desc: "Estruturação de políticas internas alinhadas à legislação e à jurisprudência trabalhista." },
  { icon: FileSearch, title: "Auditoria Preventiva", desc: "Revisão de rotinas, contratos e procedimentos internos para identificação de pontos de exposição." },
  { icon: FileText, title: "Elaboração de Contratos", desc: "Redação de contratos de trabalho, prestação de serviços e demais instrumentos empresariais." },
  { icon: BookOpen, title: "Pareceres Jurídicos", desc: "Análise técnica de questões pontuais em matéria trabalhista, com fundamentação normativa e jurisprudencial." },
  { icon: Scale, title: "Regimentos Internos", desc: "Elaboração e revisão de regimentos, códigos de conduta e políticas empresariais." },
  { icon: Users, title: "Treinamentos Empresariais", desc: "Capacitação de gestores e equipes sobre boas práticas em relações de trabalho." },
];

const diferenciais = [
  { icon: Handshake, title: "Atendimento personalizado", desc: "Cada empresa recebe acompanhamento próximo e adequado à sua realidade." },
  { icon: Compass, title: "Planejamento jurídico preventivo", desc: "Análise antecipada de riscos e orientação estratégica contínua." },
  { icon: Scale, title: "Atuação consultiva e contenciosa", desc: "Suporte integrado, da prevenção à representação em juízo." },
  { icon: Sparkles, title: "Comunicação clara", desc: "Linguagem objetiva, acessível e tecnicamente precisa." },
  { icon: Shield, title: "Ética profissional", desc: "Conduta pautada pelos princípios da advocacia." },
  { icon: Lock, title: "Sigilo das informações", desc: "Tratamento reservado e responsável de todos os dados." },
  { icon: MessageCircle, title: "Atendimento online", desc: "Reuniões e acompanhamento por videoconferência para empresas de todo o Estado." },
  { icon: MapPin, title: "Atendimento presencial", desc: "Realizado mediante prévio agendamento, na sede ou em outras localidades." },
];

const cidades = [
  "Quissamã", "Campos dos Goytacazes", "Macaé", "Rio das Ostras", "Cabo Frio",
  "Nova Friburgo", "Petrópolis", "Niterói", "São Gonçalo", "Duque de Caxias",
  "Volta Redonda", "Rio de Janeiro",
];

const metodologia = [
  { step: "01", title: "Contato inicial", desc: "Recebimento da solicitação e apresentação do escritório." },
  { step: "02", title: "Análise preliminar", desc: "Compreensão do contexto e identificação da matéria envolvida." },
  { step: "03", title: "Agendamento", desc: "Marcação da reunião, presencial ou online." },
  { step: "04", title: "Reunião", desc: "Diálogo aprofundado sobre a demanda e as informações relevantes." },
  { step: "05", title: "Definição da estratégia jurídica", desc: "Elaboração do plano de atuação adequado ao caso." },
  { step: "06", title: "Acompanhamento", desc: "Condução técnica e comunicação contínua com a empresa." },
];

const faqs = [
  {
    q: "Quando buscar assessoria jurídica trabalhista?",
    a: "A assessoria pode ser útil desde a estruturação das relações de trabalho, para prevenir litígios, até a atuação em demandas já instauradas. A orientação preventiva costuma reduzir a exposição a riscos ao longo do tempo.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "As reuniões e o acompanhamento são realizados por videoconferência, com envio de documentos por meios digitais. Essa modalidade permite atender empresas localizadas em qualquer município do Estado do Rio de Janeiro.",
  },
  {
    q: "O escritório realiza atendimento presencial?",
    a: "Sim. O atendimento presencial ocorre na sede em Quissamã/RJ ou em outras localidades, sempre mediante prévio agendamento.",
  },
  {
    q: "Quais empresas podem contratar assessoria?",
    a: "A atuação é voltada a empresas de diferentes portes e segmentos que necessitem de orientação jurídica em matéria trabalhista, tanto de forma pontual quanto continuada.",
  },
  {
    q: "Como ocorre o primeiro atendimento?",
    a: "Após o contato inicial, é realizada uma análise preliminar da demanda e agendada uma reunião para compreensão do contexto e apresentação das possibilidades de atuação.",
  },
];

const selos = [
  "Atendimento online em todo o Estado do Rio de Janeiro",
  "Escritório físico em Quissamã/RJ",
  "Atendimento presencial mediante agendamento",
  "OAB/RJ nº 237.824",
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <WhatsAppFloat />

      {/* HERO */}
      <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary mb-5">
                Junio de Souza Ferreira · OAB/RJ 237.824
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] mb-6">
                <span className="text-foreground">Assessoria Jurídica</span>
                <br />
                <span className="text-gradient-gold">Trabalhista</span>
                <br />
                <span className="text-foreground/90">para Empresas</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Atuação voltada à consultoria preventiva e à representação judicial em matéria
                trabalhista, oferecendo suporte jurídico para empresas na gestão das relações
                de trabalho e na prevenção de riscos.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-9">
                {selos.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-gradient-gold text-primary-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm shadow-gold hover:scale-[1.03] transition-transform"
                >
                  Entrar em contato
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-gold/40 text-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-primary/10 transition-colors"
                >
                  Conhecer o advogado
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-3xl opacity-25" />
              <motion.img
                src={logoImg}
                alt="Junio de Souza Ferreira — Advocacia Trabalhista Empresarial"
                width={1024}
                height={1024}
                className="relative w-full max-w-[34rem] mx-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="py-20 md:py-28 relative border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Apresentação</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Atuação voltada à <span className="text-gradient-gold">segurança jurídica</span> empresarial
            </h2>
            <div className="gold-divider w-24 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5">
              O escritório atua na consultoria preventiva e na representação judicial em matéria
              trabalhista, prestando suporte jurídico a empresas na gestão das relações de trabalho.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A atuação busca orientar empresários na prevenção de riscos, na interpretação da
              legislação trabalhista e na condução de questões jurídicas relacionadas ao ambiente
              empresarial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Áreas de Atuação</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Matérias em que o <span className="text-gradient-gold">escritório atua</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="group h-full relative bg-card/60 backdrop-blur-sm border border-gold/15 rounded-md p-7 transition-all duration-500 hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-sm bg-gradient-gold-soft flex items-center justify-center mb-5 shadow-gold">
                    <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 md:py-32 relative border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Nossa forma de atuação</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Princípios que <span className="text-gradient-gold">orientam o trabalho</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {diferenciais.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 0.05}>
                <div className="h-full bg-card/40 border border-gold/15 rounded-md p-6 hover:border-gold/50 transition-colors">
                  <d.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2 text-foreground">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 sm:py-24 md:py-32 relative border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-card/70 p-7 sm:p-10 md:p-12 shadow-elegant">
                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <img
                    src={logoImg}
                    alt="Junio Souza — Advogado Trabalhista"
                    width={828}
                    height={568}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                  <div className="gold-divider mt-8 mb-6" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="font-display text-2xl sm:text-3xl text-gradient-gold">OAB/RJ</p>
                      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">237.824</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl sm:text-3xl text-gradient-gold">RJ</p>
                      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">Atendimento estadual</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary mb-4">Sobre o escritório</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-5 leading-tight">
                  Junio de Souza <span className="text-gradient-gold">Ferreira</span>
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6">
                  Advocacia trabalhista empresarial · OAB/RJ nº 237.824
                </p>
                <div className="gold-divider w-24 mb-8" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-foreground/80 leading-relaxed mb-5">
                  O escritório é dedicado ao Direito do Trabalho empresarial, com atuação voltada
                  à orientação jurídica de empresas, à análise de riscos e ao acompanhamento de
                  demandas judiciais.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-5">
                  A proposta é oferecer suporte técnico e ético para que decisões empresariais sejam
                  tomadas com maior segurança jurídica, clareza e planejamento.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A atuação privilegia o diálogo próximo, a análise individualizada e a construção
                  de estratégias compatíveis com a realidade de cada empresa.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    { t: "LEALDADE", d: "Compromisso com o cliente." },
                    { t: "INTEGRIDADE", d: "Conduta ética em cada decisão técnica." },
                    { t: "ESTRATÉGIA", d: "Atuação preventiva e personalizada." },
                    { t: "TÉCNICA", d: "Fundamentação normativa e jurisprudencial." },
                  ].map((v) => (
                    <div key={v.t} className="border-l border-gold/40 pl-4 py-1">
                      <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{v.t}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{v.d}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento" className="py-24 md:py-32 relative border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Atendimento</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Atendimento em todo o <span className="text-gradient-gold">Estado do Rio de Janeiro</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-foreground/80 leading-relaxed mb-5">
                O escritório possui sede física em Quissamã/RJ e realiza atendimento jurídico
                online para empresas localizadas em qualquer município do Estado do Rio de Janeiro.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Quando necessário, o atendimento presencial poderá ser realizado mediante
                agendamento, tanto na sede quanto em outras localidades.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 border border-gold/40 rounded-sm bg-primary/5">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-xs uppercase tracking-widest text-foreground/90 font-medium">
                  Atendimento online para todo o Estado do RJ
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-card/50 border border-gold/20 rounded-md p-8">
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <h3 className="font-display text-xl">Municípios atendidos</h3>
                </div>
                <div className="gold-divider mb-6" />
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {cidades.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-foreground/85">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                  E demais municípios do Estado do Rio de Janeiro mediante atendimento online.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section id="metodologia" className="py-24 md:py-32 relative border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Metodologia</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Como conduzimos o <span className="text-gradient-gold">atendimento</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            <div className="space-y-8">
              {metodologia.map((m, i) => (
                <Reveal key={m.step} delay={i * 0.05}>
                  <div
                    className={`relative flex md:grid md:grid-cols-2 md:gap-10 items-start ${
                      i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                    }`}
                  >
                    <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"}`}>
                      <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-2">Etapa {m.step}</div>
                      <h3 className="font-display text-xl md:text-2xl mb-2 text-foreground">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 w-12 h-12 rounded-full bg-background border border-gold/50 flex items-center justify-center shadow-gold">
                      <span className="font-display text-sm text-gradient-gold">{m.step}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 relative border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Perguntas Frequentes</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Dúvidas <span className="text-gradient-gold">comuns</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="bg-card/50 border border-gold/15 rounded-md overflow-hidden hover:border-gold/40 transition-colors">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-display text-base md:text-lg text-foreground">{f.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-400 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 md:py-32 relative border-t border-gold/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contato</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Entre em <span className="text-gradient-gold">contato</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Para informações sobre a atuação do escritório e agendamento de reunião,
              o contato pode ser realizado pelos canais abaixo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-9 py-4 md:px-10 md:py-5 bg-gradient-gold text-primary-foreground text-xs md:text-sm font-semibold uppercase tracking-widest rounded-sm shadow-gold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-20 md:py-28 relative border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Localização</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Onde nos <span className="text-gradient-gold">encontrar</span>
            </h2>
            <div className="gold-divider w-32 mx-auto" />
          </Reveal>

          <Reveal>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="bg-card/60 border border-gold/20 rounded-md p-7 space-y-6">
                <div>
                  <MapPin className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rua Barão de Monte Cedro, 481<br />
                    Centro — Quissamã/RJ<br />
                    CEP 28735-071
                  </p>
                </div>
                <div className="gold-divider" />
                <div>
                  <Phone className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground">(a informar)</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/85 hover:text-primary inline-flex items-center gap-1 mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Fale pelo WhatsApp
                  </a>
                </div>
                <div className="gold-divider" />
                <div>
                  <Mail className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2">E-mail</h3>
                  <p className="text-sm text-muted-foreground">contato@juniosouza.adv.br</p>
                </div>
                <div className="gold-divider" />
                <div>
                  <Clock className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2">Horário de atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a sexta<br />
                    (horário a confirmar) — mediante agendamento
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 rounded-md overflow-hidden border border-gold/30 shadow-elegant min-h-[420px]">
                <iframe
                  title="Localização do escritório"
                  src="https://www.google.com/maps?q=Rua+Bar%C3%A3o+de+Monte+Cedro+481,+Centro,+Quissam%C3%A3+-+RJ,+28735-071&output=embed"
                  className="w-full h-full min-h-[420px] grayscale-[40%] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/20 pt-14 pb-10 mt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 grid gap-10 md:grid-cols-4 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Junio de Souza Ferreira" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Junio de Souza Ferreira<br />
              OAB/RJ nº 237.824<br />
              Advocacia trabalhista empresarial.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base mb-3 text-foreground">Endereço</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rua Barão de Monte Cedro, 481<br />
              Centro — Quissamã/RJ<br />
              CEP 28735-071
            </p>
          </div>
          <div>
            <h4 className="font-display text-base mb-3 text-foreground">Institucional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LGPD</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-6 border-t border-gold/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Junio de Souza Ferreira — Todos os Direitos Reservados.</div>
          <div className="text-center md:text-right max-w-xl">
            Conteúdo meramente informativo, em conformidade com o Provimento nº 205/2021 da OAB.
          </div>
        </div>
      </footer>
    </div>
  );
}
