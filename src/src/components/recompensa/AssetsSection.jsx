import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldAlert,
  GraduationCap,
  Network,
  FlaskConical,
  Globe,
  Mail,
  Cpu,
} from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const CATEGORIES = [
  {
    id: 'A',
    icon: ShieldAlert,
    name: 'Identidad y autenticación',
    risk: 'Crítico',
    riskColor: '#ef4444',
    items: ['Active Directory / LDAP', 'SSO y MFA corporativo', 'Gestión de privilegios (PAM)', 'Cuentas de servicio'],
  },
  {
    id: 'B',
    icon: GraduationCap,
    name: 'Sistemas académicos / ERP',
    risk: 'Alto',
    riskColor: '#f97316',
    items: ['SIS / LMS (notas, matrículas)', 'ERP financiero y RRHH', 'Portales de alumnos', 'APIs internas'],
  },
  {
    id: 'C',
    icon: Network,
    name: 'Red multi-sede',
    risk: 'Alto',
    riskColor: '#f97316',
    items: ['Segmentación VLAN', 'VPN y acceso remoto', 'Firewall perimetral', 'Switches gestionados'],
  },
  {
    id: 'D',
    icon: FlaskConical,
    name: 'Infraestructura de investigación',
    risk: 'Medio',
    riskColor: '#eab308',
    items: ['Servidores HPC / clústeres', 'Repositorios de datos científicos', 'Colaboraciones externas', 'Licencias de software'],
  },
  {
    id: 'E',
    icon: Globe,
    name: 'Plataformas públicas',
    risk: 'Alto',
    riskColor: '#f97316',
    items: ['Sitio web institucional', 'Portal de noticias / CMS', 'Aplicaciones externas', 'APIs públicas'],
  },
  {
    id: 'F',
    icon: Mail,
    name: 'Correo y colaboración',
    risk: 'Crítico',
    riskColor: '#ef4444',
    items: ['Microsoft 365 / Google Workspace', 'Exchange Server', 'SharePoint / Drive', 'Teams / videoconferencia'],
  },
  {
    id: 'G',
    icon: Cpu,
    name: 'OT / IoT / Smart Campus',
    risk: 'Medio',
    riskColor: '#eab308',
    items: ['Control de acceso físico', 'CCTV y sensores IoT', 'Sistemas HVAC conectados', 'Redes de campus inteligente'],
  },
]

function AssetCard({ cat }) {
  const [hovered, setHovered] = useState(false)
  const Icon = cat.icon

  return (
    <motion.div
      {...staggerChild}
      whileHover={{ y: -6, boxShadow: '0 0 24px rgba(45,212,191,0.28)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-teal-800/50 bg-[#0a2a2a]/80 p-5 backdrop-blur-sm transition-all duration-300"
    >
      {/* Category badge */}
      <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-teal-700/60 text-[10px] font-black text-teal-400">
        {cat.id}
      </div>

      {/* Icon */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ background: `${cat.riskColor}18`, border: `1px solid ${cat.riskColor}40` }}
        >
          <motion.div
            animate={hovered ? { rotate: 360 } : { rotate: 0 }}
            transition={hovered ? { duration: 8, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
          >
            <Icon className="h-5 w-5" style={{ color: cat.riskColor }} />
          </motion.div>
        </div>
        <div>
          <span
            className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ background: `${cat.riskColor}18`, color: cat.riskColor }}
          >
            {cat.risk}
          </span>
        </div>
      </div>

      <h3 className="mb-3 text-sm font-bold text-white">{cat.name}</h3>

      <ul className="space-y-1">
        {cat.items.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-xs text-teal-100/60">
            <span className="h-1 w-1 shrink-0 rounded-full bg-teal-500/60" />
            {item}
          </li>
        ))}
      </ul>

      {/* Bottom glow on hover */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${cat.riskColor}60, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  )
}

function AssetsSection() {
  return (
    <section
      id="activos"
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #001818 0%, #022a2a 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div {...fadeUpProps} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-teal-700/50 bg-teal-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Alcance de evaluación
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
            Activos que evaluamos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/65">
            Tú decides el inventario. Nosotros evaluamos cada categoría como lo haría un adversario real.
          </p>
        </motion.div>

        <motion.div
          {...staggerParent}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {CATEGORIES.map((cat) => (
            <AssetCard key={cat.id} cat={cat} />
          ))}
        </motion.div>

        <motion.p
          {...fadeUpProps}
          className="mt-8 text-center text-xs text-teal-600/70"
        >
          ¿Tienes activos OT, cloud o SaaS específicos? El alcance se define en el contrato de engagement.
        </motion.p>
      </div>
    </section>
  )
}

export default AssetsSection
