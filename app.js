/**
 * YATAGARASU DIGITAL STUDIO — Interações e Animações
 * Estilo Editorial Inspirado em Estúdio Kimura & Futurismo Digital
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. AMBIENT CURSOR SPOTLIGHT TRACKING
  const ambientGlow = document.querySelector('.ambient-glow');
  if (ambientGlow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight * 0.3;
    let currentX = mouseX;
    let currentY = mouseY;
    let ticking = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!ticking) {
        requestAnimationFrame(() => {
          currentX += (mouseX - currentX) * 0.15;
          currentY += (mouseY - currentY) * 0.15;
          document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 3. MENU MOBILE & NAVEGAÇÃO
  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
        menuBtn.focus();
      }
    });
  }

  // ==========================================================================
  // 4. METODOLOGIA INTERATIVA — 5 ETAPAS AUTORAIS YATAGARASU
  // ==========================================================================
  const methodSteps = [
    {
      name: 'IMERSÃO',
      tag: 'FASE 01 / DIAGNÓSTICO & OBJETIVOS',
      quote: 'Um mergulho no universo do seu negócio, pois sabemos que design sem estratégia é só um desenho.',
      desc: 'Conduzimos um diagnóstico analítico para compreender o modelo de negócio da sua empresa, seu público e o que a marca precisa comunicar. Mapeamos os pontos exatos de fricção que fazem visitantes abandonarem o site atual sem entrar em contato.',
      delivs: ['✓ Diagnóstico de Fricção', '✓ Mapeamento de Concorrência', '✓ Definição de Metas Comerciais'],
      result: 'Alinhamento total entre proposta de valor, público-alvo e metas de conversão antes de desenhar a primeira linha.',
      svg: `<svg viewBox="0 0 160 160" width="120" height="120" fill="none">
        <circle cx="80" cy="80" r="60" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 6"/>
        <ellipse cx="80" cy="80" rx="45" ry="25" stroke="#ec4899" stroke-width="2.5" transform="rotate(-25 80 80)"/>
        <circle cx="80" cy="80" r="10" fill="#ffffff" filter="drop-shadow(0 0 10px #38bdf8)"/>
      </svg>`
    },
    {
      name: 'ESTRATÉGIA',
      tag: 'FASE 02 / ARQUITETURA & COPYWRITING',
      quote: 'Palavras certas nos lugares certos vendem mais do que qualquer adorno visual superficial.',
      desc: 'Estruturamos a jornada cognitiva do usuário: copywriting persuasivo, hierarquia de leitura e posicionamento claro. Cada seção responde a uma dúvida real do cliente e conduz naturalmente para o WhatsApp sem distrações.',
      delivs: ['✓ Copywriting Persuasivo', '✓ Arquitetura de Informação', '✓ Jornada sem Fricção'],
      result: 'Estrutura de conversão validada, garantindo que o visitante encontre respostas claras para todas as suas objeções.',
      svg: `<svg viewBox="0 0 160 160" width="120" height="120" fill="none">
        <line x1="20" y1="80" x2="140" y2="80" stroke="#38bdf8" stroke-width="3"/>
        <line x1="80" y1="20" x2="80" y2="140" stroke="#ec4899" stroke-width="3"/>
        <rect x="65" y="65" width="30" height="30" rx="6" fill="#111624" stroke="#ffffff" stroke-width="2"/>
      </svg>`
    },
    {
      name: 'DIREÇÃO DE ARTE',
      tag: 'FASE 03 / IDENTIDADE DIGITAL DE LUXO',
      quote: 'Construímos uma presença visual única. Nada de templates batidos que dezenas de concorrentes usam.',
      desc: 'Desenvolvemos uma direção visual exclusiva para a sua marca com tipografia de forte contraste, iluminação refinada e microinterações cinematográficas. Seu negócio passa a transmitir solidez e elegância incomparáveis.',
      delivs: ['✓ Design System Exclusivo', '✓ Microinterações Refinadas', '✓ Identidade Digital Autoral'],
      result: 'Diferenciação imediata no primeiro segundo de navegação, elevando a percepção de valor dos seus serviços.',
      svg: `<svg viewBox="0 0 160 160" width="120" height="120" fill="none">
        <polygon points="80,20 140,130 20,130" stroke="#ec4899" stroke-width="2.5"/>
        <circle cx="80" cy="90" r="30" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="80" cy="90" r="6" fill="#ffffff"/>
      </svg>`
    },
    {
      name: 'ENGENHARIA',
      tag: 'FASE 04 / CÓDIGO ARTESANAL LIMPO',
      quote: 'Código sem arquitetura é dívida técnica. Criamos software limpo, rápido e sem dependências frágeis.',
      desc: 'Desenvolvimento artesanal sem temas pesados do WordPress ou plugins que quebram o site em atualizações. Garantimos carregamento abaixo de 1 segundo (Core Web Vitals perfeitos) e responsividade impecável.',
      delivs: ['✓ Código Limpo & Modular', '✓ Core Web Vitals < 1s', '✓ 100% Mobile First'],
      result: 'Navegação fluida que nunca trava ou frustra o usuário, maximizando a retenção e a velocidade das páginas.',
      svg: `<svg viewBox="0 0 160 160" width="120" height="120" fill="none">
        <path d="M40 50L15 80L40 110" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <path d="M120 50L145 80L120 110" stroke="#ec4899" stroke-width="3" stroke-linecap="round"/>
        <line x1="95" y1="40" x2="65" y2="120" stroke="#ffffff" stroke-width="2.5"/>
      </svg>`
    },
    {
      name: 'LANÇAMENTO',
      tag: 'FASE 05 / DEPLOY GLOBAL, SEO & CONVERSÃO',
      quote: 'Um site não é um quadro na parede; é um ativo estratégico ativo de geração de clientes e autoridade.',
      desc: 'Deploy em infraestrutura global ultrarrápida, otimização de SEO para o Google, integração direta com WhatsApp e painéis de qualificação. O site é publicado pronto para converter.',
      delivs: ['✓ Deploy Global com SSL', '✓ SEO Técnico & IA Indexável', '✓ Integração Direta WhatsApp'],
      result: 'Uma presença digital robusta, segura e trabalhando 24 horas por dia para a reputação e faturamento da sua marca.',
      svg: `<svg viewBox="0 0 160 160" width="120" height="120" fill="none">
        <circle cx="80" cy="80" r="55" stroke="#38bdf8" stroke-width="2"/>
        <path d="M50 80L72 102L115 58" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    }
  ];

  const methodPills = document.querySelectorAll('.method-pill');
  const methodQuote = document.getElementById('method-quote');
  const methodDesc = document.getElementById('method-desc');
  const methodDelivs = document.getElementById('method-delivs');
  const methodResult = document.getElementById('method-result');
  const methodGlyph = document.getElementById('method-glyph');
  const methodTag = document.getElementById('method-tag');

  function updateMethodStage(stepIndex) {
    const data = methodSteps[stepIndex];
    if (!data) return;

    methodPills.forEach((p, idx) => {
      const isActive = idx === stepIndex;
      p.classList.toggle('active', isActive);
      p.setAttribute('aria-selected', String(isActive));
    });

    if (methodQuote) methodQuote.textContent = data.quote;
    if (methodDesc) methodDesc.textContent = data.desc;
    if (methodResult) methodResult.textContent = data.result;
    if (methodTag) methodTag.textContent = data.tag;
    if (methodGlyph) methodGlyph.innerHTML = data.svg;

    if (methodDelivs) {
      methodDelivs.innerHTML = data.delivs.map(d => `<span class="deliv-badge">${d}</span>`).join('');
    }
  }

  methodPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const step = parseInt(pill.dataset.step, 10);
      updateMethodStage(step);
    });
  });

  // 5. SERVIÇOS — ACORDEÃO MONUMENTAL ESTILO KIMURA
  const serviceRows = document.querySelectorAll('.service-row');
  serviceRows.forEach(row => {
    const trigger = row.querySelector('.service-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = row.classList.contains('active');
        
        // Fecha os demais para efeito exclusivo e elegante
        serviceRows.forEach(other => {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.service-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          row.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // 6. HERO SLIDER DE SOLUÇÕES (DISCOVER BOX)
  const solutionSlides = [
    {
      title: 'Sites com identidade',
      description: 'Sua essência em cada detalhe. Uma presença digital que representa a sua marca.',
      art: 'WEB\nEXPERIENCE.',
      service: 'Site institucional'
    },
    {
      title: 'Landing pages de conversão',
      description: 'Uma oferta, uma mensagem magnética e um caminho direto para fechar negócios.',
      art: 'MAKE IT\nHAPPEN.',
      service: 'Landing page'
    },
    {
      title: 'Lojas virtuais sem fricção',
      description: 'Da descoberta ao checkout. Uma experiência de compra fluida e memorável.',
      art: 'SHOP\nTHE NEXT.',
      service: 'Loja virtual'
    }
  ];

  let currentSlide = 0;
  const slideNumEl = document.getElementById('slide-num');
  const slideTitleEl = document.getElementById('slide-title');
  const slideDescEl = document.getElementById('slide-description');
  const slideArtEl = document.getElementById('slide-art');
  const slideLinkEl = document.getElementById('slide-link');
  const slideDots = document.querySelectorAll('.slide-dots i');
  const prevSlideBtn = document.getElementById('prev-slide');
  const nextSlideBtn = document.getElementById('next-slide');

  function updateSolutionSlide(direction) {
    currentSlide = (currentSlide + direction + solutionSlides.length) % solutionSlides.length;
    const slide = solutionSlides[currentSlide];

    if (slideNumEl) slideNumEl.textContent = String(currentSlide + 1).padStart(2, '0');
    if (slideTitleEl) slideTitleEl.textContent = slide.title;
    if (slideDescEl) slideDescEl.textContent = slide.description;
    if (slideArtEl) slideArtEl.textContent = slide.art;
    if (slideLinkEl) slideLinkEl.dataset.service = slide.service;

    slideDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  if (prevSlideBtn && nextSlideBtn) {
    prevSlideBtn.addEventListener('click', () => updateSolutionSlide(-1));
    nextSlideBtn.addEventListener('click', () => updateSolutionSlide(1));
  }

  // Preenche serviço no formulário ao clicar em atalhos
  document.querySelectorAll('[data-service]').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceSelect = document.getElementById('service');
      if (serviceSelect && btn.dataset.service) {
        serviceSelect.value = btn.dataset.service;
      }
    });
  });

  // 7. SHOWCASE INTERATIVO (ABAS DE EXPERIÊNCIA)
  const demoTabs = [...document.querySelectorAll('[data-demo]')];
  const demoPanel = document.getElementById('experience-panel');
  const demoScreen = document.querySelector('.demo-screen');

  function activateDemo(tab, shouldFocus = false) {
    if (!tab) return;
    const demoKey = tab.dataset.demo;

    demoTabs.forEach(t => {
      const active = t === tab;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      
      const targetScreen = document.querySelector(`.demo-${t.dataset.demo}`);
      if (targetScreen) targetScreen.hidden = !active;
    });

    if (demoPanel) demoPanel.setAttribute('aria-labelledby', tab.id);
    if (demoScreen) demoScreen.dataset.current = demoKey;
    if (shouldFocus) tab.focus();
  }

  demoTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateDemo(tab));
    tab.addEventListener('keydown', (event) => {
      let target;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % demoTabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + demoTabs.length) % demoTabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = demoTabs.length - 1;
      
      if (target !== undefined) {
        event.preventDefault();
        activateDemo(demoTabs[target], true);
      }
    });
  });

  // 8. FORMULÁRIO DE BRIEFING & INTEGRAÇÃO WHATSAPP
  const briefForm = document.getElementById('brief');
  const resultBox = document.getElementById('result');
  const copyBtn = document.getElementById('copy');
  const downloadBtn = document.getElementById('download');
  let generatedBriefing = '';

  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim() || 'Cliente';
      const stage = document.getElementById('stage')?.value || 'Não informado';
      const service = document.getElementById('service')?.value || 'Site sob medida';
      const budget = document.getElementById('budget')?.value || 'A definir';
      const idea = document.getElementById('idea')?.value.trim() || 'Sem detalhes informados';

      generatedBriefing = `*BRIEFING ESTRATÉGICO — YATAGARASU DIGITAL STUDIO*\n\n` +
        `*Cliente / Empresa:* ${name}\n` +
        `*Momento do Negócio:* ${stage}\n` +
        `*Solução Desejada:* ${service}\n` +
        `*Investimento Planejado:* ${budget}\n\n` +
        `*Desafios e Objetivos:*\n${idea}\n\n` +
        `_Enviado via yatagarasu.com.br_`;

      const whatsappBtn = document.getElementById('whatsapp-send');
      if (whatsappBtn) {
        const encodedText = encodeURIComponent(generatedBriefing);
        whatsappBtn.href = `https://api.whatsapp.com/send?text=${encodedText}`;
      }

      if (resultBox) {
        resultBox.hidden = false;
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (!generatedBriefing) return;
      try {
        await navigator.clipboard.writeText(generatedBriefing);
        copyBtn.textContent = 'Copiado com sucesso ✓';
        setTimeout(() => { copyBtn.textContent = 'Copiar briefing'; }, 3000);
      } catch {
        copyBtn.textContent = 'Use Baixar .txt para salvar';
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (!generatedBriefing) return;
      const blob = new Blob([generatedBriefing], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'briefing-yatagarasu.txt';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }
});