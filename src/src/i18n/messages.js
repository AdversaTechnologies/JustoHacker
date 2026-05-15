/**
 * Site copy: Spanish (default) and English.
 * UI strings only; code comments stay English elsewhere.
 */

const es = {
  meta: {
    title: 'Justo Hacker — Ethical hacking con IA 24/7',
  },
  nav: {
    demo: 'Demo',
    contact: 'Contacto',
    requestDemo: 'Solicitar demo',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    langEs: 'ES',
    langEn: 'EN',
  },
  navLinks: [
    { href: '#inicio', label: 'Inicio' },
    { href: '#ia-247', label: 'IA 24/7' },
    { href: '#continuo', label: 'Continuo' },
    { href: '#humano-ia', label: 'IA + Humanos' },
    { href: '#noctisgrid', label: 'NOCTISGRID' },
    { href: '#metodologia', label: 'Método' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#demo', label: 'Demo' },
    { href: '#confianza', label: 'Confianza' },
    { href: '#contacto', label: 'Contacto' },
  ],
  lead: {
    title: 'Solicitar demostración / contacto',
    name: 'Nombre completo',
    company: 'Empresa',
    email: 'Email corporativo',
    cancel: 'Cancelar',
    send: 'Enviar',
    sending: 'Enviando...',
    success: 'Enviado correctamente',
    error: 'No se pudo enviar. Intenta nuevamente.',
  },
  hero: {
    badge: 'Ethical hacking · Alcance autorizado · IA supervisada',
    titleBefore: 'La plataforma de',
    titleAccent1: 'ethical hacking',
    titleMid: 'con',
    titleAccent2: 'IA que nunca duerme',
    subtitle:
      'Transformamos el pentesting de un evento puntual en un sistema de protección continuo: correlación, validación y reporting con supervisión humana experta.',
    ctaServices: 'Servicios',
    ctaDemo: 'Solicitar demo',
    imgAlt: 'Justo Hacker — ethical hacking con IA 24/7',
    stats: ['Operación continua', 'Falsos positivos objetivo', 'Precisión en reportes', 'Hallazgos de alto impacto'],
  },
  ai247: {
    kicker: 'IA que nunca duerme',
    title: 'Tu perímetro no descansa.',
    titleAccent: 'Tu defensa tampoco.',
    intro:
      'Justo Hacker combina automatización inteligente con guardarraíles definidos por personas: la IA amplifica cobertura; los expertos definen alcance, umbrales y qué se escala a decisión humana.',
    cards: [
      {
        title: 'Ciclos sin fricción',
        text: 'La IA ejecuta correlación, enriquecimiento y detección de patrones entre ventanas que un equipo humano no podría cubrir solo.',
      },
      {
        title: 'Ritmo de atacante moderno',
        text: 'Los adversarios automatizan. Nuestro motor mantiene ritmo de análisis y priorización para que tu backlog refleje riesgo real.',
      },
      {
        title: 'Señal continua',
        text: 'Menos picos de “informe del pentest”: más telemetría de seguridad alineada a releases, cambios de infra y nuevas superficies.',
      },
      {
        title: 'Aprendizaje supervisado',
        text: 'Los modelos se alimentan de contexto autorizado y feedback humano: calidad sobre volumen, con trazabilidad.',
      },
    ],
  },
  continuous: {
    title: 'De tarea puntual a',
    titleAccent: 'sistema de protección 24/7',
    intro:
      'El pentesting tradicional cierra un ticket; Justo Hacker propone un ciclo: observar, probar, remediar y demostrar reducción de riesgo en el tiempo.',
    beforeLabel: 'Antes',
    afterLabel: 'Ahora',
    rows: [
      { before: 'Pentest puntual, informe estático', after: 'Programa vivo con señales y re-validación' },
      { before: 'Listas largas de CVEs', after: 'Rutas de ataque y prioridad por impacto demostrable' },
      { before: 'Equipo saturado de falsos positivos', after: 'Triaje asistido + supervisión experta' },
      { before: 'Seguridad medida en “eventos”', after: 'Resiliencia medida en continuidad 24/7' },
    ],
    steps: [
      {
        title: 'Alcance y límites',
        desc: 'Definimos objetivos, ventanas y reglas de engagement — siempre en marco legal y contractual.',
      },
      {
        title: 'Descubrimiento continuo',
        desc: 'Superficie, identidades y cambios: la IA mapea y prioriza; los analistas validan contexto de negocio.',
      },
      {
        title: 'Validación adversarial',
        desc: 'Pruebas controladas que demuestran explotabilidad donde aplica — menos ruido, más acción.',
      },
      {
        title: 'Re-test y mejora',
        desc: 'Cada fix se confirma; el sistema aprende de regresiones y refuerza el modelo de riesgo de tu organización.',
      },
    ],
  },
  humanAi: {
    title: 'IA + humanos',
    titleMid: '— el mejor de los dos mundos',
    intro:
      'Los humanos supervisan; la IA ejecuta a escala. Así escalamos cobertura sin perder juicio ni responsabilidad.',
    humanLabel: 'Humanos',
    humanTitle: 'Supervisan',
    aiLabel: 'IA',
    aiTitle: 'Trabaja 24/7',
    humanItems: [
      'Definición de alcance, contratos y límites legales',
      'Aprobación de acciones sensibles y excepciones',
      'Interpretación de negocio y comunicación a dirección',
      'Validación final de hallazgos y severidad contextual',
    ],
    aiItems: [
      'Correlación masiva de señales y deduplicación',
      'Enriquecimiento OSINT y detección de anomalías',
      'Ejecución repetible de pruebas y regresiones',
      'Generación estructurada de evidencia y tickets',
    ],
    footnote: 'Guardarraíles técnicos y de datos: sin acciones fuera del alcance acordado.',
  },
  noctisgrid: {
    kicker: 'JH · MOTOR DE INTELIGENCIA',
    lead:
      'Correlación continua OSINT y vigilancia de exposición — incluyendo fuentes de alto riesgo (p. ej. dark web) cuando el programa lo permite — para alimentar el aprendizaje y la priorización de Justo Hacker.',
    legalBold: 'Aviso legal:',
    legalRest:
      'el uso de fuentes OSINT y de dark web solo se realiza en programas autorizados por escrito, con marco contractual y normativo aplicable. No realizamos ni promovemos acceso a sistemas o datos sin consentimiento del titular.',
    cards: [
      {
        title: 'Malla 24/7',
        text: 'Ingesta programada de señales públicas y feeds acordados; deduplicación y scoring continuo.',
      },
      {
        title: 'Contexto OSINT',
        text: 'Enriquecimiento de activos, personas clave e infra relacionada para decisiones más rápidas.',
      },
      {
        title: 'Custodia',
        text: 'Minimización de datos, segregación y trazas de acceso alineadas a buenas prácticas de seguridad.',
      },
      {
        title: 'Aprendizaje JH',
        text: 'Los hallazgos validados retroalimentan playbooks y modelos bajo supervisión humana.',
      },
    ],
  },
  methodology: {
    title: 'Método: evidencia, no opiniones',
    intro:
      'Un ciclo corto y auditable que conecta descubrimiento con verificación — inspirado en las mejores prácticas de validación adversarial, adaptado a equipos que necesitan claridad.',
    phases: [
      {
        key: 'discover',
        title: 'Descubrir',
        text: 'Mapeo de superficie, inventario dinámico y señales OSINT acordadas (incl. NOCTISGRID cuando aplique).',
      },
      {
        key: 'validate',
        title: 'Validar',
        text: 'Pruebas controladas que buscan demostrar impacto real, no solo presencia de CVE.',
      },
      {
        key: 'report',
        title: 'Informar',
        text: 'Evidencia reproducible, pasos de remediación y prioridad alineada a tu operación.',
      },
      {
        key: 'retest',
        title: 'Re-test',
        text: 'Cierre de bucle: confirmamos que el riesgo bajó y documentamos para auditoría interna.',
      },
    ],
  },
  services: {
    title: 'Servicios para',
    titleAccent: 'equipos exigentes',
    intro:
      'Cubrimos el ciclo completo: desde entender qué expones hasta demostrar que tus controles y parches funcionan.',
    footnote:
      'Justo Hacker incorpora nuevos vectores desde fuentes abiertas y curadas, además de aportes del equipo I+D — siempre bajo políticas de calidad y revisión humana.',
    items: [
      {
        title: 'Superficie de ataque y ASM',
        subtitle: 'Visibilidad continua',
        description:
          'Mapeo de activos externos, sombra y cambios: priorización por riesgo probable y contexto de exposición.',
      },
      {
        title: 'Hallazgos de alto impacto',
        subtitle: 'Menos ruido, más acción',
        description:
          'Enfoque en vulnerabilidades con impacto demostrable en tu modelo de amenazas — no en listas interminables.',
      },
      {
        title: 'IA supervisada',
        subtitle: 'Escala con control',
        description:
          'Correlación, enriquecimiento y detección de patrones con umbrales definidos por expertos y trazabilidad.',
      },
      {
        title: 'Pentesting y validación',
        subtitle: 'Pruebas éticas',
        description:
          'Ejecución metódica en alcance acordado: web, API, nube e identidades según tus prioridades de negocio.',
      },
      {
        title: 'Reporting ejecutivo',
        subtitle: 'Listo para remediar',
        description:
          'Informes claros con evidencia, severidad contextual y recomendaciones alineadas a tus equipos de desarrollo.',
      },
      {
        title: 'Re-validación',
        subtitle: 'Cierra el ciclo',
        description:
          'Tras el fix, confirmamos que el vector desapareció o quedó mitigado — métricas de reducción de riesgo en el tiempo.',
      },
    ],
  },
  platform: {
    title: 'Plataforma en',
    titleAccent: 'acción',
    intro:
      'Vista simplificada del flujo de análisis: de reconocimiento a evidencia — la misma disciplina que aplicamos en entornos reales, con alcance y salvaguardas acordadas.',
  },
  trust: {
    title: 'Justo Hacker +',
    titleAccent: 'operación humana',
    intro:
      'Cuando la severidad lo requiere, expertos revisan correlación, contexto y siguientes pasos. La IA acelera; las personas deciden en la frontera del riesgo.',
    blockTitle: 'Operación supervisada',
    bullets: [
      'Analistas revisan alertas de alta severidad y cadena de impacto.',
      'Correlación con incidentes y ventanas de cambio (releases, infra).',
      'Comunicación clara a desarrollo y negocio con lenguaje accionable.',
      'Escalación y playbooks alineados a tu política de respuesta.',
    ],
    socTitle: 'SOC aliado',
    socSub: 'Disponibilidad y continuidad según plan contratado',
    cov: 'Cobertura',
    state: 'Estado',
    active: 'Activo',
  },
  cta: {
    title: 'Protege lo que importa',
    titleAccent: 'sin pausa',
    intro:
      'Agenda una demo: te mostramos cómo encajan pentesting continuo, NOCTISGRID y supervisión humana en tu operación actual.',
    demo: 'Solicitar demostración',
    email: 'Escribir por correo',
  },
  footer: {
    blurb:
      'Ethical hacking con IA supervisada, validación adversarial y motor NOCTISGRID para inteligencia OSINT acotada legalmente.',
    services: 'Servicios',
    explore: 'Explorar',
    legal: 'Legal',
    serviceItems: ['Pentesting ético', 'Superficie de ataque', 'IA + supervisión humana', 'NOCTISGRID OSINT'],
    exploreItems: [
      { href: '#metodologia', label: 'Método' },
      { href: '#noctisgrid', label: 'NOCTISGRID' },
      { href: '#demo', label: 'Demo visual' },
      { href: '#contacto', label: 'Contacto' },
    ],
    legalItems: [
      'Solo actividades autorizadas',
      'Confidencialidad y mínima exposición de datos',
      'Marco contractual previo a pruebas intrusivas',
    ],
    rights: 'Todos los derechos reservados.',
  },
  demo: {
    status: 'JUSTO HACKER IA — ACTIVO',
    prompt: 'root@justohacker:~$',
    findings: 'Hallazgos priorizados',
    statsTitle: 'Estadísticas (demo)',
    ports: 'Puertos analizados',
    services: 'Servicios detectados',
    panel: 'Hallazgos en panel',
    accuracy: 'Precisión objetivo',
    terminalRows: [
      { tone: 'accent', text: 'Iniciando Nmap 7.94 ( https://nmap.org )' },
      { tone: 'white', text: 'Informe de escaneo Nmap para target.example.com' },
      { tone: 'emerald', text: 'El host está activo (latencia 0,0012 s).' },
      { tone: 'teal', text: 'PUERTO   ESTADO  SERVICIO VERSIÓN' },
      { tone: 'white', text: '22/tcp   abierto  ssh     OpenSSH 7.4' },
      { tone: 'white', text: '80/tcp   abierto  http    Apache httpd 2.4.29' },
      { tone: 'white', text: '443/tcp  abierto  https   Apache httpd 2.4.29' },
    ],
    steps: [
      { title: 'Reconocimiento', description: 'Escaneando puertos y servicios...' },
      { title: 'Enumeración', description: 'Identificando versiones y tecnologías...' },
      { title: 'Análisis', description: 'Buscando vulnerabilidades conocidas...' },
      { title: 'Explotación', description: 'Probando vectores de ataque (alcance acordado)...' },
      { title: 'Reporte', description: 'Generando informe de seguridad...' },
    ],
    vulns: [
      'SQL Injection detectada en /login.php',
      "XSS reflejado en parámetro 'search'",
      'Directorio sin autenticación: /admin',
      'Versión vulnerable de Apache 2.4.29',
      'Puerto SSH con autenticación débil',
      'Certificado SSL expirado',
      'Información sensible en robots.txt',
      'CSRF en formulario de contacto',
    ],
    scanning: [
      'Escaneando 192.168.1.1...',
      'Puerto 80/tcp abierto',
      'Puerto 443/tcp abierto',
      'Puerto 22/tcp abierto',
      'Detectando servicios...',
      'Apache/2.4.29 identificado',
      'MySQL 5.7.33 detectado',
      'Analizando vulnerabilidades...',
      'CVE-2021-44228 encontrado',
      'Generando reporte...',
    ],
  },
}

const en = {
  meta: {
    title: 'Justo Hacker — Ethical AI-powered security 24/7',
  },
  nav: {
    demo: 'Demo',
    contact: 'Contact',
    requestDemo: 'Request demo',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langEs: 'ES',
    langEn: 'EN',
  },
  navLinks: [
    { href: '#inicio', label: 'Home' },
    { href: '#ia-247', label: 'AI 24/7' },
    { href: '#continuo', label: 'Continuous' },
    { href: '#humano-ia', label: 'AI + Humans' },
    { href: '#noctisgrid', label: 'NOCTISGRID' },
    { href: '#metodologia', label: 'Method' },
    { href: '#servicios', label: 'Services' },
    { href: '#demo', label: 'Demo' },
    { href: '#confianza', label: 'Trust' },
    { href: '#contacto', label: 'Contact' },
  ],
  lead: {
    title: 'Request a demo / contact',
    name: 'Full name',
    company: 'Company',
    email: 'Work email',
    cancel: 'Cancel',
    send: 'Send',
    sending: 'Sending...',
    success: 'Sent successfully',
    error: 'Could not send. Please try again.',
  },
  hero: {
    badge: 'Ethical hacking · Authorized scope · Supervised AI',
    titleBefore: 'The',
    titleAccent1: 'ethical hacking',
    titleMid: 'platform with',
    titleAccent2: 'AI that never sleeps',
    subtitle:
      'We turn pentesting from a one-off event into continuous protection: correlation, validation, and reporting with expert human oversight.',
    ctaServices: 'Services',
    ctaDemo: 'Request demo',
    imgAlt: 'Justo Hacker — ethical hacking with 24/7 AI',
    stats: ['Always-on operations', 'False-positive target', 'Reporting accuracy', 'High-impact findings'],
  },
  ai247: {
    kicker: 'AI that never sleeps',
    title: 'Your perimeter never rests.',
    titleAccent: 'Neither should your defense.',
    intro:
      'Justo Hacker blends intelligent automation with human-defined guardrails: AI expands coverage; experts define scope, thresholds, and what escalates to human decision.',
    cards: [
      {
        title: 'Frictionless cycles',
        text: 'AI runs correlation, enrichment, and pattern detection across windows a human-only team could not cover alone.',
      },
      {
        title: 'Modern attacker tempo',
        text: 'Adversaries automate. Our engine keeps analysis and prioritization in sync so your backlog reflects real risk.',
      },
      {
        title: 'Continuous signal',
        text: 'Fewer “pentest report” spikes: more security telemetry aligned to releases, infra changes, and new surfaces.',
      },
      {
        title: 'Supervised learning',
        text: 'Models learn from authorized context and human feedback: quality over volume, with traceability.',
      },
    ],
  },
  continuous: {
    title: 'From a one-off task to a',
    titleAccent: '24/7 protection system',
    intro:
      'Traditional pentesting closes a ticket; Justo Hacker proposes a loop: observe, test, remediate, and prove risk reduction over time.',
    beforeLabel: 'Before',
    afterLabel: 'Now',
    rows: [
      { before: 'Point-in-time pentest, static report', after: 'Live program with signals and re-validation' },
      { before: 'Long CVE lists', after: 'Attack paths and priority by demonstrable impact' },
      { before: 'Team drowning in false positives', after: 'Assisted triage + expert supervision' },
      { before: 'Security measured in “events”', after: 'Resilience measured in 24/7 continuity' },
    ],
    steps: [
      {
        title: 'Scope and boundaries',
        desc: 'We define objectives, windows, and engagement rules—always within legal and contractual frameworks.',
      },
      {
        title: 'Continuous discovery',
        desc: 'Surface, identities, and changes: AI maps and prioritizes; analysts validate business context.',
      },
      {
        title: 'Adversarial validation',
        desc: 'Controlled tests that demonstrate exploitability where applicable—less noise, more action.',
      },
      {
        title: 'Re-test and improve',
        desc: 'Every fix is confirmed; the system learns from regressions and strengthens your risk model.',
      },
    ],
  },
  humanAi: {
    title: 'AI + humans',
    titleMid: '— the best of both worlds',
    intro:
      'Humans supervise; AI executes at scale. That is how we expand coverage without losing judgment or accountability.',
    humanLabel: 'Humans',
    humanTitle: 'Supervise',
    aiLabel: 'AI',
    aiTitle: 'Works 24/7',
    humanItems: [
      'Scope, contracts, and legal boundaries',
      'Approval of sensitive actions and exceptions',
      'Business interpretation and executive communication',
      'Final validation of findings and contextual severity',
    ],
    aiItems: [
      'Large-scale signal correlation and deduplication',
      'OSINT enrichment and anomaly detection',
      'Repeatable test and regression execution',
      'Structured evidence and ticket generation',
    ],
    footnote: 'Technical and data guardrails: no actions outside the agreed scope.',
  },
  noctisgrid: {
    kicker: 'JH · INTELLIGENCE ENGINE',
    lead:
      'Continuous OSINT correlation and exposure monitoring—including higher-risk sources (e.g., dark web) when the program allows—to power Justo Hacker learning and prioritization.',
    legalBold: 'Legal notice:',
    legalRest:
      'OSINT and dark web sources are used only in programs with written authorization, under applicable contractual and regulatory frameworks. We do not perform or promote access to systems or data without the owner’s consent.',
    cards: [
      {
        title: '24/7 mesh',
        text: 'Scheduled ingestion of public signals and agreed feeds; continuous deduplication and scoring.',
      },
      {
        title: 'OSINT context',
        text: 'Enrichment of assets, key people, and related infrastructure for faster decisions.',
      },
      {
        title: 'Custody',
        text: 'Data minimization, segregation, and access trails aligned to security best practices.',
      },
      {
        title: 'JH learning',
        text: 'Validated findings feed playbooks and models under human supervision.',
      },
    ],
  },
  methodology: {
    title: 'Method: evidence, not opinions',
    intro:
      'A short, auditable loop that connects discovery with verification—inspired by adversarial validation best practices, tailored for teams that need clarity.',
    phases: [
      {
        key: 'discover',
        title: 'Discover',
        text: 'Surface mapping, dynamic inventory, and agreed OSINT signals (including NOCTISGRID when applicable).',
      },
      {
        key: 'validate',
        title: 'Validate',
        text: 'Controlled tests aimed at proving real impact, not just CVE presence.',
      },
      {
        key: 'report',
        title: 'Report',
        text: 'Reproducible evidence, remediation steps, and priority aligned to your operations.',
      },
      {
        key: 'retest',
        title: 'Re-test',
        text: 'Close the loop: we confirm risk dropped and document for internal audit.',
      },
    ],
  },
  services: {
    title: 'Services for',
    titleAccent: 'demanding teams',
    intro:
      'We cover the full cycle: from understanding what you expose to proving your controls and patches work.',
    footnote:
      'Justo Hacker adds new vectors from open and curated sources, plus R&D contributions—always under quality policies and human review.',
    items: [
      {
        title: 'Attack surface & ASM',
        subtitle: 'Continuous visibility',
        description:
          'Mapping of external assets, shadow IT, and changes: prioritization by likely risk and exposure context.',
      },
      {
        title: 'High-impact findings',
        subtitle: 'Less noise, more action',
        description:
          'Focus on vulnerabilities with demonstrable impact in your threat model—not endless lists.',
      },
      {
        title: 'Supervised AI',
        subtitle: 'Scale with control',
        description:
          'Correlation, enrichment, and pattern detection with expert-defined thresholds and traceability.',
      },
      {
        title: 'Pentesting & validation',
        subtitle: 'Ethical testing',
        description:
          'Methodical execution within agreed scope: web, API, cloud, and identities aligned to business priorities.',
      },
      {
        title: 'Executive reporting',
        subtitle: 'Ready to remediate',
        description:
          'Clear reports with evidence, contextual severity, and recommendations aligned to engineering teams.',
      },
      {
        title: 'Re-validation',
        subtitle: 'Close the loop',
        description:
          'After the fix, we confirm the vector is gone or mitigated—risk reduction metrics over time.',
      },
    ],
  },
  platform: {
    title: 'Platform in',
    titleAccent: 'action',
    intro:
      'A simplified view of the analysis flow—from reconnaissance to evidence—the same discipline we apply in real environments, with agreed scope and safeguards.',
  },
  trust: {
    title: 'Justo Hacker +',
    titleAccent: 'human operations',
    intro:
      'When severity demands it, experts review correlation, context, and next steps. AI accelerates; people decide at the risk frontier.',
    blockTitle: 'Supervised operations',
    bullets: [
      'Analysts review high-severity alerts and impact chains.',
      'Correlation with incidents and change windows (releases, infra).',
      'Clear communication to engineering and business in actionable language.',
      'Escalation and playbooks aligned to your response policy.',
    ],
    socTitle: 'SOC partner',
    socSub: 'Availability and continuity per contracted plan',
    cov: 'Coverage',
    state: 'Status',
    active: 'Active',
  },
  cta: {
    title: 'Protect what matters',
    titleAccent: 'without pause',
    intro:
      'Book a demo: we show how continuous pentesting, NOCTISGRID, and human supervision fit your current operation.',
    demo: 'Request a demonstration',
    email: 'Email us',
  },
  footer: {
    blurb:
      'Ethical hacking with supervised AI, adversarial validation, and the NOCTISGRID engine for legally scoped OSINT intelligence.',
    services: 'Services',
    explore: 'Explore',
    legal: 'Legal',
    serviceItems: ['Ethical pentesting', 'Attack surface', 'AI + human supervision', 'NOCTISGRID OSINT'],
    exploreItems: [
      { href: '#metodologia', label: 'Method' },
      { href: '#noctisgrid', label: 'NOCTISGRID' },
      { href: '#demo', label: 'Visual demo' },
      { href: '#contacto', label: 'Contact' },
    ],
    legalItems: [
      'Authorized activities only',
      'Confidentiality and minimal data exposure',
      'Contractual framework before intrusive testing',
    ],
    rights: 'All rights reserved.',
  },
  demo: {
    status: 'JUSTO HACKER AI — ACTIVE',
    prompt: 'root@justohacker:~$',
    findings: 'Prioritized findings',
    statsTitle: 'Stats (demo)',
    ports: 'Ports analyzed',
    services: 'Services detected',
    panel: 'Panel findings',
    accuracy: 'Target accuracy',
    terminalRows: [
      { tone: 'accent', text: 'Starting Nmap 7.94 ( https://nmap.org )' },
      { tone: 'white', text: 'Nmap scan report for target.example.com' },
      { tone: 'emerald', text: 'Host is up (0.0012s latency).' },
      { tone: 'teal', text: 'PORT     STATE SERVICE VERSION' },
      { tone: 'white', text: '22/tcp   open  ssh     OpenSSH 7.4' },
      { tone: 'white', text: '80/tcp   open  http    Apache httpd 2.4.29' },
      { tone: 'white', text: '443/tcp  open  https   Apache httpd 2.4.29' },
    ],
    steps: [
      { title: 'Reconnaissance', description: 'Scanning ports and services...' },
      { title: 'Enumeration', description: 'Identifying versions and technologies...' },
      { title: 'Analysis', description: 'Searching for known vulnerabilities...' },
      { title: 'Exploitation', description: 'Testing attack vectors (agreed scope)...' },
      { title: 'Reporting', description: 'Generating security report...' },
    ],
    vulns: [
      'SQL injection detected on /login.php',
      "Reflected XSS in 'search' parameter",
      'Unauthenticated directory: /admin',
      'Vulnerable Apache version 2.4.29',
      'SSH port with weak authentication',
      'Expired SSL certificate',
      'Sensitive information in robots.txt',
      'CSRF on contact form',
    ],
    scanning: [
      'Scanning 192.168.1.1...',
      'Port 80/tcp open',
      'Port 443/tcp open',
      'Port 22/tcp open',
      'Detecting services...',
      'Apache/2.4.29 identified',
      'MySQL 5.7.33 detected',
      'Analyzing vulnerabilities...',
      'CVE-2021-44228 found',
      'Generating report...',
    ],
  },
}

export const messages = { es, en }
