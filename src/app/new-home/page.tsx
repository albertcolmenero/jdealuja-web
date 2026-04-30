import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { Camera } from "lucide-react";
import Link from "next/link";

const IMG = "/WEB_GENERAL";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3a362f] font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#faf8f3]/90 backdrop-blur border-b border-[#c9baa4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img
              src={`${IMG}/LOGO%20JDA.png`}
              alt="JotadeAluja"
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-[#3a362f]">
            <a href="#empieza" className="hover:text-[#6b9cdd] transition-colors">
              QUIERO VOLVER A MÍ
            </a>
            <a href="#judith" className="hover:text-[#6b9cdd] transition-colors">
              QUIÉN SOY
            </a>
            <a href="#contacto" className="hover:text-[#6b9cdd] transition-colors">
              CONTACTA CONMIGO
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — BLOQUE 1 */}
      <section
        id="top"
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[#94bae4] relative overflow-hidden"
        style={{
          backgroundImage: `url(${IMG}/Fondo%201.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <img
            src={`${IMG}/CABEZALOGO.png`}
            alt=""
            className="h-48 md:h-64 w-auto mx-auto mb-8 drop-shadow-sm"
          />
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-4xl mx-auto">
            Bienvenida a tu espacio de autoconocimiento y{" "}
            <em className="italic">espiritualidad entre amigas.</em>
          </h1>
        </div>
      </section>

      {/* BLOQUE 2 — Aquí empiezas a mirar hacia dentro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={`${IMG}/Foto1.png`}
              alt="Judith"
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="font-serif text-2xl md:text-3xl text-white drop-shadow-md leading-tight">
                Aquí empiezas a <em className="italic">mirar hacia dentro</em>
              </h2>
            </div>
          </div>
          <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
            <p>
              Este es un espacio creado para mujeres que llevan tanto tiempo
              ocupándose de todo, que sin darse cuenta han dejado de escucharse a
              ellas. Mujeres que funcionan, que cumplen, que llegan a todo… Pero
              que muchas veces sienten que por dentro están cansadas,
              desconectadas y un poco perdidas de ellas mismas.
            </p>
            <p>
              Aquí no vienes a convertirte en otra persona.{" "}
              <strong>
                Vienes a volver a la que eras antes de empezar a ponerte máscaras
                para encajar.
              </strong>
              <br />A la que sentía más.
              <br />A la que se escuchaba más.
              <br />A la que no se juzgaba tanto.
            </p>
            <p>
              No hablamos de espiritualidad como algo raro, lejano o místico.
              Hablamos de cosas muy sencillas: de aprender a escucharte, de darte
              tiempo sin culpa, de entender qué te sucede y porqué y empezar a
              tratarte de una forma más amable en tu día a día.
            </p>
            <p className="font-medium text-[#3a362f]">
              La verdadera revolución no es hacer más. Es aprender a estar
              contigo.
            </p>
            <p className="italic">
              Aunque sea unos minutos. En medio de tu rutina. En tu casa. Con tu
              vida tal y como es.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 — Carl Jung quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede4d3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-4xl text-[#3a362f] leading-tight">
            “El privilegio de una vida es convertirse en quien realmente eres.”
          </p>
          <p className="mt-6 tracking-widest text-sm text-[#3a362f]/70">
            CARL JUNG
          </p>
        </div>
      </section>

      {/* BLOQUE 4a — La importancia real de volver a ti */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={`${IMG}/MARIPOSA+DECOR..png`}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3a362f] mb-6 leading-tight">
              La importancia real de{" "}
              <em className="italic">volver a ti</em>
            </h2>
            <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
              <p>
                Cuando empiezas a escucharte y mirar hacia dentro, tu vida entera
                cambia. El problema es que nuestras vidas cotidianas no están
                pensadas para eso.
              </p>
              <p>
                Están pensadas para correr, cumplir, producir… Para llegar a
                todo y estar pendientes de todos.
              </p>
              <p>
                Y en medio de ese ritmo, lo primero que desaparece{" "}
                <strong>eres tú</strong>: tu tiempo, tu energía, tu calma, tu
                claridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4b — Este espacio nace */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#3a362f] mb-6 leading-tight">
              Este espacio nace para ayudarte a recuperar tu{" "}
              <em className="italic">bienestar</em>
            </h2>
            <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
              <p>
                No desde teorías complicadas ni desde discursos bonitos. Sino
                desde herramientas muy prácticas que puedas usar en tu día a día,
                con la vida que ya tienes.
              </p>
              <p>Porque cuando tú estás bien contigo, todo lo demás se recoloca.</p>
              <p>
                Tu forma de hablarte.
                <br />
                Tu forma de relacionarte.
                <br />
                Tu forma de decidir.
                <br />
                Tu forma de vivir.
              </p>
              <p className="italic">
                Y eso, aunque parezca pequeño, es profundamente transformador.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={`${IMG}/INCIENSO.png`}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center md:justify-start">
            <img
              src={`${IMG}/MINERALES.png`}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-[#3a362f] leading-tight text-center md:text-left">
            Aquí empieza el viaje de{" "}
            <em className="italic">vuelta a ti</em>
          </h3>
        </div>
      </section>

      {/* BLOQUE 5 — 3 offerings */}
      <section id="empieza" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3a362f] mb-3">
              Empieza por donde más{" "}
              <em className="italic">necesites ahora…</em>
            </h2>
            <p className="text-[#3a362f]/70 max-w-3xl mx-auto">
              No tienes que hacerlo todo, ni saber por dónde empezar, solo tienes
              que elegir el primer paso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Carta Astral */}
            <div className="bg-[#ede4d3]/60 rounded-md p-8 flex flex-col text-center">
              <div className="mb-4">
                <p className="font-serif text-2xl text-[#3a362f]">Carta Astral</p>
              </div>
              <p className="tracking-widest text-xs text-[#3a362f]/70 mb-4">
                UN MAPA PARA ENTENDERTE MEJOR
              </p>
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={`${IMG}/CARTA%20ASTRAL.png`}
                  alt="Carta Astral"
                  className="h-40 w-auto object-contain"
                />
              </div>
              <p className="text-[#3a362f]/80 text-sm mb-6">
                Una sesión profunda de autoconocimiento a través de la
                astrología terapéutica.
              </p>
              <Link href="/carta-astral" className="mt-auto">
                <Button className="w-full bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs py-6">
                  QUIERO MI CARTA ASTRAL
                </Button>
              </Link>
            </div>

            {/* ECO — featured */}
            <div className="bg-[#94bae4] rounded-md p-8 flex flex-col text-center text-white">
              <div className="mb-4">
                <p className="font-serif text-2xl">ECO</p>
              </div>
              <p className="tracking-widest text-xs text-white/90 mb-4">
                ACOMPAÑAMIENTO COTIDIANO
              </p>
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={`${IMG}/ECO.png`}
                  alt="ECO"
                  className="h-40 w-auto object-contain"
                />
              </div>
              <p className="text-white/90 text-sm mb-6">
                Tu espacio mensual de autocuidado, autoconocimiento y
                espiritualidad práctica.
              </p>
              <Link href="/eco" className="mt-auto">
                <Button className="w-full bg-white hover:bg-white/90 text-[#3a362f] rounded-none tracking-widest text-xs py-6">
                  QUIERO ENTRAR A ECO
                </Button>
              </Link>
            </div>

            {/* Talleres y Retiros */}
            <div className="bg-[#ede4d3]/60 rounded-md p-8 flex flex-col text-center">
              <div className="mb-4">
                <p className="font-serif text-2xl text-[#3a362f]">
                  Talleres y retiros
                </p>
              </div>
              <p className="tracking-widest text-xs text-[#3a362f]/70 mb-4">
                ENCUENTROS PRESENCIALES
              </p>
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={`${IMG}/RETIROS%20Y%20TALLERES.png`}
                  alt="Talleres y retiros"
                  className="h-40 w-auto object-contain"
                />
              </div>
              <p className="text-[#3a362f]/80 text-sm mb-6">
                Espacios en tribu donde parar, compartir y volver a ti
                acompañada de otras mujeres que vibran como tú.
              </p>
              <div className="mt-auto">
                <WaitlistDialog
                  title="Lista de espera — Talleres y Retiros"
                  description="Déjame tus datos y te avisaré en cuanto haya un nuevo taller o retiro presencial."
                  trigger={
                    <Button className="w-full bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs py-6">
                      QUIERO SABER MÁS
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 6a — Me imagino que */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:sticky md:top-24">
            <img
              src={`${IMG}/BOLA%20CRISTAL%20Y%20MANO.png`}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              <em className="italic">Me imagino que…</em>
              <span className="text-[#3a362f]/70 text-base font-sans not-italic ml-2 align-middle">
                Has llegado hasta aquí porque sientes que algo no encaja.
              </span>
            </h2>
            <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
              <p>
                Porque haces tu vida, cumples con todo, respondes a todo… pero
                por dentro estás cansada de sostener una versión de ti que no
                sabes muy bien de dónde ha salido.{" "}
                <strong>
                  Lo tienes todo, pero no terminas de sentirte satisfecha…
                </strong>
              </p>
              <p>Te dices cosas como:</p>
              <ul className="space-y-2 italic text-[#3a362f]/80 pl-4 border-l-2 border-[#c9baa4]">
                <li>“No sé qué me pasa, pero no estoy bien.”</li>
                <li>“Necesito parar… pero no sé cómo.”</li>
                <li>“Siento que me he perdido.”</li>
                <li>
                  “Siempre estoy para todo el mundo menos para mí.”
                </li>
                <li>
                  “Vivo con prisa, con ruido, con la cabeza a mil.”
                </li>
                <li>“Sé que hay algo más para mí… pero no sé qué es.”</li>
              </ul>
              <p>
                De cara a la galería todo parece que va bien. Pero llegas a casa
                y cuando estás a solas contigo, muchas veces te sientes
                irritable, cansada, desconectada.
              </p>
              <p>Te cuesta dormir. Te cuesta parar. Te cuesta escucharte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 6b — Te has acostumbrado */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
            <p>
              Te has acostumbrado tanto a funcionar, que ya no sabes cómo{" "}
              <strong>sentirte.</strong>
            </p>
            <p>
              Y en medio de todo eso, aparece una pregunta muy bajita que cada
              vez suena más fuerte:
            </p>
            <p className="font-serif italic text-2xl text-[#3a362f]">
              ¿En qué momento me olvidé de mí?
            </p>
            <p>
              No has llegado hasta aquí porque quieras hacer “más cosas”. Has
              llegado porque, en el fondo, lo que quieres es{" "}
              <strong>volver a ti.</strong>
            </p>
            <p>
              Volver a entenderte.
              <br />
              Volver a escucharte.
              <br />
              Volver a sentir calma sin tener que escaparte del mundo.
            </p>
            <p>
              Porque intuyes que vivir no debería sentirse así de pesado. Y que{" "}
              <strong>cuidarte no debería ser un lujo, sino la base.</strong>
            </p>
            <p>
              Y aunque no sepas exactamente por dónde empezar, sabes algo con
              muchísima claridad:
            </p>
            <p className="font-medium text-[#3a362f]">
              no quieres seguir viviendo desconectada de ti misma.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src={`${IMG}/MUJER%20LATERAL.png`}
              alt=""
              className="w-full max-w-md h-auto"
            />
            <a href="#empieza">
              <Button className="bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs px-10 py-6">
                EMPIEZA AQUÍ
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 — Hola, me llamo Judith */}
      <section id="judith" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src={`${IMG}/Foto2.png`}
              alt="Judith"
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-6 left-6">
              <p className="font-serif italic text-2xl md:text-3xl text-white drop-shadow-md">
                Hola, me llamo Judith
              </p>
            </div>
          </div>
          <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
            <p className="font-serif text-xl text-[#3a362f]">
              y soy la <em className="italic">amiga hierbas</em> allí donde voy.
            </p>
            <p>
              De pequeña ya cuestionaba todo, no me valían las normas porque sí y
              siempre me removía profundamente el dolor y las injusticias del
              mundo. Ese espíritu crítico y social fue el que me llevó a estudiar
              Educación Social, porque quería cambiar el mundo y acompañar y
              ayudar a las personas a vivir vidas más dignas y más conscientes.
            </p>
            <p>
              Con los años entendí que muchas de esas injusticias también viven
              dentro de nosotras: en forma de miedo, de desconexión, de
              olvidarnos de quiénes somos para poder encajar.
            </p>
            <p>
              Hoy me dedico a acompañar a mujeres a volver a sí mismas a través
              del autoconocimiento, la astrología y espacios de comunidad donde
              pueden dejar de mimetizarse y empezar a ser.
            </p>
            <p>
              La vida tiene una forma preciosa de llevarte exactamente al lugar
              donde puedes ayudar más. Y por eso hoy doy vida a este proyecto.
            </p>
            <p>Podría contarte mucho más sobre mí, pero aquí lo importante eres tú.</p>
            <p className="italic">
              Aunque si quieres más chisme sobre esta chica tan maja que te has
              encontrado en internet, hazte un café y ponte cómoda.
            </p>
            <a href="#contacto" className="inline-block pt-2">
              <Button className="bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs px-10 py-6">
                CUÉNTAME MÁS
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 8 intro — Hablar de autoconocimiento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] border-t border-[#c9baa4]/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="font-serif text-2xl md:text-3xl text-[#3a362f] leading-tight">
            Hablar de autoconocimiento puede hacerlo cualquiera:{" "}
            <span className="text-[#3a362f]/70 text-xl md:text-2xl italic">
              basta con repetir frases bonitas, charlar de espiritualidad y
              recomendarte que “te quieras más”.
            </span>
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#3a362f] leading-tight">
            Sostener a una mujer mientras se reencuentra con quien es de verdad,{" "}
            <span className="text-[#3a362f]/70 text-xl md:text-2xl italic">
              eso es otra cosa. Y eso, es lo que yo hago.
            </span>
          </p>
        </div>
      </section>

      {/* BLOQUE 8 — Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto">
          <img
            src={`${IMG}/testimonios.png`}
            alt="Testimonios de mujeres en JotadeAluja"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* BLOQUE 8 — Crear un espacio + Fotos sesiones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-serif text-2xl md:text-3xl text-[#3a362f] leading-tight">
            Crear un espacio donde no te sientas rara por ser profunda, sensible
            o diferente y donde el <em className="italic">autocuidado</em> deje
            de ser algo que haces sola para convertirse en algo que vives en{" "}
            <em className="italic">tribu</em>.
          </p>
          <p className="text-[#3a362f]/70 italic">
            Eso es lo que sucede en este universo por el que ya han pasado
            muchas mujeres.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <img
            src={`${IMG}/Fotos%20final.png`}
            alt="Sesiones y círculos de mujeres"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* EMPIEZA HOY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] text-center">
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-[#3a362f] mb-8">
          EMPIEZA HOY
        </h2>
        <a href="#empieza">
          <Button className="bg-[#94bae4] hover:bg-[#7da5d1] text-white rounded-none tracking-widest text-xs px-10 py-6">
            QUIERO EMPEZAR
          </Button>
        </a>
      </section>

      {/* BLOQUE 9 — Aristóteles quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#94bae4]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-serif italic text-2xl md:text-4xl text-white leading-tight">
              “Conocerse a sí mismo es el principio de toda sabiduría.”
            </p>
            <p className="mt-4 tracking-widest text-sm text-white/80">
              ARISTÓTELES
            </p>
          </div>
          <img
            src={`${IMG}/CABEZALOGO.png`}
            alt=""
            className="h-32 w-auto justify-self-end"
          />
        </div>
      </section>

      {/* BLOQUE 9 — Photo grid + IG */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
            {[
              `${IMG}/8.png`,
              `${IMG}/9.png`,
              `${IMG}/10.png`,
              `${IMG}/11.png`,
            ].map((src) => (
              <div key={src} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <a
            href="https://instagram.com/jotadealuja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-[#3a362f] hover:text-[#6b9cdd] transition-colors"
          >
            <Camera className="w-7 h-7" />
            <span className="font-serif text-2xl md:text-3xl">@jotadealuja</span>
          </a>
        </div>
      </section>

      {/* Footer / contacto */}
      <footer
        id="contacto"
        className="bg-[#3a362f] text-white/80 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <p className="font-serif text-xl text-white">JotadeAluja</p>
          <p>
            <a
              href="https://wa.me/34616868992?text=Hola%20Judith%2C%20quiero%20saber%20m%C3%A1s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Escríbeme por WhatsApp
            </a>
          </p>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} JotadeAluja. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
