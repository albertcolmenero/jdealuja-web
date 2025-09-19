import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Sparkles, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] via-white to-[#94bae4]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/2.png" 
                alt="JdeAluja" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Inicio</a>
              <a href="#que-es" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Qué es</a>
              <a href="#servicios" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Servicios</a>
              <a href="#sobre-mi" className="text-[#3a362f] hover:text-[#6b9cdd] transition-colors">Sobre mí</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        
      >
        <div className="max-w-7xl mx-auto text-center relative z-10"
        style={{
          backgroundImage: 'url(/3.png)',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '300px',
          
        }}>
        <div className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="mb-8">
            <img 
              src="/4.png" 
              alt="Reconexión femenina" 
              className="h-12 w-auto mx-auto mb-4"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a362f] mb-8 leading-tight">
          Estás cansada de estar para
          todos...
          ¿y cuándo vas a <br />
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
            estar para ti?

            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#3a362f]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          ECO es la membresía de autoconocimiento y espiritualidad
práctica para mujeres que han vivido demasiado tiempo
priorizando a los demás antes que a ellas. <br /><br />
Un espacio donde parar, escucharte y volver a ti: con calma, claridad y sin sentirte
sola.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/eco">
              <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quiero unirme a ECO                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2 border-[#c9baa4] hover:border-[#6b9cdd] transition-all duration-300">
              Descubre más
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Teoría bonita */}
      <section id="que-es" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8 leading-tight">
              No más teoría bonita.{" "}
                <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                Aquí hablamos de vida
                real.                </span>
              </h2>
              <p className="text-lg text-[#3a362f]/70 mb-8 leading-relaxed">
              ECO no es otra formación que acumulas y nunca aplicas. Es
una tribu viva: comunidad, rutinas de autocuidado realista y
herramientas simples que caben en tu día a día.              </p>
              <p className="text-lg text-[#3a362f]/70 mb-8 leading-relaxed">
              Aquí no vienes a leer frases inspiracionales, vienes a parar,
              escucharte y actuar.              </p>
              
                        
              <Link href="/eco">
                <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quiero saber cómo funciona                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div 
                className="rounded-3xl p-8 h-96 flex items-center justify-center relative"
                style={{
                  backgroundImage: 'url(/5.png)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              >
                <div className="absolute inset-0 bg-[#6b9cdd]/60 rounded-3xl"></div>
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4">Espiritualidad práctica</h3>
                  <p className="text-white">Herramientas que realmente funcionan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* ECO es para ti si ... */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8">
               ECO es para ti si...
             </h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { 
                 image: "/10.png", 
                 text: "Sientes que vives \"en automático\", con mil responsabilidades." 
               },
               { 
                 image: "/11.png", 
                 text: "Te has desconectado de lo que quieres y necesitas." 
               },
               { 
                 image: "/12.png", 
                 text: "Deseas calma, claridad y presencia sin postureo espiritual." 
               },
               { 
                 image: "/13.png", 
                 text: "Buscas un espacio íntimo, honesto y en comunidad." 
               }
             ].map((item, index) => (
               <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                 <CardContent className="pt-8 pb-6">
                   <div className="mb-6">
                     <img 
                       src={item.image} 
                       alt="" 
                       className="h-20 mx-auto"
                     />
                   </div>
                   <p className="text-[#3a362f] leading-relaxed">{item.text}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
           <div className="text-center mt-12">
            <p className="text-xl text-[#3a362f] font-medium">
              Si lees esto y piensas &ldquo;me acaban de describir&rdquo;, entonces ECO es tu lugar.
            </p>
           </div>
         </div>
       </section>

      {/* Lo que hoy te pesa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8">
              Lo que hoy te pesa,{" "}
              <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                aquí encuentra salida.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                image: "/6.png",
                title: "\"No tengo tiempo para mi\"",
                text: "Te damos estructura y mini-prácticas realistas."
              },
              {
                image: "/7.png",
                title: "\"Te sientes mal al priorizarte\"",
                text: "Lenguaje y ejercicios que normalizan ponerte primero."
              },
              {
                image: "/8.png",
                title: "\"Sensación de estar perdida\"",
                text: "Mapa mensual y guía clara."
              },
              {
                image: "/9.png",
                title: "\"Soledad\"",
                text: "Tribu que escucha sin juicio."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#94bae4]/20 to-[#c9baa4]/10">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt="" 
                        className="w-16 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#3a362f] mb-2">{item.title}</h3>
                      <div className="flex items-center mb-3">
                        <ArrowRight className="w-5 h-5 text-[#6b9cdd] mr-2" />
                        <span className="text-[#6b9cdd] font-medium">Solución:</span>
                      </div>
                      <p className="text-[#3a362f] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/eco">
              <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quiero salir del piloto automático
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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


      {/* Lo que duele / Lo que deseas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8f3] to-[#94bae4]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3a362f] mb-16">
            Lo que ahora vives.{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              Lo que en verdad deseas.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lo que duele */}
            <Card className="border-[#c9baa4] bg-[#faf8f3]/80">
              <CardHeader>
                <CardTitle className="text-[#3a362f] text-2xl">Lo que duele</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Te has olvidado de ti detrás de tus obligaciones.",
                  "Sientes que tu vida es un piloto automático.",
                  "Sostienes a todos… pero nadie te sostiene a ti.",
                  "Estás cansada, incluso después de haber descansado.",
                  "La culpa aparece siempre que intentas cuidarte."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#6b9cdd] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#3a362f] leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Lo que deseas */}
            <Card className="border-[#94bae4] bg-[#94bae4]/10">
              <CardHeader>
                <CardTitle className="text-[#3a362f] text-2xl">Lo que deseas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Respirar. Parar. Tener tiempo para ti.",
                  "Volver a reconocerte y sentirte viva.",
                  "Cuidarte sin sentirte egoísta.",
                  "Tomar decisiones alineadas contigo.",
                  "Compartir con mujeres que entienden tu proceso."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#6b9cdd] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#3a362f] leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/eco">
              <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Sí, esto es para mí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Programas / Servicios */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8f3] to-[#94bae4]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8">
              Tu bienestar{" "}
              <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                no se negocia.
              </span>
            </h2>
            <p className="text-xl text-[#3a362f]/70 max-w-3xl mx-auto">
              Te acompaño en diferentes formatos, para que elijas el que más se adapta a tu momento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sesiones individuales */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#94bae4]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#6b9cdd]" />
                </div>
                <CardTitle className="text-2xl text-[#3a362f]">Sesiones individuales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#3a362f]/70 mb-6 leading-relaxed">
                  Un espacio íntimo, seguro y sin juicios. Aquí eres tú, con tus preguntas, tu historia y tu proceso.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white rounded-full">
                  Quiero mi espacio personal
                </Button>
              </CardContent>
            </Card>

            {/* Encuentros grupales */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#c9baa4]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#3a362f]" />
                </div>
                <CardTitle className="text-2xl text-[#3a362f]">Encuentros grupales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#3a362f]/70 mb-6 leading-relaxed">
                  Porque no estás sola. Compartir con mujeres que sienten lo mismo te recuerda que juntas todo pesa menos.
                </p>
                <Link href="/eco">
                  <Button className="w-full bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white rounded-full">
                    Quiero sentirme acompañada
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Programas de transformación */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#94bae4]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#6b9cdd]" />
                </div>
                <CardTitle className="text-2xl text-[#3a362f]">Programas de transformación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#3a362f]/70 mb-6 leading-relaxed">
                  Procesos más completos para quienes quieren un antes y un después en su vida. Aprendes a priorizarte, a escucharte y a vivir con calma real.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white rounded-full">
                  Quiero transformar mi vida
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3a362f] mb-16">
            Mujeres que ya{" "}
            <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
              volvieron a sí mismas
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Llegué agotada, sin saber ni quién era. Hoy sé parar y tomar decisiones desde la calma.",
                name: "María G.",
                rating: 5
              },
              {
                text: "Pensaba que priorizarme era egoísta. Ahora entiendo que es amor propio.",
                name: "Ana L.",
                rating: 5
              },
              {
                text: "Encontré un espacio donde pude ser yo, sin explicaciones ni juicios.",
                name: "Carmen R.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-[#94bae4]/20 to-[#c9baa4]/10">
                <CardContent className="pt-8 pb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#3a362f] mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-[#3a362f]/70 font-medium">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#faf8f3] to-[#94bae4]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#94bae4]/30 to-[#c9baa4]/20 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#6b9cdd] to-[#94bae4] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#3a362f] mb-4">Tu acompañante</h3>
                  <p className="text-[#3a362f]/70">En el camino de vuelta a ti</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a362f] mb-8">
                Yo también{" "}
                <span className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent">
                  estuve ahí.
                </span>
              </h2>
              <p className="text-lg text-[#3a362f]/70 mb-6 leading-relaxed">
                Durante años cuidé más de los demás que de mí. Me perdí entre exigencias, responsabilidades y culpas. Y lo sé: no es fácil mirarse dentro, pero es aún más difícil seguir viviendo así.
              </p>
              <p className="text-lg text-[#3a362f]/70 mb-6 leading-relaxed">
                Por eso nació JdeAluja. Para acompañar a mujeres que sienten lo mismo que yo sentí: cansancio, desconexión y miedo de no poder más.
              </p>
              <p className="text-lg text-[#3a362f]/70 mb-8 leading-relaxed">
                Hoy sé que hay otra forma. No desde el sacrificio, sino desde el amor propio, la calma y la presencia.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] hover:from-[#5a8ac6] hover:to-[#7da5d1] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quiero saber más
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6b9cdd] to-[#94bae4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Sabes sostener a todo el mundo.
            <br />
            <span className="text-white/90">Ahora es momento de sostenerte a ti.</span>
          </h2>
          <Link href="/eco">
            <Button size="lg" className="bg-white text-[#6b9cdd] hover:bg-white/90 px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              Quiero volver a mí
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6b9cdd] to-[#94bae4] bg-clip-text text-transparent mb-4">
                JdeAluja
              </h3>
              <p className="text-[#3a362f]/80 leading-relaxed">
                Un espacio de reconexión para mujeres que buscan volver a sí mismas con calma, claridad y presencia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#que-es" className="text-[#c9baa4] hover:text-[#94bae4] transition-colors">Qué es</a></li>
                <li><a href="#servicios" className="text-[#c9baa4] hover:text-[#94bae4] transition-colors">Servicios</a></li>
                <li><a href="#sobre-mi" className="text-[#c9baa4] hover:text-[#94bae4] transition-colors">Sobre mí</a></li>
                <li><Link href="/eco" className="text-[#c9baa4] hover:text-[#94bae4] transition-colors">ECO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
              <p className="text-[#c9baa4] mb-2">¿Tienes preguntas?</p>
              <p className="text-[#c9baa4]">Escríbeme y te respondo personalmente.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-[#c9baa4]/60">
              © 2024 JdeAluja. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
