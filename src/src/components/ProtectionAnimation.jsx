import React, { useState, useEffect } from 'react'
import { Shield, Server, Database, Cloud, Globe, Smartphone, Wifi, AlertTriangle, CheckCircle, Zap } from 'lucide-react'

const ProtectionAnimation = () => {
  const [threats, setThreats] = useState([])
  const [blockedCount, setBlockedCount] = useState(0)
  const [activeScans, setActiveScans] = useState(6)
  const [pulseNodes, setPulseNodes] = useState(new Set())

  const assets = [
    { id: 1, name: "Servidor Web", icon: Server, x: 20, y: 30, status: "protected" },
    { id: 2, name: "Base de Datos", icon: Database, x: 70, y: 20, status: "protected" },
    { id: 3, name: "Cloud Storage", icon: Cloud, x: 80, y: 60, status: "scanning" },
    { id: 4, name: "API Gateway", icon: Globe, x: 50, y: 70, status: "protected" },
    { id: 5, name: "Dispositivos Móviles", icon: Smartphone, x: 30, y: 80, status: "protected" },
    { id: 6, name: "Red Interna", icon: Wifi, x: 60, y: 40, status: "scanning" }
  ]

  const threatTypes = [
    "SQL Injection bloqueado",
    "Intento de fuerza bruta detectado",
    "Malware bloqueado",
    "Phishing detectado",
    "DDoS mitigado",
    "Acceso no autorizado bloqueado",
    "Vulnerabilidad patcheada",
    "Tráfico sospechoso bloqueado"
  ]

  useEffect(() => {
    // Simulate threat detection and blocking
    const threatInterval = setInterval(() => {
      const newThreat = {
        id: Date.now(),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        timestamp: new Date().toLocaleTimeString(),
        severity: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low'
      }
      
      setThreats(prev => [newThreat, ...prev.slice(0, 4)])
      setBlockedCount(prev => prev + 1)
    }, 2000)

    // Simulate node pulsing
    const pulseInterval = setInterval(() => {
      const randomAsset = assets[Math.floor(Math.random() * assets.length)]
      setPulseNodes(prev => new Set([...prev, randomAsset.id]))
      
      setTimeout(() => {
        setPulseNodes(prev => {
          const newSet = new Set(prev)
          newSet.delete(randomAsset.id)
          return newSet
        })
      }, 1000)
    }, 1500)

    // Simulate active scans counter
    const scanInterval = setInterval(() => {
      setActiveScans(prev => Math.floor(Math.random() * 3) + 5)
    }, 3000)

    return () => {
      clearInterval(threatInterval)
      clearInterval(pulseInterval)
      clearInterval(scanInterval)
    }
  }, [])

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-500/20 border-red-500/50'
      case 'medium': return 'text-yellow-500 bg-yellow-500/20 border-yellow-500/50'
      case 'low': return 'text-green-500 bg-green-500/20 border-green-500/50'
      default: return 'text-gray-500 bg-gray-500/20 border-gray-500/50'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'protected': return 'text-green-500'
      case 'scanning': return 'text-accent'
      case 'threat': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6 bg-black/90 rounded-lg border border-gray-800 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid h-full w-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white flex items-center">
            <Shield className="w-8 h-8 text-primary mr-3" />
            Protección Activa en Tiempo Real
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full pulse-animation"></div>
              <span className="text-green-500 font-mono text-sm">SISTEMA ACTIVO</span>
            </div>
            <div className="text-primary font-mono text-sm">
              24/7 MONITOREO
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-500 mb-1">{blockedCount}</div>
            <div className="text-sm text-gray-400">Amenazas Bloqueadas</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-accent mb-1">{activeScans}</div>
            <div className="text-sm text-gray-400">Activos Protegidos</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">100%</div>
            <div className="text-sm text-gray-400">Tiempo Activo</div>
          </div>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-6">
        {/* Network Map */}
        <div className="bg-gray-900/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 text-accent mr-2" />
            Mapa de Red Protegida
          </h4>
          
          <div className="relative h-64 bg-gray-800/30 rounded-lg overflow-hidden">
            {/* Central Shield */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center neon-glow">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Assets */}
            {assets.map((asset) => {
              const Icon = asset.icon
              const isPulsing = pulseNodes.has(asset.id)
              
              return (
                <div
                  key={asset.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${asset.x}%`, top: `${asset.y}%` }}
                >
                  {/* Connection Line to Center */}
                  <svg 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: `${Math.abs(asset.x - 50) * 2}%`,
                      height: `${Math.abs(asset.y - 50) * 2}%`,
                    }}
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke="rgba(255, 0, 102, 0.3)"
                      strokeWidth="1"
                      className={isPulsing ? 'animate-pulse' : ''}
                    />
                  </svg>

                  {/* Asset Node */}
                  <div className={`w-12 h-12 rounded-full bg-gray-800 border-2 flex items-center justify-center transition-all duration-300 ${
                    isPulsing ? 'scale-110 border-primary shadow-lg shadow-primary/50' : 'border-gray-600'
                  }`}>
                    <Icon className={`w-6 h-6 ${getStatusColor(asset.status)}`} />
                  </div>
                  
                  {/* Asset Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-400 whitespace-nowrap">
                    {asset.name}
                  </div>

                  {/* Status Indicator */}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                    asset.status === 'protected' ? 'bg-green-500' : 
                    asset.status === 'scanning' ? 'bg-accent' : 'bg-red-500'
                  } ${isPulsing ? 'pulse-animation' : ''}`}></div>
                </div>
              )
            })}

            {/* Scanning Waves */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border border-accent/30 rounded-full animate-ping"></div>
                <div className="w-48 h-48 border border-primary/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Feed */}
        <div className="bg-gray-900/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            Feed de Amenazas en Tiempo Real
          </h4>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {threats.map((threat) => (
              <div
                key={threat.id}
                className={`p-3 rounded-lg border transition-all duration-300 ${getSeverityColor(threat.severity)}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{threat.type}</span>
                  <span className="text-xs opacity-75">{threat.timestamp}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-400">BLOQUEADO</span>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    threat.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                    threat.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {threat.severity.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Status */}
          <div className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">IA Activa</span>
            </div>
            <p className="text-xs text-gray-400">
              Analizando patrones de tráfico y comportamientos anómalos en tiempo real. 
              Próxima actualización de firmas en 2 minutos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtectionAnimation

