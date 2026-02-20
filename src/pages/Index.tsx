import heroBg from "@/assets/hero-bg.jpg";
import logoLatem from "@/assets/logo-latem-dark.png";
import {
  ShieldAlert,
  Mail,
  Clock,
  Link,
  UserX,
  Eye,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Building2,
  ChevronRight,
  Shield,
} from "lucide-react";

const phishingSignals = [
  {
    icon: UserX,
    title: "Remetente Falso",
    description:
      "O endereço de e-mail do remetente não corresponde ao domínio legítimo da empresa. Ex: suporte@empresa-segura.net ao invés de @empresa.com.br",
    risk: "ALTO",
    riskColor: "text-red-400",
    detail: "Verifique sempre o domínio completo do remetente.",
  },
  {
    icon: Clock,
    title: "Senso de Urgência",
    description:
      'Mensagens que criam pânico com frases como "Sua conta será bloqueada em 24h" ou "Ação imediata necessária" são táticas comuns de engenharia social.',
    risk: "ALTO",
    riskColor: "text-red-400",
    detail: "Empresas legítimas raramente exigem ação imediata via e-mail.",
  },
  {
    icon: Link,
    title: "Links Suspeitos",
    description:
      "URLs encurtadas ou com domínios parecidos (typosquatting) tentam enganar sua percepção. Ex: paypa1.com, microsoft-suporte.com",
    risk: "CRÍTICO",
    riskColor: "text-red-500",
    detail: "Passe o mouse sobre o link antes de clicar para ver o destino real.",
  },
  {
    icon: Mail,
    title: "Saudação Genérica",
    description:
      'Frases como "Prezado Cliente" ou "Usuário" indicam que o e-mail foi enviado em massa, sem personalização, típico de campanhas de phishing.',
    risk: "MÉDIO",
    riskColor: "text-amber-400",
    detail: "Comunicações legítimas geralmente usam seu nome completo.",
  },
  {
    icon: Eye,
    title: "Erros Gramaticais",
    description:
      "Textos com erros de ortografia, frases estranhas ou tradução automática mal feita são sinais claros de que algo está errado.",
    risk: "MÉDIO",
    riskColor: "text-amber-400",
    detail: "Empresas sérias revisam todas as comunicações antes de enviar.",
  },
  {
    icon: Lock,
    title: "Solicitação de Credenciais",
    description:
      "Nenhuma empresa legítima pedirá sua senha, token ou dados bancários por e-mail. Isso é sempre phishing.",
    risk: "CRÍTICO",
    riskColor: "text-red-500",
    detail: "Nunca insira suas credenciais em links recebidos por e-mail.",
  },
];

const protectionSteps = [
  {
    step: "01",
    title: "Verifique Antes de Clicar",
    description:
      "Sempre passe o mouse sobre links antes de clicar. Confira o domínio completo na barra de status do navegador. Em caso de dúvida, acesse o site digitando o endereço manualmente.",
    icon: Eye,
  },
  {
    step: "02",
    title: "Reporte ao Time de TI",
    description:
      "Ao identificar um e-mail suspeito, encaminhe-o imediatamente para a equipe de segurança. Não clique, não responda e não encaminhe para outros colaboradores.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Use Autenticação em 2 Fatores",
    description:
      "Ative o MFA (Multi-Factor Authentication) em todas as suas contas corporativas. Mesmo que suas credenciais sejam comprometidas, o 2FA dificulta o acesso não autorizado.",
    icon: Lock,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Fixed Logo */}
      <div className="fixed top-4 left-4 z-50">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center silver-shine border border-border bg-background/80 backdrop-blur-sm">
          <Building2 className="w-3 h-3 text-silver-bright" strokeWidth={1.5} />
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden scan-effect"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 alert-badge px-4 py-2 rounded-full text-sm font-mono font-medium mb-8 animate-fade-in pulse-ring">
            <AlertTriangle className="w-4 h-4" />
            SIMULAÇÃO DE SEGURANÇA — TESTE CONTROLADO
          </div>

          {/* Main Icon */}
          <div className="flex justify-center mb-8 animate-fade-in float-anim" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="w-28 h-28 rounded-full flex items-center justify-center glass-card neon-border">
                <ShieldAlert className="w-14 h-14 text-amber-alert" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-alert rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-alert rounded-full" />
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="section-title">Você Clicou em um</span>
            <br />
            <span className="text-amber-alert">Link de Phishing</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Não se preocupe — este foi um{" "}
            <span className="text-foreground font-medium">teste de conscientização</span> conduzido
            pelo nosso time de Segurança da Informação.{" "}
            <span className="text-foreground font-medium">Nenhum dado foi comprometido.</span>
          </p>

          <p
            className="text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Aproveite esta oportunidade para aprender a identificar e evitar ataques reais de phishing.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#sinais"
              className="silver-shine inline-flex items-center gap-2 px-8 py-3 rounded-lg text-foreground font-semibold border border-border hover:border-silver transition-all duration-300"
            >
              Ver Sinais de Alerta
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#protecao"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-neon text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_25px_hsl(210_100%_56%/0.5)]"
            >
              Como se Proteger
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Divider */}
      <div className="divider-neon mx-8 md:mx-24" />

      {/* Phishing Signals Section */}
      <section id="sinais" className="py-24 px-6 container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-neon-blue font-mono text-sm tracking-widest uppercase mb-3">
            ⚠ Reconheça os Sinais
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold section-title mb-4">
            Como Identificar um E-mail de Phishing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ataques de phishing são cada vez mais sofisticados. Aprenda a reconhecer os padrões mais comuns
            utilizados por cibercriminosos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phishingSignals.map((signal, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 group cursor-default"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Icon + Risk */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted group-hover:bg-neon-blue/10 transition-colors duration-300 border border-border group-hover:border-neon-blue/30">
                  <signal.icon className="w-6 h-6 text-neon-blue" strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-mono font-bold ${signal.riskColor} bg-muted px-2 py-1 rounded`}>
                  {signal.risk}
                </span>
              </div>

              <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-neon-blue transition-colors duration-300">
                {signal.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{signal.description}</p>

              {/* Tip */}
              <div className="border-t border-border pt-3">
                <p className="text-xs text-silver flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-success-green" />
                  {signal.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider-neon mx-8 md:mx-24" />

      {/* Protection Steps Section */}
      <section id="protecao" className="py-24 px-6 container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-neon-blue font-mono text-sm tracking-widest uppercase mb-3">
            🛡 Proteção em 3 Passos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold section-title mb-4">
            Como se Proteger de Ataques Reais
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Siga estas práticas para manter sua segurança digital e proteger os dados da empresa.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {protectionSteps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-xl p-8 group flex flex-col md:flex-row items-start gap-6">
              {/* Step number */}
              <div className="shrink-0">
                <span className="step-number font-mono">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border border-border bg-muted group-hover:border-neon-blue/40 group-hover:bg-neon-blue/10 transition-all duration-300">
                <step.icon className="w-7 h-7 text-neon-blue" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider-neon mx-8 md:mx-24" />

      {/* Footer */}
      <footer className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo / Company */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center silver-shine border border-border">
                <Building2 className="w-7 h-7 text-silver-bright" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">
                  Powered by
                </p>
                <p className="font-extrabold text-xl section-title">LATEM</p>
              </div>
            </div>

            {/* Center message */}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-center mx-auto">
                Este teste é parte do programa de{" "}
                <span className="text-foreground font-medium">Treinamento em Segurança</span> da nossa empresa.
                Sua participação é essencial.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-xs font-mono tracking-wider uppercase mb-3">
                Suporte de TI
              </p>
              <a
                href="mailto:ti@latem.com.br"
                className="flex items-center gap-2 text-neon-blue hover:text-neon-glow transition-colors duration-200 font-medium text-sm mb-2"
              >
                <Mail className="w-4 h-4" />
               ti@latem.com.br
              </a>
              <a
                href="tel:+5515997829881"
                className="flex items-center gap-2 text-silver hover:text-silver-bright transition-colors duration-200 text-sm"
              >
                <Phone className="w-4 h-4" />
                (15) 99782-9881
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-xs font-mono">
              © {new Date().getFullYear()} — Simulação de Phishing Autorizada · Todos os direitos reservados ·{" "}
              <span className="text-neon-blue">Confidencial</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
