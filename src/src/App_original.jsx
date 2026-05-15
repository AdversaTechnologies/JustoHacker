import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Shield, 
  Zap, 
  Eye, 
  Target, 
  Brain, 
  Clock, 
  Search, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Globe,
  Lock,
  Cpu,
  Activity,
  BarChart3
} from 'lucide-react'
import HackingAnimation from './components/HackingAnimation.jsx'
import ProtectionAnimation from './components/ProtectionAnimation.jsx'
import './App.css'

function App() {
  const [currentStat, setCurrentStat] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: "24/7", label: "Monitoreo Continuo", icon: Clock },
    { number: "<0.5%", label: "Falsos Positivos", icon: Target },
    { number: "99.5%", label: "Precisión en Reportes", icon: CheckCircle },
    { number: "20%", label: "Hallazgos Impactantes", icon: AlertTriangle }
  ]

  const tools = [
    "Nmap", "WhatWeb", "GoBuster", "Dirb", "Nikto", "smtp-user-enum",
    "enum4linux", "smbclient", "Nuclei", "OpenVAS", "Searchsploit", "SQLMap"
  ]

  const phases = [
    { 
      title: "Reconocimiento", 
      description: "Mapeo completo de la superficie de ataque",
      icon: Search,
      tools: ["Nmap", "WhatWeb", "GoBuster"]
    },
    { 
      title: "Análisis", 
      description: "Identificación de vulnerabilidades y puntos débiles",
      icon: Eye,
      tools: ["Nikto", "Nuclei", "OpenVAS"]
    },
    { 
      title: "Explotación", 
      description: "Pruebas éticas de vulnerabilidades detectadas",
      icon: Target,
      tools: ["SQLMap", "Searchsploit"]
    },
    { 
      title: "Post-Explotación", 
      description: "Evaluación del impacto y documentación",
      icon: BarChart3,
      tools: ["enum4linux", "smbclient"]
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">JUSTO</span>
            <span className="text-primary">HACKER</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Solicitar Demo
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-animation"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full pulse-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full pulse-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="outline" className="border-primary text-primary mb-4">
                  FÁCIL DE USAR • GRATIS PARA PROBAR • SIN TARJETA DE CRÉDITO
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                La Plataforma de <span className="text-primary">Ethical Hacking</span> Impulsada por{' '}
                <span className="text-primary">Inteligencia Artificial</span> que{' '}
                <span className="text-white">Nunca Duerme</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Protege tus activos digitales las 24 horas, todos los días.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Nuestros Servicios
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                  Contáctanos
                </Button>
              </div>
              
              {/* Scan Input */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input 
                  placeholder="Ingresa tu dominio o IP para escanear"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                  <Search className="w-4 h-4 mr-2" />
                  Escanear Ahora
                </Button>
              </div>
            </div>
            
            {/* Right Content - Hacker Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110"></div>
                
                {/* Main Image */}
                <img 
                  src="/hacker-hero.png" 
                  alt="Justo Hacker - Ethical Hacker con IA 24/7" 
                  className="relative z-10 w-full max-w-lg h-auto object-contain"
                />
                
                {/* Floating Code Elements */}
                <div className="absolute top-10 -left-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-green-400 font-mono text-sm animate-float">
                  <div>$ nmap -sS target.com</div>
                </div>
                
                <div className="absolute bottom-20 -right-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-red-400 font-mono text-sm animate-float" style={{animationDelay: '1s'}}>
                  <div>Vulnerability detected!</div>
                </div>
                
                <div className="absolute top-1/2 -left-20 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-accent font-mono text-sm animate-float" style={{animationDelay: '2s'}}>
                  <div>24/7 Active</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className={`bg-card/30 backdrop-blur-sm border-gray-800 transition-all duration-500 ${
                  currentStat === index ? 'neon-glow scale-105' : ''
                }`}>
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encuentra y Prioriza tus Vulnerabilidades con{' '}
              <span className="text-primary">&lt;0.5% Falsos Positivos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Para asegurar tu infraestructura digital, nuestra tecnología mapea todos tus activos digitales, 
              los prueba y te informa qué vulnerabilidades debes corregir primero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">Gestión de Superficie de Ataque</CardTitle>
                <CardDescription className="text-gray-400">
                  Nuestro motor prioriza las vulnerabilidades a corregir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Mapeo completo de activos internos y externos con priorización inteligente 
                  basada en riesgo real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl">Más del 20% de Hallazgos son Impactantes</CardTitle>
                <CardDescription className="text-gray-400">
                  Enfoque en vulnerabilidades que realmente importan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A diferencia de los scanners tradicionales, nos enfocamos en vulnerabilidades 
                  con impacto real en tu seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">IA Avanzada</CardTitle>
                <CardDescription className="text-gray-400">
                  Detección impulsada por inteligencia artificial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Algoritmos de IA que aprenden de ataques pasados para generar nuevos módulos 
                  cuando se encuentran vulnerabilidades.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tools Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">
              Pruebas para <span className="text-primary">Miles de Vulnerabilidades</span>
            </h3>
            <p className="text-gray-300 mb-8">
              Los Hackers Artificiales aprenden nuevos vectores de ataque de fuentes open-source y propietarias, 
              así como adiciones manuales de nuestro equipo de I+D.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 text-center">
                  <Cpu className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-sm font-semibold">{tool}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Más de 60,000 hallazgos enviados</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Patrones de ataque avanzados con enfoques multi-paso</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Detección de nuevas vulnerabilidades impulsada por IA</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Aprende de ataques pasados para reducir falsos positivos</h4>
            </div>
          </div>

          {/* Hacking Animation Demo */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Visualiza cómo nuestra <span className="text-primary">IA Hackea</span> tus sistemas
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Observa en tiempo real cómo nuestros Hackers Artificiales analizan, detectan y reportan 
                vulnerabilidades en tu infraestructura.
              </p>
            </div>
            <HackingAnimation />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Humanos y Máquinas,{' '}
              <span className="text-primary">Hackeando Juntos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La mejor defensa viene de combinar la velocidad de las máquinas con el conocimiento de los humanos. 
              Nuestro enfoque simbiótico entrega los mejores resultados para equipos de seguridad.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="mr-2 border-accent text-accent">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Monitoreo y Pruebas 24/7 de tus Activos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Cada vez que ocurren cambios en tu entorno, nuestros Hackers Artificiales se ponen a trabajar. 
                  Actúan basándose en eventos para no sobrecargar tu infraestructura, reduciendo costos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <Brain className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Motor de Aprendizaje de Hacking Impulsado por IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Los Hackers Artificiales aprenden de ataques pasados para generar nuevos módulos cuando 
                  se encuentran vulnerabilidades. Se actualizan constantemente sobre nuevas tecnologías.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>&lt;0.5% Falsos Positivos en Hallazgos Reportados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Cada hallazgo viene con un reporte detallado sobre cómo reproducir y mitigar la vulnerabilidad. 
                  Nuestra tecnología de Prueba de Vulnerabilidad reporta hallazgos con más del 99.5% de certeza.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Protection Animation Demo */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Protección Activa <span className="text-primary">24/7</span> en Tiempo Real
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Observa cómo nuestra IA protege continuamente tus activos digitales, detectando y bloqueando 
                amenazas antes de que puedan causar daño.
              </p>
            </div>
            <ProtectionAnimation />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Más Preciso que un Scanner</span>
              <br />
              <span className="text-accent">Más Rápido que Pentesting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los scanners solo rascan la superficie y te dan una lista de hallazgos llena de falsos positivos. 
              Los pentests varían en calidad y son muy poco frecuentes mientras tienen un precio alto.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-400">Scanners Tradicionales</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Muchos falsos positivos</li>
                      <li>• Hallazgos superficiales</li>
                      <li>• Sin contexto de negocio</li>
                      <li>• Requiere expertise técnico</li>
                    </ul>
                  </div>
                  <div className="border-l border-r border-gray-700 px-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">Justo Hacker IA</h3>
                    <ul className="space-y-2 text-white">
                      <li>• &lt;0.5% falsos positivos</li>
                      <li>• Hallazgos impactantes</li>
                      <li>• Priorización inteligente</li>
                      <li>• Interfaz intuitiva</li>
                      <li>• Monitoreo 24/7</li>
                      <li>• Aprendizaje continuo</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-400">Pentesting Manual</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Muy costoso</li>
                      <li>• Poco frecuente</li>
                      <li>• Calidad variable</li>
                      <li>• Tiempo limitado</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protege tus Activos Digitales{' '}
            <span className="text-primary">24/7</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La seguridad de tu organización no puede esperar. Nuestra IA trabaja 24/7 para mantener 
            tus sistemas protegidos contra las amenazas más avanzadas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white neon-glow">
              <Play className="w-5 h-5 mr-2" />
              Solicitar Demostración
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
              Escaneo Gratuito
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">JUSTO</span>
                <span className="text-primary">HACKER</span>
              </div>
              <p className="text-gray-400 mb-4">
                Plataforma de Ethical Hacking impulsada por IA que nunca duerme.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pentesting Automatizado</li>
                <li>Gestión de Vulnerabilidades</li>
                <li>Monitoreo 24/7</li>
                <li>Análisis de Superficie de Ataque</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Equipo</li>
                <li>Carreras</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@justohacker.com</p>
                <p>+34 900 123 456</p>
                <p>Madrid, España</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Justo Hacker. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

