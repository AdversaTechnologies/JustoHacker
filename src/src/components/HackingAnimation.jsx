import React, { useMemo, useState, useEffect } from 'react'
import { Shield, Zap, AlertTriangle, CheckCircle, Eye, Target } from 'lucide-react'
import { pickMessages, useI18n } from '@/i18n/I18nContext.jsx'

const stepIcons = [Eye, Target, AlertTriangle, Zap, CheckCircle]
const stepColors = ['text-accent', 'text-primary', 'text-teal-300', 'text-cyan-300', 'text-emerald-400']

const terminalToneClass = {
  accent: 'text-accent',
  white: 'text-white',
  emerald: 'text-emerald-400',
  teal: 'text-teal-300',
}

function HackingAnimation() {
  const { locale } = useI18n()
  const dm = pickMessages(locale).demo
  const hackingSteps = useMemo(
    () =>
      dm.steps.map((s, i) => ({
        title: s.title,
        description: s.description,
        icon: stepIcons[i],
        color: stepColors[i],
      })),
    [locale],
  )

  const vulnerabilityTypes = dm.vulns
  const scanningTexts = dm.scanning
  const terminalRows = dm.terminalRows || []

  const [currentStep, setCurrentStep] = useState(0)
  const [scanningText, setScanningText] = useState('')
  const [vulnerabilities, setVulnerabilities] = useState([])

  useEffect(() => {
    setVulnerabilities([])
    setCurrentStep(0)
  }, [locale])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % hackingSteps.length)
    }, 3000)

    const textInterval = setInterval(() => {
      setScanningText(scanningTexts[Math.floor(Math.random() * scanningTexts.length)])
    }, 800)

    const vulnInterval = setInterval(() => {
      setVulnerabilities((prev) => {
        if (prev.length >= 4) return prev
        const pool = vulnerabilityTypes.filter((v) => !prev.includes(v))
        if (pool.length === 0) return prev
        const next = pool[Math.floor(Math.random() * pool.length)]
        return [...prev, next]
      })
    }, 2000)

    return () => {
      clearInterval(stepInterval)
      clearInterval(textInterval)
      clearInterval(vulnInterval)
    }
  }, [hackingSteps.length, locale, scanningTexts, vulnerabilityTypes])

  const currentStepData = hackingSteps[currentStep]
  const StepIcon = currentStepData.icon
  const timeLocale = locale === 'en' ? 'en-US' : 'es-CL'

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-teal-800/80 bg-[#001818]/95 p-6">
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="cyber-grid h-full w-full" />
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-emerald-400 pulse-animation" />
            <span className="font-mono text-sm text-emerald-400">{dm.status}</span>
          </div>
          <div className="font-mono text-sm text-accent">
            {new Date().toLocaleTimeString(timeLocale, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 flex items-center space-x-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-teal-950/80 ${currentStepData.color}`}
            >
              <StepIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{currentStepData.title}</h3>
              <p className="text-teal-200/80">{currentStepData.description}</p>
            </div>
          </div>

          <div className="mb-4 h-2 w-full rounded-full bg-teal-950">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
              style={{ width: `${((currentStep + 1) / hackingSteps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-6 rounded-lg bg-teal-950/60 p-4 font-mono text-sm">
          <div className="mb-2 flex items-center">
            <span className="text-emerald-400">{dm.prompt}</span>
            <span className="typing-animation ml-2 text-white">{scanningText}</span>
          </div>
          <div className="space-y-1 text-teal-100/90">
            {terminalRows.map((row, idx) => (
              <div key={idx} className={terminalToneClass[row.tone] || 'text-white'}>
                {row.text}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-3 flex items-center text-lg font-semibold text-white">
              <AlertTriangle className="mr-2 h-5 w-5 text-amber-400" />
              {dm.findings}
            </h4>
            <div className="space-y-2">
              {vulnerabilities.map((vuln) => (
                <div
                  key={vuln}
                  className="animate-pulse rounded-lg border border-accent/25 bg-accent/5 p-3 text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-teal-50">{vuln}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center text-lg font-semibold text-white">
              <Shield className="mr-2 h-5 w-5 text-emerald-400" />
              {dm.statsTitle}
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-teal-950/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200/80">{dm.ports}</span>
                  <span className="font-bold text-accent">65,535</span>
                </div>
              </div>
              <div className="rounded-lg bg-teal-950/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200/80">{dm.services}</span>
                  <span className="font-bold text-primary">{Math.floor(Math.random() * 20) + 5}</span>
                </div>
              </div>
              <div className="rounded-lg bg-teal-950/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200/80">{dm.panel}</span>
                  <span className="font-bold text-cyan-300">{vulnerabilities.length}</span>
                </div>
              </div>
              <div className="rounded-lg bg-teal-950/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200/80">{dm.accuracy}</span>
                  <span className="font-bold text-emerald-400">99.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {hackingSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`flex flex-col items-center space-y-2 transition-all duration-300 ${
                  index === currentStep ? 'scale-110' : 'opacity-50'
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-teal-950/80 ${
                    index === currentStep ? step.color : 'text-teal-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-teal-300/80">{step.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HackingAnimation
