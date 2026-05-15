import React, { useState } from 'react'
import PasswordGate from '@/components/recompensa/PasswordGate.jsx'
import HeroRecompensa from '@/components/recompensa/HeroRecompensa.jsx'
import ComoFuncionaSection from '@/components/recompensa/ComoFuncionaSection.jsx'
import AssetsSection from '@/components/recompensa/AssetsSection.jsx'
import CriticidadSection from '@/components/recompensa/CriticidadSection.jsx'
import DemostracionSection from '@/components/recompensa/DemostracionSection.jsx'
import PricingSection from '@/components/recompensa/PricingSection.jsx'
import LegalSection from '@/components/recompensa/LegalSection.jsx'
import CtaRecompensa from '@/components/recompensa/CtaRecompensa.jsx'
import NavbarSection from '@/components/sections/NavbarSection.jsx'
import FooterSection from '@/components/sections/FooterSection.jsx'
import LeadForm from '@/components/LeadForm.jsx'

/**
 * Protected page for Programa RiskProof.
 * PasswordGate handles authentication before showing content.
 */
function ProgramaRecompensa() {
  const [leadOpen, setLeadOpen] = useState(false)

  return (
    <PasswordGate>
      <div className="min-h-screen bg-[#001818] text-white">
        <NavbarSection onOpenLead={setLeadOpen} />
        <main>
          <HeroRecompensa onOpenLead={setLeadOpen} />
          <ComoFuncionaSection />
          <AssetsSection />
          <CriticidadSection />
          <DemostracionSection />
          <PricingSection />
          <LegalSection />
          <CtaRecompensa onOpenLead={setLeadOpen} />
        </main>
        <FooterSection />
        <LeadForm
          open={leadOpen}
          onOpenChange={setLeadOpen}
          defaultSource="Programa RiskProof"
        />
      </div>
    </PasswordGate>
  )
}

export default ProgramaRecompensa
