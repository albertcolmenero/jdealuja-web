import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Sparkles, Users, CheckCircle, Star, Calendar, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function EcoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] via-white to-[#94bae4]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                JdeAluja
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Inicio</Link>
              <Link href="/#que-es" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Qué es</Link>
              <Link href="/#servicios" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Servicios</Link>
              <Link href="/#sobre-mi" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Sobre mí</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-[#94bae4]/20 text-[#6b9cdd] border-[#94bae4]/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Membresía ECO
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a362f] mb-8 leading-tight">
            Estás cansada de estar para todos…{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              ¿y cuándo vas a estar para ti?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#3a362f]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            ECO es la membresía de autoconocimiento y espiritualidad práctica para mujeres que han vivido demasiado tiempo priorizando a los demás antes que a ellas.
          </p>
          <p className="text-lg text-[#3a362f]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Un espacio donde parar, escucharte y volver a ti: con calma, claridad y sin sentirte sola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quiero unirme a ECO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2 border-[#c9baa4] hover:border-[#6b9cdd] transition-all duration-300">
              Descubre más
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es ECO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8 leading-tight">
                No más teoría bonita.{" "}
                <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                  Aquí hablamos de vida real.
                </span>
              </h2>
              <p className="text-lg text-[#3a362f]/70 mb-8 leading-relaxed">
                ECO no es otra formación que acumulas y nunca aplicas. Es una tribu viva: comunidad, rutinas de autocuidado realista y herramientas simples que caben en tu día a día.
              </p>
              <p className="text-lg text-[#3a362f]/70 mb-8 leading-relaxed">
                Aquí no vienes a leer frases inspiracionales, vienes a parar, escucharte y actuar.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quiero saber cómo funciona
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#94bae4]/30 to-[#c9baa4]/20 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-24 h-24 text-[#6b9cdd] mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-[#3a362f] mb-4">Espiritualidad práctica</h3>
                  <p className="text-[#3a362f]/70">Herramientas que realmente funcionan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8f3] to-[#94bae4]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3a362f] mb-16">
            ECO es para ti si…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Sientes que vives \"en automático\", con mil responsabilidades.",
              "Te has desconectado de lo que quieres y necesitas.",
              "Deseas calma, claridad y presencia sin postureo espiritual.",
              "Buscas un espacio íntimo, honesto y en comunidad."
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-[#94bae4]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#6b9cdd]" />
                  </div>
                  <p className="text-[#3a362f] leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-[#3a362f] font-medium mb-6">
              Si lees esto y piensas &ldquo;me acaban de describir&rdquo;, entonces ECO es tu lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas que resuelve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3a362f] mb-16">
            Lo que hoy te pesa,{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              aquí encuentra salida.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: "&ldquo;No tengo tiempo para mí&rdquo;",
                solution: "Te damos estructura y mini-prácticas realistas."
              },
              {
                problem: "Te sientes mal al priorizarte",
                solution: "Lenguaje y ejercicios que normalizan ponerte primero."
              },
              {
                problem: "Sensación de estar perdida",
                solution: "Mapa mensual y guía clara."
              },
              {
                problem: "Soledad",
                solution: "Tribu que escucha sin juicio."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#94bae4]/20 to-[#c9baa4]/10">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#faf8f3] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#6b9cdd]">
                      <span className="text-[#6b9cdd] font-bold text-lg">×</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#3a362f] mb-2">{item.problem}</h3>
                      <div className="flex items-center mb-3">
                        <ArrowRight className="w-5 h-5 text-[#6b9cdd] mr-2" />
                        <span className="text-[#6b9cdd] font-medium">Solución:</span>
                      </div>
                      <p className="text-[#3a362f] leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quiero salir del piloto automático
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* La Promesa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8f3] to-[#94bae4]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8">
            De vivir en automático a{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              volver a ti.
            </span>
          </h2>
          <p className="text-xl text-[#3a362f]/70 mb-8 leading-relaxed">
            ECO te acompaña a pasar de la desconexión y el cansancio a la calma, la claridad y la energía para tu vida real.
          </p>
          <p className="text-xl text-[#3a362f]/70 leading-relaxed">
            Aquí vuelves a ti sin sentirte sola ni culpable por priorizarte.
          </p>
        </div>
      </section>

      {/* Qué encontrarás dentro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3a362f] mb-16">
            Espiritualidad práctica,{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              comunidad real y estructura amable.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🧘", title: "Espiritualidad sin humo", desc: "Clara, simple y aplicable." },
              { icon: "🔍", title: "Autoconocimiento cotidiano", desc: "Cuerpo, mente, emoción, energía." },
              { icon: "🤝", title: "Comunidad segura", desc: "Cálida, sin jerarquías." },
              { icon: "📅", title: "Rutinas sostenibles", desc: "Sin exigencia ni culpas." }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#94bae4]/20 to-[#c9baa4]/10">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#3a362f] mb-3">{item.title}</h3>
                  <p className="text-[#3a362f]/70 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estructura de la membresía */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            ¿Qué incluye{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ECO?
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Cada mes tendrás acceso a:</h3>
              <div className="space-y-6">
                {[
                  { icon: <Users className="w-6 h-6" />, text: "2 sesiones en directo (Zoom): prácticas guiadas + integración." },
                  { icon: <Calendar className="w-6 h-6" />, text: "Ejercicios y prácticas semanales: cortos, aplicables, sostenibles." },
                  { icon: <Heart className="w-6 h-6" />, text: "2 meditaciones mensuales: fáciles de encajar en tu día." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-green-600">{item.icon}</div>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Además:</h3>
              <div className="space-y-6">
                {[
                  { icon: <Users className="w-6 h-6" />, text: "Encuentros presenciales cada trimestre." },
                  { icon: <Sparkles className="w-6 h-6" />, text: "Retiro anual para integrar todo juntas." },
                  { icon: <Star className="w-6 h-6" />, text: "Astrología como apoyo (Sol, Luna, Ascendente, tránsitos) → sin dogmas, solo como mapa de autoconocimiento." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-emerald-600">{item.icon}</div>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quiero entrar en ECO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Menos exigencia,{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                más presencia.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              ECO se basa en micro-hábitos simples (5–15 min) y un acompañamiento 360º:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🧘", title: "Cuerpo", desc: "Para escucharlo." },
              { icon: "🧠", title: "Mente", desc: "Para calmarla." },
              { icon: "💝", title: "Emoción", desc: "Para comprenderla." },
              { icon: "✨", title: "Energía", desc: "Para sostenerte mejor." }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 space-y-4">
            <p className="text-lg text-slate-700 font-medium">
              Lenguaje cotidiano, claro y sin misticismos.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              Comunidad que escucha, acompaña y refleja.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Lo que cambia cuando{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              formas parte de ECO
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Rutinas que realmente se sostienen.",
              "Saber qué sientes, qué necesitas y qué te hace bien.",
              "Límites más claros y menos culpa.",
              "Una red de mujeres con la que no te sientes sola.",
              "Más calma, claridad y energía para tu día a día."
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Por qué ECO no es{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              &lsquo;otro grupo más&rsquo;
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Espiritualidad práctica", desc: "Sin humo, clara y usable." },
              { icon: <Users className="w-8 h-8" />, title: "Comunidad cálida", desc: "Horizontal y sin jerarquías." },
              { icon: <Zap className="w-8 h-8" />, title: "Puentes concretos", desc: "Entre autoconocimiento y acciones concretas." },
              { icon: <Heart className="w-8 h-8" />, title: "Ritmo amable", desc: "Menos exigencia, más presencia." }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-green-600">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Mujeres que ya{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              están dentro
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "ECO me devolvió el hábito de parar y escucharme.",
                name: "Laura M.",
                rating: 5
              },
              {
                text: "Ahora tengo una comunidad donde puedo ser yo, sin juicios.",
                name: "Sofía R.",
                rating: 5
              },
              {
                text: "Antes sentía culpa al priorizarme; ahora lo vivo como un acto de amor.",
                name: "Carmen L.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="pt-8 pb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-slate-600 font-medium">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Tu bienestar no es un lujo.
            <br />
            <span className="text-green-100">Es tu base.</span>
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            ECO es el lugar donde aprendes a volver a ti con calma, claridad y presencia.
          </p>
          <p className="text-2xl font-semibold text-white mb-12">
            ECO. Lo que eres, resuena.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
            Quiero ser parte de ECO
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                JotadeAluja
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Un espacio de reconexión para mujeres que buscan volver a sí mismas con calma, claridad y presencia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/#que-es" className="text-slate-300 hover:text-white transition-colors">Qué es</Link></li>
                <li><Link href="/#servicios" className="text-slate-300 hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="/#sobre-mi" className="text-slate-300 hover:text-white transition-colors">Sobre mí</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-slate-300 mb-2">¿Tienes preguntas sobre ECO?</p>
              <p className="text-slate-300">Escríbeme y te respondo personalmente.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 JotadeAluja. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
