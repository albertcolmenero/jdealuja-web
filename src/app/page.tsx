import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Sparkles, Users, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                JotadeAluja
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#que-es" className="text-slate-600 hover:text-purple-600 transition-colors">Qué es</a>
              <a href="#servicios" className="text-slate-600 hover:text-purple-600 transition-colors">Servicios</a>
              <a href="#sobre-mi" className="text-slate-600 hover:text-purple-600 transition-colors">Sobre mí</a>
              <Link href="/eco" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Unirse a ECO
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Reconexión femenina
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Estás para todo el mundo, pero…{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¿cuándo fue la última vez que estuviste para ti?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Si llevas demasiado tiempo en piloto automático, cuidando a los demás y olvidándote de ti, este es tu lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/eco">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Empieza hoy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2 border-slate-300 hover:border-purple-300 transition-all duration-300">
              Descubre más
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es JotadeAluja */}
      <section id="que-es" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                No es que no sepas qué quieres.{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Es que hace tiempo que no te escuchas.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                JotadeAluja es un espacio de reconexión para mujeres que han estado demasiado tiempo sosteniendo a todos, menos a ellas mismas.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Aquí no hay promesas mágicas ni espiritualidad vacía. Lo que encontrarás son herramientas prácticas y profundas que te ayudarán a volver a ti:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Escucharte sin miedo.",
                  "Priorizarte sin culpa.",
                  "Sostenerte en tu día a día con más calma y claridad."
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Porque no vienes a &ldquo;arreglarte&rdquo;. Vienes a recordar quién eres y volver a vivir en presencia.
          </p>
              <Link href="/eco">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Descubre cómo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 text-purple-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Reconexión auténtica</h3>
                  <p className="text-slate-600">Un espacio seguro para volver a ti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que duele / Lo que deseas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Lo que ahora vives.{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lo que en verdad deseas.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lo que duele */}
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-800 text-2xl">Lo que duele</CardTitle>
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
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-red-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Lo que deseas */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-800 text-2xl">Lo que deseas</CardTitle>
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
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-green-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/eco">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Sí, esto es para mí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo lo hacemos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              No necesitas más exigencia.{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Necesitas más presencia.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              En JotadeAluja trabajamos desde una espiritualidad práctica y con los pies en la tierra. No se trata de cambiar quién eres, sino de volver a ti.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🧘", title: "El cuerpo", desc: "Para escucharlo y entender qué te pide." },
              { icon: "🧠", title: "La mente", desc: "Para dejar de vivir atrapada en pensamientos que te desgastan." },
              { icon: "💝", title: "La emoción", desc: "Para sentir y liberar sin miedo." },
              { icon: "✨", title: "La energía", desc: "Para sostenerte desde dentro." }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-slate-700 font-medium">
              Aquí vienes a parar, a escucharte y a volver a tu verdad.
            </p>
          </div>
        </div>
      </section>

      {/* Programas / Servicios */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Tu bienestar{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                no se negocia.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Te acompaño en diferentes formatos, para que elijas el que más se adapta a tu momento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sesiones individuales */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Sesiones individuales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Un espacio íntimo, seguro y sin juicios. Aquí eres tú, con tus preguntas, tu historia y tu proceso.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                  Quiero mi espacio personal
                </Button>
              </CardContent>
            </Card>

            {/* Encuentros grupales */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Encuentros grupales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Porque no estás sola. Compartir con mujeres que sienten lo mismo te recuerda que juntas todo pesa menos.
                </p>
                <Link href="/eco">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                    Quiero sentirme acompañada
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Programas de transformación */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Programas de transformación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Procesos más completos para quienes quieren un antes y un después en su vida. Aprendes a priorizarte, a escucharte y a vivir con calma real.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Mujeres que ya{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
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

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tu acompañante</h3>
                  <p className="text-slate-600">En el camino de vuelta a ti</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Yo también{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  estuve ahí.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Durante años cuidé más de los demás que de mí. Me perdí entre exigencias, responsabilidades y culpas. Y lo sé: no es fácil mirarse dentro, pero es aún más difícil seguir viviendo así.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Por eso nació JotadeAluja. Para acompañar a mujeres que sienten lo mismo que yo sentí: cansancio, desconexión y miedo de no poder más.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hoy sé que hay otra forma. No desde el sacrificio, sino desde el amor propio, la calma y la presencia.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quiero saber más
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Sabes sostener a todo el mundo.
            <br />
            <span className="text-purple-100">Ahora es momento de sostenerte a ti.</span>
          </h2>
          <Link href="/eco">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                JotadeAluja
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Un espacio de reconexión para mujeres que buscan volver a sí mismas con calma, claridad y presencia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#que-es" className="text-slate-300 hover:text-white transition-colors">Qué es</a></li>
                <li><a href="#servicios" className="text-slate-300 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#sobre-mi" className="text-slate-300 hover:text-white transition-colors">Sobre mí</a></li>
                <li><Link href="/eco" className="text-slate-300 hover:text-white transition-colors">ECO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-slate-300 mb-2">¿Tienes preguntas?</p>
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
