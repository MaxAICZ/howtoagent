export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-[-20%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-accent/8 blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight">
            HowToAgent<span className="text-primary-light">.ai</span>
          </span>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/10 hover:border-white/20 cursor-pointer"
        >
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pt-20 pb-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary-light">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse" />
          Coming Soon
        </div>
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Build AI Agents
          <br />
          <span className="gradient-text">That Actually Work</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl">
          Stop watching tutorials that go nowhere. Learn the exact frameworks, architectures, and deployment strategies to build production-ready AI agents that generate real value.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="glow-amber inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all duration-200 hover:bg-accent-hover hover:scale-[1.02] cursor-pointer"
          >
            Join the Waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <span className="text-sm text-muted">Free early access. No spam.</span>
        </div>

        {/* Hero visual - code editor */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="gradient-border glow-purple rounded-2xl bg-card p-1">
            <div className="rounded-xl bg-[#0D1117] p-6 font-mono text-sm text-left leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs text-muted">agent.py</span>
              </div>
              <code className="block text-muted">
                <span className="text-primary-light">from</span>{" "}
                <span className="text-accent">howtoagent</span>{" "}
                <span className="text-primary-light">import</span> Agent, Tool, Memory{"\n\n"}
                <span className="text-muted/60"># Your agent, production-ready in minutes</span>{"\n"}
                <span className="text-foreground">agent</span> = Agent({"\n"}
                {"  "}name=<span className="text-green-400">&quot;research-bot&quot;</span>,{"\n"}
                {"  "}tools=[Tool.web_search, Tool.summarize],{"\n"}
                {"  "}memory=Memory.persistent(),{"\n"}
                {"  "}model=<span className="text-green-400">&quot;claude-4&quot;</span>{"\n"}
                ){"\n\n"}
                <span className="text-foreground">result</span> = agent.run(<span className="text-green-400">&quot;Analyze Q1 market trends&quot;</span>){"\n"}
                <span className="text-primary-light">print</span>(result.summary)
                <span className="ml-2 inline-block h-4 w-0.5 bg-accent animate-pulse" />
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to
            <span className="gradient-text"> ship real agents</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Not theory. Not demos. Production-grade agent systems that solve real problems and make real money.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="m7 8 3 3-3 3" />
                  <path d="M13 14h3" />
                </svg>
              ),
              title: "Agent Architecture",
              desc: "ReAct loops, tool use, memory systems, multi-agent orchestration. The core patterns behind every serious agent.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4" />
                  <path d="m6.8 15-3.5 2" />
                  <path d="m20.7 17-3.5-2" />
                  <path d="M6.8 9 3.3 7" />
                  <path d="m20.7 7-3.5 2" />
                  <path d="M12 22v-4" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              ),
              title: "Tool Integration",
              desc: "Web search, APIs, databases, file systems, code execution. Give your agents the ability to interact with the real world.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              ),
              title: "Memory & State",
              desc: "Short-term, long-term, episodic memory. Vector stores, conversation history, and persistent knowledge bases.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              ),
              title: "Deployment & Scale",
              desc: "Docker, serverless, edge deployment. Monitor, log, and scale your agents from prototype to production.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
              title: "Monetization",
              desc: "Build agents people pay for. SaaS models, API-as-a-service, usage-based pricing, and marketplace strategies.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98" />
                  <path d="M15.41 6.51l-6.82 3.98" />
                </svg>
              ),
              title: "Multi-Agent Systems",
              desc: "Orchestrate teams of specialized agents. Delegation, communication protocols, and autonomous workflows.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="gradient-border group rounded-2xl bg-card p-6 transition-all duration-300 hover:bg-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors duration-300 group-hover:bg-primary/20">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            From zero to <span className="gradient-text">deployed agent</span>
          </h2>
        </div>
        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Learn the fundamentals",
              desc: "Understand how LLMs, tool use, and agent loops actually work under the hood. No hand-waving.",
            },
            {
              step: "02",
              title: "Build your first agent",
              desc: "Follow along as we build a complete agent from scratch. Real code, real tools, real results.",
            },
            {
              step: "03",
              title: "Deploy to production",
              desc: "Ship your agent with monitoring, error handling, and the infrastructure to handle real users.",
            },
            {
              step: "04",
              title: "Scale and monetize",
              desc: "Turn your agent into a product. Pricing strategies, user acquisition, and growth playbooks.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-heading text-4xl font-bold text-primary/30 shrink-0 w-16">
                {item.step}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="gradient-border glow-purple rounded-2xl bg-card p-10 sm:p-14">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6">
            &ldquo;The AI agent space is the biggest opportunity since mobile apps. The builders who learn this now will define the next decade of software.&rdquo;
          </blockquote>
          <p className="text-muted text-sm">
            The opportunity is real. The question is whether you&apos;ll build, or watch others build.
          </p>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Be first in line
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Join the waitlist for early access. We&apos;ll notify you when we launch with exclusive pricing for early members.
        </p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="glow-amber rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-accent-hover hover:scale-[1.02] cursor-pointer whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
        <p className="mt-4 text-xs text-muted/60">
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-heading text-sm text-muted">
            HowToAgent<span className="text-primary-light">.ai</span>
          </span>
          <p className="text-xs text-muted/60">
            &copy; 2026 HowToAgent. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
