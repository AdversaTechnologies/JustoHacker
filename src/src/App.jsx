import React, { useState } from 'react'
import DocumentTitle from '@/components/DocumentTitle.jsx'
import LeadForm from '@/components/LeadForm.jsx'
import NavbarSection from '@/components/sections/NavbarSection.jsx'
import HeroSection from '@/components/sections/HeroSection.jsx'
import AiNeverSleepsSection from '@/components/sections/AiNeverSleepsSection.jsx'
import ContinuousProtectionSection from '@/components/sections/ContinuousProtectionSection.jsx'
import HumanAiSection from '@/components/sections/HumanAiSection.jsx'
import NoctisgridSection from '@/components/sections/NoctisgridSection.jsx'
import MethodologySection from '@/components/sections/MethodologySection.jsx'
import ServicesGridSection from '@/components/sections/ServicesGridSection.jsx'
import PlatformAnimationSection from '@/components/sections/PlatformAnimationSection.jsx'
import TrustSection from '@/components/sections/TrustSection.jsx'
import FinalCtaSection from '@/components/sections/FinalCtaSection.jsx'
import FooterSection from '@/components/sections/FooterSection.jsx'
import './App.css'

function App() {
  const [leadOpen, setLeadOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#001818] text-white">
      <DocumentTitle />
      <NavbarSection onOpenLead={setLeadOpen} />
      <main>
        <HeroSection onOpenLead={setLeadOpen} />
        <AiNeverSleepsSection />
        <ContinuousProtectionSection />
        <HumanAiSection />
        <NoctisgridSection />
        <MethodologySection />
        <ServicesGridSection />
        <PlatformAnimationSection />
        <TrustSection />
        <FinalCtaSection onOpenLead={setLeadOpen} />
      </main>
      <FooterSection />
      <LeadForm open={leadOpen} onOpenChange={setLeadOpen} />
    </div>
  )
}

export default App
