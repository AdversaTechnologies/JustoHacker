import React from 'react'
import { motion } from 'framer-motion'
import { Scale, CheckCircle2 } from 'lucide-react'
import { fadeUpProps, staggerParent, staggerChild } from '@/components/sectionMotion.js'

const ROE_ITEMS = [
  {
    title: 'Rules of Engagement (RoE) firmadas',
    desc: 'Documento legal que delimita el alcance exacto de las pruebas, los sistemas excluidos, las técnicas permitidas y las responsabilidades de cada parte. Sin RoE firmado, no hay ejecución.',
  },
  {
    title: 'Ventanas de prueba acordadas',
    desc: 'Se definen ventanas horarias de validación de alta intensidad para minimizar el impacto operativo. Fuera de ventana, el scanning continuo es de baja intensidad.',
  },
  {
    title: 'Safe words y protocolo de emergencia',
    desc: 'Canal de comunicación directa con el CISO/responsable del cliente para detener inmediatamente cualquier prueba en caso de incidente real o decisión de negocio.',
  },
  {
    title: 'Lista de exclusiones explícitas',
    desc: 'Sistemas de producción críticos, servidores de backup, infraestructura de alta disponibilidad o sistemas con impacto en vidas (OT médico) pueden marcarse como fuera de alcance.',
  },
  {
    title: 'Cobertura de responsabilidad civil',
    desc: 'Justo Hacker opera con seguro de responsabilidad civil profesional para actividades de pentesting y auditoría de seguridad. Documentación disponible a petición.',
  },
  {
    title: 'Manejo de PII y datos personales',
    desc: 'Cualquier dato personal accidentalmente accedido durante la auditoría se gestiona conforme al RGPD: notificación inmediata, no almacenamiento, destrucción segura verificable.',
  },
  {
    title: 'Confidencialidad y NDA',
    desc: 'Acuerdo de no divulgación mutuo que protege la información del cliente y los métodos propietarios de Justo Hacker. Vigencia mínima de 5 años.',
  },
  {
    title: 'Proceso de validación conjunto',
    desc: 'Ningún hallazgo se factura sin una sesión de validación conjunta donde el equipo técnico del cliente verifica la evidencia y confirma el impacto. Sin consenso, no hay bono.',
  },
]

function LegalSection() {
  return (
    <section
      id="legal"
      className="relative py-24"
      style={{ background: '#010f0f' }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div {...fadeUpProps} className="mb-14 text-center">
          {/* Animated scale icon */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal-700/50 bg-teal-900/30"
          >
            <Scale className="h-7 w-7 text-accent" />
          </motion.div>

          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-teal-400">
            Marco legal y operativo
          </span>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Reglas de engagement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-teal-100/65">
            El Programa RiskProof opera bajo un marco legal explícito. La seguridad jurídica protege al cliente tanto como la seguridad técnica.
          </p>
        </motion.div>

        <motion.div {...staggerParent} className="grid gap-4 md:grid-cols-2">
          {ROE_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              {...staggerChild}
              className="group relative overflow-hidden rounded-xl border border-teal-800/40 bg-[#0a1a1a]/80 p-5 transition-all duration-300 hover:border-teal-600/50"
            >
              {/* Check icon that scales in */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-900/40 border border-teal-700/40"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </motion.div>

              <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs leading-relaxed text-teal-100/55">{item.desc}</p>

              {/* Slide-in from left indicator */}
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-teal-600/40 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUpProps}
          className="mt-10 rounded-xl border border-teal-700/30 bg-teal-900/15 p-6 text-center"
        >
          <p className="text-sm text-teal-100/70">
            Justo Hacker actúa siempre dentro del marco legal vigente: Ley de Protección de Infraestructuras Críticas,
            RGPD (UE) 2016/679, Ley Orgánica 3/2018 (LOPDGDD) y Real Decreto-ley 12/2018 (NIS).
          </p>
          <p className="mt-3 text-xs text-teal-400/50">
            Documento de Rules of Engagement disponible en formato draft a petición, previo a firma de NDA.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LegalSection
