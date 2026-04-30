import { Button } from "@/components/ui/button";
import Link from "next/link";

const IMG = "/WEB_CARTA";
const HOME_IMG = "/WEB_GENERAL";
const WHATSAPP =
  "https://wa.me/34616868992?text=Hola%20Judith%2C%20quiero%20mi%20Carta%20Astral";

const benefits = [
  "Entender por qué te sientes como te sientes y dejar de culparte por ello.",
  "Reconocer qué partes de ti has estado escondiendo para encajar.",
  "Descubrir de dónde viene tu herida de rechazo y cómo empezar a sanarla.",
  "Reforzar tu valor personal y comprender por qué hoy no te sientes suficiente.",
  "Aprender a cuidarte según tu energía real, no copiando lo que hacen los demás.",
  "Tomar decisiones con más claridad y coherencia contigo.",
];

const isForYou = [
  "Sientes que hay algo dentro de ti que no terminas de entender.",
  "Te cuesta valorarte y no sabes muy bien por qué.",
  "Notas que cambias según con quién estés y eso te cansa.",
  "Te interesa el autoconocimiento, pero no sabes por dónde empezar.",
  "Llevas tiempo leyendo, buscando, probando cosas… y sigues sintiéndote un poco perdida.",
  "Quieres claridad sobre quién eres y qué te está bloqueando hoy.",
  "Sientes que necesitas volver a ti, pero no sabes cómo hacerlo.",
  "Quieres entender tus emociones en lugar de seguir reaccionando a ellas.",
  "Buscas respuestas reales, prácticas y profundas sobre ti.",
];

const includes = [
  {
    title: "Una sesión individual de 90 minutos por Zoom",
    text: "Un espacio solo para ti, donde vamos a recorrer tu carta astral con calma, profundidad y sentido práctico.",
  },
  {
    title: "Un test previo personalizado",
    text: "Antes de la sesión te envío un cuestionario para conocer tus inquietudes, tus bloqueos actuales y lo que necesitas trabajar ahora. La sesión se construye mezclando tu momento vital con tu carta natal.",
  },
  {
    title: "Un análisis profundo de tu personalidad, tu esencia y tus bloqueos",
    text: "No vemos la carta planeta por planeta de forma superficial. Traducimos tu carta a tu vida real: autoestima, relaciones, miedos, valor personal, máscara, herida de rechazo y dirección vital.",
  },
  {
    title: "Orientación práctica y aplicable a tu día a día",
    text: "Durante la sesión te doy claves, enfoques y formas concretas de empezar a cuidarte y alinearte con tu energía según quién eres.",
  },
  {
    title: "Un PDF personalizado con toda la información",
    text: "Recibes el documento completo con todo lo trabajado para que puedas volver a ello siempre que lo necesites.",
  },
  {
    title: "Acceso a la grabación de la sesión",
    text: "Para que puedas escucharla de nuevo con calma siempre que necesites y seguir integrando la información a tu ritmo.",
  },
  {
    title: "Acompañamiento los días posteriores",
    text: "Si al integrar la sesión te surgen dudas, puedes escribirme y te acompaño a resolverlas.",
  },
];

const pillars = [
  {
    title: "LA ESENCIA",
    text: "La carta natal como mapa de tu naturaleza real. Aquí vemos quién eres más allá de lo que has aprendido a ser para encajar, qué energía traes de base y cuál es tu autenticidad cuando no te estás adaptando a los demás.",
  },
  {
    title: "LA HERIDA",
    text: "Trabajamos directamente sobre la herida de rechazo, el valor personal, las máscaras que has creado y los patrones familiares o emocionales que hoy te siguen condicionando sin que te des cuenta. No miramos la carta para describirte. La miramos para entender qué te está bloqueando hoy.",
  },
  {
    title: "LA APLICACIÓN PRÁCTICA",
    text: "No nos quedamos en la teoría. Traducimos la información astrológica a tu vida real: cómo te relacionas, cómo te tratas, por qué te pasa lo que te pasa y qué puedes empezar a hacer desde ya para alinearte contigo, cuidarte mejor y ganar claridad en tu dirección vital.",
  },
];

const faqs = [
  {
    q: "¿Necesito saber astrología para hacer esta sesión?",
    a: "No, para nada. De hecho, la mayoría de personas que vienen no saben nada. Yo traduzco toda la información de tu carta a un lenguaje claro, práctico y aplicable a tu vida real.",
  },
  {
    q: "¿Y si solo siento curiosidad pero no tengo ningún problema concreto?",
    a: "Perfecto. La Brújula Natal es una forma preciosa de conocerte mejor, entender tu energía y descubrir aspectos de ti que seguramente ya sientes pero no sabes explicar.",
  },
  {
    q: "¿Y si ahora mismo estoy en un momento de bloqueo o de crisis?",
    a: "Entonces esta sesión es especialmente para ti. La carta astral ayuda muchísimo a entender qué te está pasando, por qué te sientes así y qué puedes hacer para empezar a ordenarlo.",
  },
  {
    q: "¿Es una sesión general o está adaptada a mí?",
    a: "Totalmente personalizada. Antes de la sesión recibirás un pequeño cuestionario para saber exactamente qué te preocupa, qué buscas y en qué necesitas claridad. Con eso preparo tu lectura adaptada 100% a ti.",
  },
  {
    q: "¿Qué pasa después de la sesión?",
    a: "Te llevas la grabación y un PDF con toda la información para que puedas volver a ella siempre que lo necesites. Además, durante los días posteriores puedes escribirme si te surge alguna duda.",
  },
  {
    q: "¿Esta sesión sustituye a una terapia?",
    a: "No. Pero es una herramienta de autoconocimiento muy profunda que te ayudará a entender muchos de tus bloqueos para luego poder seguir trabajándolos en terapia, con nuestra comunidad o por tu cuenta con mucha más claridad.",
  },
  {
    q: "¿Y si me da miedo lo que pueda salir?",
    a: "No miramos nada desde el juicio ni desde el drama. Miramos tu carta con comprensión, respeto y con el foco puesto en ayudarte a entenderte y cuidarte mejor.",
  },
  {
    q: "¿Cuánto dura la sesión?",
    a: "90 minutos online por Zoom. Queda grabada para que puedas volver a verla siempre que quieras.",
  },
  {
    q: "¿Cuánto tiempo tengo que esperar para notar cambios?",
    a: "Muchas personas salen de la sesión con una sensación inmediata de claridad, alivio y comprensión. Aunque con total honestidad: los cambios reales empiezan cuando aplicas lo que has comprendido sobre ti. Recuerda que esto es un proceso, todo sucede paso a paso.",
  },
  {
    q: "¿Puedo regalar esta sesión a alguien?",
    a: "Por supuesto. Puedes regalar una Brújula Natal a quien tú quieras. ¿Qué hay más bonito que regalar autoconocimiento a las personas que más quieres? :)",
  },
];

export default function CartaAstralPage() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3a362f] font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#faf8f3]/90 backdrop-blur border-b border-[#c9baa4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src={`${HOME_IMG}/LOGO%20JDA.png`}
              alt="JotadeAluja"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link href="/#empieza" className="hover:text-[#6b9cdd] transition-colors">
              QUIERO VOLVER A MÍ
            </Link>
            <Link href="/#judith" className="hover:text-[#6b9cdd] transition-colors">
              QUIÉN SOY
            </Link>
            <Link href="/#contacto" className="hover:text-[#6b9cdd] transition-colors">
              CONTACTA CONMIGO
            </Link>
          </div>
        </div>
      </nav>

      {/* BLOQUE 1 — Hero */}
      <section
        className="pt-16 bg-[#d6c6a8] relative"
        style={{
          backgroundImage: `url(${IMG}/hero-banner.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex flex-col items-center justify-end pb-16 text-center">
          <p className="font-serif text-2xl md:text-4xl text-white drop-shadow-md">
            Un mapa para <em className="italic">entenderte mejor</em>
          </p>
        </div>
      </section>

      {/* BLOQUE 2 — Brújula Natal intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-[#3a362f] mb-3">
            Brújula <em className="italic">Natal</em>
          </h1>
          <p className="text-[#3a362f]/70 italic mb-8">
            Un viaje de autoconocimiento a través de tu Carta Astral
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#94bae4] hover:bg-[#7da5d1] text-white rounded-none tracking-widest text-xs px-10 py-6 mb-8">
              QUIERO MI CARTA ASTRAL
            </Button>
          </a>
          <p className="text-[#3a362f]/85 leading-relaxed">
            Brújula Natal es una{" "}
            <strong>lectura personalizada de tu carta astral</strong> enfocada
            en tu autoconocimiento y la comprensión de tu energía para ayudarte
            a entender tus bloqueos, tu esencia y cómo vivir más alineada
            contigo.
          </p>
        </div>
      </section>

      {/* BLOQUE 3 — Astrología real, dark band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3a362f] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Astrología real, para{" "}
              <em className="italic">personas reales.</em>
            </h2>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                Brújula Natal es una lectura profunda y personalizada de tu
                Carta Astral que te acompaña a comprender{" "}
                <strong className="text-white">
                  quién eres, qué bloqueos estás viviendo hoy y cómo empezar a
                  cuidarte y vivir de una forma más coherente contigo.
                </strong>
              </p>
              <p>En la sesión trabajamos a través de:</p>
              <ul className="space-y-1 list-disc pl-5 text-white/80 text-sm">
                <li>tu esencia y tu forma natural de ser</li>
                <li>tus bloqueos actuales y de dónde vienen</li>
                <li>la herida de rechazo y las máscaras que has aprendido a usar</li>
                <li>tu valor personal y autoestima</li>
                <li>tus patrones emocionales y relacionales</li>
                <li>tu dirección de vida y cómo alinearte con ella</li>
                <li>herramientas prácticas adaptadas a tu energía</li>
              </ul>
              <p>
                No es un análisis técnico de planetas que no entiendes. No es
                una lectura general que podría servirle a cualquiera.
              </p>
              <p>
                Es un{" "}
                <strong className="text-white">
                  espacio íntimo, claro y profundo
                </strong>{" "}
                donde entiendes por primera vez muchas cosas de ti que siempre
                has sentido pero nunca habías sabido explicar.
              </p>
              <p className="italic">
                Está enfocado en el autoconocimiento real, en entender tu
                energía y en llevarte claridad práctica para tu día a día.
              </p>
            </div>
          </div>
          <div>
            <img
              src={`${IMG}/altar-journal.png`}
              alt=""
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 4 — Conocerte es esencial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede4d3]/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] mb-6 leading-tight">
            Conocerte es <em className="italic">esencial</em> para vivir una
            vida plena, satisfactoria y en calma
          </h2>
          <p className="text-[#3a362f]/85 leading-relaxed max-w-3xl mx-auto mb-4">
            Hacer tu Carta Astral no cambia tu vida de golpe, pero{" "}
            <strong>
              transforma la forma en la que te relacionas con lo que te sucede.
            </strong>
          </p>
          <p className="text-[#3a362f]/85 leading-relaxed max-w-3xl mx-auto mb-12">
            Cuando entiendes tu energía, tus bloqueos dejan de ser un misterio.
            Cuando entiendes tu esencia, dejas de luchar contra ti. Cuando
            entiendes tus patrones, puedes empezar a transformarlos.
          </p>

          <p className="font-medium text-[#3a362f] mb-6">
            Solo necesitas una sesión para:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 text-left">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-[#94bae4]/30 border border-[#94bae4]/40 p-5 text-[#3a362f]/85 leading-relaxed text-sm rounded-sm"
              >
                {b}
              </div>
            ))}
          </div>

          <p className="text-[#3a362f]/85 leading-relaxed max-w-3xl mx-auto mb-8">
            Todo esto para vivir con más{" "}
            <strong>tranquilidad, aceptación y dirección interna.</strong>
          </p>

          <div className="max-w-3xl mx-auto space-y-4 text-[#3a362f]/85 leading-relaxed">
            <p>
              Con tu Carta Natal no buscamos predecir tu futuro ni decirte cómo
              tienes que ser. <strong>Buscamos que entiendas quién ya eres.</strong>
            </p>
            <p className="italic text-[#3a362f]/70">
              No necesitas saber de Astrología.
              <br />
              No necesitas estar en tu mejor momento.
              <br />
              No necesitas tenerlo todo claro.
              <br />
              Ni siquiera necesitas saber qué te pasa exactamente.
            </p>
            <p>
              <strong>
                Brújula Natal no es una sesión para cuando ya estás bien.
              </strong>
              <br />
              Es una sesión para cuando necesitas entenderte y así, empezar a
              estarlo.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 5 — ¿Es para todo el mundo? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#94bae4] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              ¿Esta sesión es para todo el mundo?
            </h2>
            <p className="mb-2 text-white/90">Para todo el mundo, no.</p>
            <p className="mb-6 text-white/90">Para ti sí, si:</p>
            <ul className="space-y-2 text-white/90 leading-relaxed pl-5 list-disc">
              {isForYou.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-6 text-white/90 leading-relaxed">
              <strong className="text-white">No es para ti</strong> si buscas
              algo superficial, rápido o curioso sin intención de mirarte de
              verdad. Porque esta sesión no va de escuchar cosas bonitas. Va de
              entenderte con honestidad para poder empezar a cambiar la forma
              en la que te relacionas contigo.
            </p>
            <p className="mt-6 italic text-white">
              Brújula Natal no es una lectura para entretenerte. Es una sesión
              para empezar a comprenderte de verdad.
            </p>
          </div>
          <div>
            <img
              src={`${IMG}/woman-window.png`}
              alt=""
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 6 — Por qué acompañada vs internet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#94bae4] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Por qué hacer tu carta natal{" "}
              <em className="italic">acompañada</em> en vez de mirarla en
              internet
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>Quizás te hayas planteado esto.</p>
              <p>
                Hoy en día puedes poner tu fecha de nacimiento en una web y que
                te salga tu carta astral en segundos.
              </p>
              <p>
                ¿Rápido? Sí.
                <br />
                ¿Útil? Muy poco.
              </p>
              <p>
                Esas páginas te dicen dónde están tus planetas. Yo te ayudo a
                entender qué significa eso en tu vida real.
              </p>
              <p>
                <strong className="text-white">
                  Leer tu carta sola es como tener un mapa sin saber
                  interpretarlo.
                </strong>
              </p>
              <p>
                Brújula Natal es el acompañamiento para que ese mapa cobre
                sentido. No solo conocerás el camino, sino que aprenderás la
                mejor forma de caminarlo.
              </p>
              <p>
                Aquí no vas a escuchar explicaciones sueltas, técnicas o
                genéricas.
              </p>
              <p>Vamos a traducir tu carta a tu vida:</p>
              <ul className="space-y-1 list-disc pl-5 text-white/85 text-sm">
                <li>a tus bloqueos actuales</li>
                <li>a tu forma de relacionarte</li>
                <li>a tus miedos</li>
                <li>a tu valor personal</li>
                <li>a la parte de ti que escondes sin darte cuenta</li>
              </ul>
              <p>
                <strong className="text-white">
                  No es solo conocer tu energía. Es comprenderte a través de
                  ella.
                </strong>
              </p>
              <p className="italic">
                Brújula Natal no busca ser rápida ni superficial como una
                lectura automática. Busca ser útil de verdad, para que entiendas
                quién eres y puedas empezar a vivir con más coherencia contigo.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src={`${IMG}/hands-writing.png`}
              alt=""
              className="w-full h-auto rounded-sm"
            />
            <div className="text-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-[#3a362f] rounded-none tracking-widest text-xs px-10 py-6">
                  QUIERO MI CARTA ASTRAL
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 — Qué incluye */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] text-center mb-10 leading-tight">
            Qué incluye la <em className="italic">sesión:</em>
          </h2>
          <div className="space-y-3">
            {includes.map((item) => (
              <div
                key={item.title}
                className="bg-[#ede4d3] p-6 rounded-sm"
              >
                <h3 className="font-serif text-lg md:text-xl text-[#3a362f] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#3a362f]/80 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-[#3a362f] italic">
              Brújula Natal no es solo una sesión. Es un mapa claro de quién
              eres y cómo empezar a vivir más coherente contigo.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 8 — 3 pilares */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[#3a362f] mb-12 leading-tight text-center">
            Un enfoque de lectura único, basado en 3 pilares:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#ede4d3]/60 border border-[#c9baa4]/40 p-8 rounded-sm"
              >
                <h3 className="tracking-widest text-sm text-[#3a362f] mb-4">
                  {p.title}
                </h3>
                <p className="text-[#3a362f]/85 leading-relaxed text-sm">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[#3a362f] italic max-w-3xl mx-auto">
            Desde el primer momento entiendes qué estamos viendo, por qué lo
            vemos y para qué te sirve.
          </p>
        </div>
      </section>

      {/* BLOQUE 9 — Hola Judith — dark */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3a362f] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={`${IMG}/judith.png`}
              alt="Judith"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3">
              Hola, me llamo Judith
            </h2>
            <p className="italic text-white/70 mb-6">
              y soy tu <em>amiga hierbas de confianza</em> :)
            </p>
            <div className="space-y-4 text-white/85 leading-relaxed text-sm">
              <p>
                Soy educadora social, astróloga y terapeuta holística, y desde
                hace años acompaño a mujeres en su proceso de volver a sí
                mismas, entenderse mejor y vivir con más coherencia con quienes
                son en realidad.
              </p>
              <p>
                La astrología en general, y la carta astral en concreto,
                aparecieron en mi camino como una{" "}
                <strong className="text-white">
                  herramienta de autoconocimiento
                </strong>{" "}
                brutalmente clara y reveladora.
              </p>
              <p>
                No como algo místico o abstracto, sino como un mapa muy
                práctico que explica por qué te pasa lo que te pasa, por qué
                repites ciertos patrones, por qué te cuesta valorarte, poner
                límites, mostrarte tal como eres o sentirte suficiente.
              </p>
              <p>
                Empecé a utilizarla en mis acompañamientos porque vi algo muy
                claro:{" "}
                <strong className="text-white">
                  cuando una persona entiende su energía, deja de luchar contra
                  ella.
                </strong>
              </p>
              <p className="italic">Y ahí empieza el cambio real.</p>
              <p>
                Brújula Natal nace de esa necesidad: ofrecer un acompañamiento
                profundo, práctico y personalizado que no se queda en la
                superficie, sino que baja directamente a tu vida real, a tus
                bloqueos actuales y a lo que hoy necesitas comprender de ti
                para empezar a vivir con más calma, claridad y coherencia.
              </p>
              <p>
                Sé lo difícil que es intentar conocerte a través de libros,
                podcasts o herramientas sueltas que no terminan de encajar
                entre sí. Sé lo frustrante que es sentir que algo te bloquea,
                pero no saber exactamente qué es ni por dónde empezar a
                trabajarlo. Y sé lo liberador que es, cuando alguien te ayuda a
                entender con claridad quién eres, qué te pasa y qué puedes
                hacer con eso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 10 — Pricing */}
      <section id="reserva" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] mb-12 leading-tight">
            Tu <em className="italic">intuición</em> te está hablando. Solo
            falta que la escuches.
          </h2>
          <div className="bg-[#ede4d3]/60 border border-[#c9baa4]/40 p-10 rounded-sm max-w-md mx-auto">
            <p className="tracking-widest text-sm text-[#3a362f]/70 mb-3">
              SESIÓN
            </p>
            <p className="font-serif text-5xl text-[#3a362f] mb-6">120€</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs py-6 mb-4">
                QUIERO MI CARTA ASTRAL
              </Button>
            </a>
            <p className="text-[#3a362f]/85 text-sm leading-relaxed">
              Un único encuentro que puede darte claridad para muchos años.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 11 — Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#94bae4]">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            ¿Lista para entenderte con claridad, profundidad y honestidad?
          </h2>
          <p className="mt-6 tracking-widest text-sm text-white/90">
            MEJOR QUE TE LO CUENTEN ELLXS:
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <img
            src={`${HOME_IMG}/testimonios.png`}
            alt="Testimonios"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* BLOQUE 12 — FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3a362f] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight text-center">
            Por si todavía tienes <em className="italic">dudas…</em>
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="border border-white/15 bg-[#5a4a3a]/30 rounded-sm p-5 group"
              >
                <summary className="cursor-pointer font-medium text-white list-none flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-white/60 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-white/80 leading-relaxed text-sm">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 13 — La astrología ha acompañado */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede4d3]/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-[#3a362f]/85 leading-relaxed text-sm">
            <p>
              La astrología ha acompañado al ser humano desde el inicio de los
              tiempos. Antes de que existieran los relojes, los calendarios o
              los mapas, las personas ya miraban al cielo para orientarse, para
              comprender los ciclos de la vida y para encontrar sentido a lo
              que vivían.
            </p>
            <p>
              Reyes, navegantes, científicos, filósofos y sabios se guiaban por
              las estrellas no como algo místico, sino como una forma profunda
              de entender la energía, los ritmos naturales y la relación entre
              el cielo y la vida en la Tierra.
            </p>
            <p>
              <strong>
                La Carta Astral nace de ahí: de esa necesidad humana de
                comprenderse, de ubicarse y de recordar quién somos.
              </strong>
            </p>
            <p>
              Durante siglos, la astrología fue una herramienta de conocimiento,
              de orientación y de sabiduría práctica. Una forma de leer el
              momento vital de una persona y acompañarla a vivir con mayor
              coherencia.
            </p>
            <p>
              Tu carta natal es tu mapa personal: una fotografía del cielo en
              el momento exacto en el que naciste que habla de tu energía, tus
              necesidades, tus dones, tus bloqueos y tu forma única de habitar
              el mundo.
            </p>
            <p>
              No importa en el punto vital en el que te encuentres, tu Carta
              Astral siempre está ahí como una brújula a la que puedes volver
              para recordarte quién eres de verdad.
            </p>
            <p>
              Esta es la verdadera fuerza de la astrología: no adivinar el
              futuro, sino ayudarte a comprender tu presente con más claridad,
              más conciencia y más respeto hacia ti misma.
            </p>
            <p className="italic">
              Porque cuando entiendes tu energía, empiezas a vivir de una forma
              mucho más alineada, mucho más amable y mucho más auténtica.
            </p>
          </div>
          <div>
            <img
              src={`${IMG}/starry-sky.png`}
              alt=""
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] leading-tight mb-4">
            ¿Tú también sientes que ha llegado el momento de{" "}
            <em className="italic">volver a ti?</em>
          </h2>
          <p className="text-[#3a362f]/70 mb-8">
            Tu Brújula Natal te está esperando.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#94bae4] hover:bg-[#7da5d1] text-white rounded-none tracking-widest text-xs px-10 py-6">
              QUIERO MI CARTA ASTRAL
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a362f] text-white/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <p className="font-serif text-xl text-white">JotadeAluja</p>
          <p>
            <a
              href={WHATSAPP}
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
