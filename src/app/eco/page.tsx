import { Button } from "@/components/ui/button";
import Link from "next/link";

const IMG = "/WEB_ECO";
const HOME_IMG = "/WEB_GENERAL";
const WHATSAPP =
  "https://wa.me/34616868992?text=Hola%20Judith%2C%20quiero%20entrar%20a%20ECO";

const benefits = [
  "Recuperas energía en lugar de llegar al final del día vacía y te permites descansar sin sentir que lo tienes que justificar.",
  "Dejas de reaccionar con tanta prisa, enfado o culpa y empiezas a escucharte antes de explotar.",
  "Te das cuenta antes de que estás saturada y puedes parar a tiempo.",
  "Te hablas mejor cuando cometes un error.",
  "Empiezas a decir “no” sin sentir que estás fallando a todo el mundo y dejas de dejarte siempre para el final.",
  "Tomas decisiones más coherentes con lo que sientes y vuelves a sentir que tienes un espacio siempre para ti.",
];

const ecoIsForYou = [
  "Te estás dejando siempre para el final y no sabes cómo empezar a priorizarte.",
  "Sabes que el autocuidado te haría bien, pero no consigues sostenerlo en el tiempo.",
  "Te interesa el autoconocimiento y la espiritualidad, pero necesitas bajarlo a tierra.",
  "Quieres herramientas prácticas que puedas aplicar en tu vida real, no teoría bonita.",
  "Necesitas un espacio semanal que sea solo para ti.",
  "Buscas profundidad sin dogmas, sin postureo y sin misticismos vacíos.",
  "Valoras sentirte acompañada por otras mujeres que están en un momento parecido al tuyo.",
  "Sientes que necesitas volver a ti, pero sola te cuesta muchísimo hacerlo.",
];

const includes = [
  {
    title: "Biblioteca de herramientas a la que siempre puedes volver",
    text: "No importa si entras ahora o dentro de seis meses: encontrarás todo el contenido disponible para ti — microejercicios diarios, rituales lunares, píldoras de contenido… todo accesible cuando lo necesites, para practicar a tu ritmo y volver cuando quieras.",
  },
  {
    title: "Masterclass todos los meses",
    text: "Cada mes tienes una clase de 1h30 donde profundizamos en la herramienta práctica del mes. No es teoría suelta: es contenido aplicado, vivencial y pensado para tu vida diaria. Aquí aprendes, experimentas y te llevas herramientas concretas para implementar.",
  },
  {
    title: "Sesión tipo café entre amigas",
    text: "Encuentros todos los meses para compartir, preguntar, intercambiar experiencias y sentir que no estás sola en este camino. Un espacio seguro para conectar con otras mujeres, resolver dudas y encontrar apoyo real.",
  },
  {
    title: "Píldoras de contenido lunar y astrológico",
    text: "Cada mes publicamos vídeos cortos de 20–30 minutos: explicamos la energía de la luna nueva y la luna llena, analizamos tránsitos astrológicos importantes y tienes microejercicios y rituales para esos momentos (prácticos, aplicables y fáciles de incorporar a tu día a día).",
  },
  {
    title: "Microejercicios y rituales mensuales",
    text: "Microejercicios semanales y 2 rituales por mes (luna nueva y luna llena). Todo pensado para que practiques poco a poco, sin abrumarte, y logres crear hábitos de autocuidado que duren.",
  },
  {
    title: "Comunidad y acompañamiento constante",
    text: "Un grupo de WhatsApp donde compartir tus avances, dudas o sensaciones. Aquí siempre hay alguien que te escucha, te comprende y te acompaña. Feedback real, soporte emocional y guía práctica siempre disponible.",
  },
  {
    title: "Contenido estructurado y organizado",
    text: "Todo lo que recibes está pensado para integrarse de forma progresiva: practicar sola o acompañada, volver a lo básico cuando lo necesites y tener claridad sobre qué hacer y cuándo hacerlo.",
  },
];

const pillars = [
  {
    title: "EL VIAJE",
    text: "Cada mes trabajamos una herramienta concreta, pensada para que sea aplicable a tu vida real y cotidiana. No son ejercicios bonitos que se quedan en la teoría: son microejercicios, rituales, masterclasses y píldoras de contenido lunar que te enseñan a cuidar tu energía, conocerte mejor y aplicar lo aprendido en tu día a día. Con ECO, cada práctica tiene sentido y continuidad, para que no solo aprendas, sino que hagas que funcione en tu vida.",
  },
  {
    title: "LA COMUNIDAD",
    text: "ECO te conecta con una tribu de mujeres reales, con las que puedes compartir, preguntar y sentirte comprendida. No es un grupo grande donde nadie se conoce: es un espacio seguro, donde se construyen lazos reales y duraderos, y donde siempre hay alguien que te escucha y te acompaña. Aquí encuentras apoyo, motivación y compañía para sostener tu práctica y tu autocuidado sin sentirte sola.",
  },
  {
    title: "EL SOPORTE",
    text: "No estás sola frente al contenido y estás acompañada en todo momento. En ECO tienes sesiones en directo, feedback, acompañamiento personalizado y apoyo emocional para que realmente implementes lo aprendido. Si eliges la modalidad anual, además, cuentas con coaching 1:1 trimestral, para adaptar las herramientas a tu situación concreta.",
  },
];

const faqs = [
  {
    q: "¿Necesito experiencia previa en autoconocimiento o espiritualidad?",
    a: "No, ECO está diseñado para mujeres con cualquier nivel de conocimiento. No necesitas haber hecho meditación, terapias, cursos de autocuidado ni tener conocimientos previos. Cada herramienta se enseña paso a paso, con explicaciones claras y ejercicios prácticos que puedes aplicar desde tu vida real. Lo importante es tu disposición a dedicarte tiempo y escucharte.",
  },
  {
    q: "¿Cuánto tiempo tendré que invertir?",
    a: "Tú decides tus tiempos, necesidades y ritmos. Todos los meses recibirás: 1 masterclass de 1h30, 1 sesión tipo café con amigas de 1h30, 2 vídeos de contenido lunar (20–30 min), 2 microejercicios diarios (5–10 min cada uno), 2 rituales (uno para la luna llena y otro para la luna nueva). Puedes adaptar tu ritmo: hacer todo, algunas cosas, o simplemente elegir un ejercicio diario. ECO está pensado para integrarse en tu día a día sin agobios ni exigencias. Vuelve a ti desde el placer y la calma.",
  },
  {
    q: "¿Qué pasa si no puedo asistir a los directos?",
    a: "No pasa nada. Todas las sesiones quedan grabadas y estarán disponibles dentro de la plataforma desde el día siguiente. Así puedes verlas cuando mejor te venga y repetirlas tantas veces como quieras.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. ECO no tiene permanencia. Puedes entrar y salir cuando quieras, sin penalizaciones ni letras pequeñas.",
  },
  {
    q: "Si me doy de baja, ¿sigo teniendo acceso a los contenidos?",
    a: "No. Para disfrutar del contenido necesitas que tu cuenta esté activa. Si te das de baja, perderás acceso a las masterclass, las píldoras de contenido, los microejercicios y los rituales. Por eso, muchas alumnas eligen la suscripción anual: así disfrutan de todo el año y además reciben beneficios extra como ahorro y sesiones individuales de coaching trimestrales.",
  },
  {
    q: "¿Puedo descargar los contenidos?",
    a: "No. Todo el contenido está disponible dentro de la plataforma. Esto asegura que siempre tengas la información actualizada y organizada según el recorrido de ECO, y evita perderte en archivos sueltos.",
  },
  {
    q: "¿Solo hacemos ejercicios y rituales guiados?",
    a: "No. Además de los ejercicios prácticos y rituales mensuales, en ECO hay masterclass y sesiones en directo donde aprenderás a integrar los hábitos en tu vida cotidiana, a escuchar tu cuerpo, a conectar con tus emociones y a aplicar la espiritualidad de forma realista. Todo lo que aprendes lo puedes llevar a tu día a día, no queda en teoría ni en una pantalla.",
  },
  {
    q: "Acabo de descubrir ECO, ¿cómo sé qué herramientas trabajamos este mes?",
    a: "Puedes descargarte el calendario anual de ECO con las 12 herramientas y ver qué trabajaremos cada mes. Así te haces una idea de todo el recorrido y puedes integrarlo en tu rutina.",
  },
  {
    q: "¿Puedo acceder a contenidos de meses anteriores?",
    a: "Sí, si eliges la suscripción anual tendrás acceso a todo el año 2026, independientemente del momento en que te unas.",
  },
  {
    q: "¿Cómo se renueva la suscripción?",
    a: "La suscripción se renueva automáticamente, como cualquier plataforma de membresía, para que no tengas que preocuparte por perder el acceso a tus herramientas y a la comunidad.",
  },
  {
    q: "¿Y si no me doy de baja a tiempo?",
    a: "No hay devoluciones si ya has hecho el pago. Pero recuerda: la suscripción mensual puedes cancelarla en cualquier momento, y la anual tiene 365 días de acceso completo, con la ventaja de sesiones individuales de coaching trimestrales incluidas.",
  },
];

export default function EcoPage() {
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

      {/* BLOQUE 1 — Hero with decorative border */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] relative"
        style={{
          backgroundImage: `url(${IMG}/hero-decor.png)`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-4xl mx-auto text-center pt-24 pb-16">
          <img
            src={`${IMG}/meditation-icon.png`}
            alt=""
            className="h-24 w-auto mx-auto mb-6"
          />
          <h1 className="font-serif text-3xl md:text-5xl text-[#3a362f] leading-tight">
            Tu tribu para <em className="italic">volver a ti</em>
          </h1>
        </div>
      </section>

      {/* BLOQUE 2 — Dark ECO band */}
      <section className="bg-[#3a362f] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-wide mb-3">
              ECO
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Tu espacio para volver a ti en comunidad
            </p>
            <a href="#planes">
              <Button className="bg-[#94bae4] hover:bg-[#7da5d1] text-white rounded-none tracking-widest text-xs px-10 py-6 mb-8">
                QUIERO ENTRAR A ECO
              </Button>
            </a>
            <p className="text-white/80 leading-relaxed">
              Una comunidad creada por y para mujeres dedicada al{" "}
              <strong className="text-white">bienestar integral</strong>, donde
              utilizamos herramientas prácticas de autoconocimiento y
              espiritualidad para <strong className="text-white">salir del automático</strong>{" "}
              y empezar a vivir alineadas a nuestra esencia y autenticidad.
            </p>
          </div>
          <div>
            <img
              src={`${IMG}/women-circle.png`}
              alt="Círculo de mujeres ECO"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 3 — Autoconocimiento real */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] mb-10 leading-tight">
            Autoconocimiento y espiritualidad real,{" "}
            <em className="italic">para mujeres reales.</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
              <p>
                ECO es una comunidad online que te acompaña semana a semana a
                través de:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-[#3a362f]/80">
                <li>herramientas prácticas de autoconocimiento</li>
                <li>encuentros en directo</li>
                <li>contenido que puedes aplicar a tu vida diaria</li>
                <li>micro ejercicios sencillos que no te quitan tiempo</li>
                <li>rituales y prácticas alineadas a la energía del momento</li>
                <li>comunidad y acompañamiento constante</li>
                <li>estructura y continuidad durante todo el año</li>
              </ul>
              <p>
                No es un curso lleno de teoría y vídeo que consumes y luego no
                sabes cómo llevar a tu vida. Tampoco es una espiritualidad
                bonita y de postureo para leer frases y seguir igual. Es un
                espacio vivo, al que puedes volver cada semana, que te ayuda a
                salir del automático y empezar a tratarte distinto en tu día a
                día.
              </p>
              <p>
                ECO está enfocado en algo muy concreto: que vuelvas a ti usando
                herramientas reales, sencillas y aplicables en medio de tu vida
                tal y como es ahora.
              </p>
              <p className="italic">
                Sin tener que cambiar tu rutina y sin que se convierta en una
                obligación más por hacer. Sino en una forma distinta de habitar
                tu vida y priorizar tu bienestar.
              </p>
              <a href="#planes" className="inline-block pt-2">
                <Button className="bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs px-8 py-6">
                  DESCUBRE EL VIAJE DE 2026
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={`${IMG}/altar-crystals.png`}
                alt=""
                className="w-full h-auto col-span-2 rounded-sm"
              />
              <img
                src={`${IMG}/journal.png`}
                alt=""
                className="w-full h-auto rounded-sm"
              />
              <img
                src={`${IMG}/meditating-women.png`}
                alt=""
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4 — Volver a ti cambia la forma */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede4d3]/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] leading-tight">
              Volver a ti cambia la forma en la que vives tu{" "}
              <em className="italic">día a día</em>
            </h2>
            <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
              <p>
                Volver a ti no elimina tus responsabilidades ni hace que
                desaparezcan tus problemas. Pero cambia por completo la forma en
                la que te relacionas contigo y con tu vida.
              </p>
              <p>
                Cuando empiezas a dedicarte unos minutos al día desde el
                autoconocimiento y el autocuidado, no cambia tu agenda:{" "}
                <strong>cambias tú dentro de tu agenda.</strong> Y eso lo
                transforma todo.
              </p>
              <p>
                Con prácticas pequeñas, reales y sostenidas en el tiempo,
                empiezas a notar que:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-[#ede4d3] p-6 text-[#3a362f]/85 leading-relaxed text-sm rounded-sm"
              >
                {b}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-5 text-[#3a362f]/85 leading-relaxed">
            <p>
              No buscamos que tengas una vida perfecta. Buscamos que aprendas a
              habitar tu vida real de una forma mucho más amable contigo. Porque
              aquí no vienes a aprender cosas bonitas.{" "}
              <strong>Vienes a aprender a tratarte distinto en tu día a día.</strong>
            </p>
            <p>
              <strong>ECO es el lugar al que vienes cuando tu vida está en calma.</strong>
            </p>
            <p>
              Y, sobre todo, es el lugar al que vienes cuando tu vida va
              demasiado rápido, cuando te sientes desconectada de ti, cuando
              sientes que te estás dejando para el final o no sabes muy bien
              cómo volver a ti.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 5 — ¿ECO es para todo el mundo? */}
      <section className="bg-[#94bae4] py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              ¿ECO es para todo el mundo?
            </h2>
            <p className="mb-2 text-white/90">Para todo el mundo, no.</p>
            <p className="mb-6 text-white/90">Para ti, sí… si sientes que:</p>
            <ul className="space-y-2 text-white/90 leading-relaxed pl-5 list-disc">
              {ecoIsForYou.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-6 text-white/90 leading-relaxed">
              <strong className="text-white">ECO no es para ti</strong> si
              buscas soluciones rápidas sin implicarte en el proceso, consumir
              contenido sin aplicarlo o fórmulas mágicas que cambian tu vida sin
              que tú cambies nada. Porque para que esto tenga efecto en tu vida,
              necesitas convertirlo en un hábito y en una forma de ser y estar
              en el mundo. Y eso no se consigue con un vídeo suelto, un libro de
              autoayuda o con un retiro al año. Se consigue con un espacio
              constante al que volver cada semana.
            </p>
            <p className="mt-6 italic text-white">
              Entra en ECO y convierte el autocuidado, el autoconocimiento y el
              volver a ti en parte de tu vida.
            </p>
          </div>
          <div>
            <img
              src={`${IMG}/tarot-cards.png`}
              alt=""
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 6 — Por qué entrar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] leading-tight">
              Por qué entrar a <em className="italic">ECO</em> en vez de hacer
              ejercicios sueltos por tu cuenta
            </h2>
            <div className="space-y-4 text-[#3a362f]/85 leading-relaxed">
              <p>Probablemente te hagas esta pregunta.</p>
              <p>
                Lo más sencillo sería buscar ejercicios de autocuidado en
                internet, ver vídeos, leer libros, guardar posts en Instagram y
                prometerte que “esta vez sí” vas a dedicarte tiempo, ¿no?
              </p>
              <p>
                Sencillo, sí.
                <br />
                Útil a largo plazo, no.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={`${IMG}/woman-laptop.png`}
                alt=""
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div className="space-y-4 text-[#3a362f]/85 leading-relaxed">
              <p>
                Hacer cosas sueltas sin contexto, sin orden y sin acompañamiento
                suele acabar siempre igual: empiezas con ganas… y a las dos
                semanas lo has dejado. No porque no quieras, no porque seas
                floja ni incapaz… <strong>Sino porque sola es muy difícil sostenerlo.</strong>
              </p>
              <p>
                ECO no te ofrece ejercicios al azar. Te ofrece algo mucho más
                difícil de encontrar hoy en día:{" "}
                <strong>continuidad, contexto, estructura y acompañamiento humano.</strong>
              </p>
              <p>
                Aquí no vas a practicar cosas sin saber por qué. Ni vas a probar
                herramientas aisladas sin entender cómo encajan en tu vida.
              </p>
              <p>
                Cada mes forma parte de un recorrido coherente. Cada herramienta
                tiene un sentido dentro del viaje. Cada sesión está pensada para
                que lo que aprendas lo puedas aplicar esa misma semana en tu día
                a día.
              </p>
              <p className="italic">
                No es consumir contenido. Es integrar una forma distinta de
                tratarte, cuidarte y vivirte.
              </p>
              <p>
                ECO no busca ser rápido ni inmediato como un vídeo motivacional.
                Busca ser <strong>útil a largo plazo.</strong>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#planes">
              <Button className="bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs px-10 py-6">
                ENTRAR A ECO
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 — Qué incluye ECO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3a362f] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 leading-tight">
            Qué incluye <em className="italic">ECO</em>:
          </h2>
          <p className="text-white/80 mb-10 max-w-3xl">
            Cuando entras a ECO no solo entras a una “colección de ejercicios”.
            Entrar a ECO significa tener un espacio completo, organizado y
            pensado para acompañarte de verdad en tu camino de autocuidado y
            vuelta a ti.
          </p>
          <p className="text-white/80 mb-6">Esto es lo que incluye:</p>

          <div className="space-y-4">
            {includes.map((item) => (
              <div
                key={item.title}
                className="bg-[#5a4a3a]/40 border border-white/10 p-6 rounded-sm"
              >
                <h3 className="font-serif text-lg md:text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-white/90 italic max-w-3xl mx-auto">
            ECO es un espacio vivo, completo y estructurado para que realmente
            puedas volver a ti y crear cambios sostenibles en tu vida.
          </p>
        </div>
      </section>

      {/* BLOQUE 8 — 3 pilares */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] mb-12 leading-tight text-center">
            Un enfoque de <em className="italic">tribu</em> único, basado en 3
            pilares:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#ede4d3]/50 border border-[#c9baa4]/40 p-8 rounded-sm"
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
            ECO no es solo aprender: es sentir que una <em>tribu</em> te
            sostiene mientras vuelves a ti.
          </p>
        </div>
      </section>

      {/* BLOQUE 9 — Hola Judith */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={`${IMG}/judith.png`}
              alt="Judith"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="space-y-4 text-[#3a362f]/85 leading-relaxed">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] leading-tight mb-2">
              Hola, me llamo Judith
            </h2>
            <p className="italic text-[#3a362f]/70">
              soy tu <em>amiga hierbas</em> de confianza :)
            </p>
            <p>
              Soy educadora social, astróloga y terapeuta holística, y mi pasión
              es acompañar a mujeres a reconectarse con ellas mismas, recuperar
              su energía y a vivir alineadas con su autenticidad.
            </p>
            <p>
              Los círculos de mujeres me cambiaron la vida. Por eso, hace unos
              años sentí la necesidad de crear un espacio que fuera más allá de
              la teoría o de ejercicios sueltos, un lugar donde aprender
              herramientas prácticas y aplicables a la vida real, con
              acompañamiento y comunidad.
            </p>
            <p>
              Así nació ECO, un espacio para mujeres que buscan dedicarse
              tiempo, conocerse mejor y sentirse apoyadas mientras hacen este
              viaje de vuelta a sí mismas.
            </p>
            <p>
              Sé lo difícil que es encontrar un espacio seguro donde ser tú
              misma, poder compartir sin juicio y recibir guía real y práctica
              que te ayude a integrar lo aprendido en tu día a día. También sé
              lo importante que es que alguien te acompañe en el camino, que te
              sostenga y te recuerde que está bien priorizarte, cuidarte y
              escucharte.
            </p>
            <p className="italic">
              Por eso existe ECO: para que aprendas, acompañarte y sostenerte
              mientras vuelves a ti, paso a paso, con herramientas que funcionan
              en la vida real, en tu rutina diaria y en tu energía de cada día.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 10 — Pricing */}
      <section id="planes" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3a362f] text-center mb-12 leading-tight">
            Pausa el ruido y entra a la <em className="italic">calma de la tribu</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mensual */}
            <div className="bg-[#ede4d3]/50 border border-[#c9baa4]/40 p-8 rounded-sm text-center flex flex-col">
              <p className="tracking-widest text-sm text-[#3a362f]/70 mb-3">
                MENSUAL
              </p>
              <p className="font-serif text-5xl text-[#3a362f] mb-6">34€</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs py-6 mb-4">
                  ENTRAR A ECO
                </Button>
              </a>
              <p className="text-[#3a362f]/85 text-sm leading-relaxed mt-auto">
                Con la suscripción mensual accedes al contenido disponible y
                puedes empezar tu viaje de vuelta a ti sin esperar a nadie. No
                tienes compromiso ni permanencia, puedes anularla cuando
                quieras.
              </p>
            </div>

            {/* Anual */}
            <div className="bg-[#ede4d3]/50 border border-[#c9baa4]/40 p-8 rounded-sm text-center flex flex-col">
              <p className="tracking-widest text-sm text-[#3a362f]/70 mb-3">
                ANUAL
              </p>
              <p className="font-serif text-5xl text-[#3a362f] mb-6">340€</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#3a362f] hover:bg-[#3a362f]/90 text-white rounded-none tracking-widest text-xs py-6 mb-4">
                  ENTRAR A ECO
                </Button>
              </a>
              <p className="text-[#3a362f]/85 text-sm leading-relaxed mt-auto">
                Con la opción anual accedes a todo el contenido completo,
                ahorras dos meses y recibes 4 sesiones individuales conmigo a lo
                largo del año para acompañarte de forma 100% personalizada en tu
                proceso.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <p className="text-[#3a362f]/85 mb-3">Lo que recibes cuando entras a ECO:</p>
            <ul className="space-y-2 list-disc pl-5 text-[#3a362f]/80 text-sm">
              <li>Acceso inmediato a todas las herramientas del mes.</li>
              <li>
                Biblioteca de contenidos: microejercicios, rituales y píldoras
                de autoconocimiento y espiritualidad.
              </li>
              <li>
                Calendario mensual con el recorrido de ECO, para saber qué
                trabajar cada mes.
              </li>
              <li>
                Grabaciones de masterclass y sesiones de café, para volver
                siempre que quieras.
              </li>
              <li>
                Acceso a un grupo de comunidad vivo, donde compartir, aprender y
                sentirte acompañada.
              </li>
              <li>Sin permanencia: puedes dejar ECO cuando quieras.</li>
            </ul>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center text-[#3a362f]/85 leading-relaxed space-y-3">
            <p>
              Amiga, te cuesta menos que un café al día y menos que muchas cosas
              que te compras y no necesitas.
            </p>
            <p className="font-medium text-[#3a362f]">
              Invertir en ti misma es lo que realmente alimenta tu vida y hace
              que crezcas más fuerte.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 11 — Testimonios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#94bae4]">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            ¿Lista para <em className="italic">volver a ti</em> de verdad, con
            claridad, acompañamiento y herramientas que funcionan?
          </h2>
          <p className="mt-6 tracking-widest text-sm text-white/90">
            MEJOR QUE TE LO CUENTEN ELLAS:
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

      {/* BLOQUE 13 — Círculos ancestrales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ede4d3]/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-[#3a362f]/85 leading-relaxed">
            <p className="font-medium text-[#3a362f]">
              Los círculos de mujeres han existido desde tiempos ancestrales.
            </p>
            <p>
              Desde los ritos de paso en África, los círculos de luna en
              América, hasta las reuniones de sabias en Europa y Asia,{" "}
              <strong>estos círculos han sido faros de conexión, guía y apoyo mutuo.</strong>{" "}
              Lugares donde la energía femenina se reunía para sostenerse,
              aprender y sanar juntas. Espacios de escucha, cuidado, reflexión y
              transformación.
            </p>
            <p>
              En ECO, los círculos de mujeres cobran vida de forma virtual, pero
              con toda la fuerza y el propósito de los ancestrales. Aquí no hay
              competencia, juicios ni presión; solo{" "}
              <strong>un espacio seguro donde puedes ser tú misma</strong>,
              expresar lo que sientes, aprender de otras y recibir apoyo
              sincero.
            </p>
            <p>
              Es en comunidad donde el <em>autocuidado</em> se vuelve real: nos
              cuidamos juntas, compartimos estrategias, aprendemos de nuestras
              experiencias y nos acompañamos en el proceso de volver a nosotras
              mismas.
            </p>
            <p>
              No importa dónde estés, en ECO tienes tu círculo. Un lugar donde
              la escucha, la conexión y el cuidado son reales.
            </p>
            <p className="italic">
              Esta es la verdadera revolución del autocuidado femenino: volver a
              ti misma acompañada por otras mujeres, conectándote con tu energía
              y tu tribu, desde cualquier lugar y en cualquier momento.
            </p>
          </div>
          <div>
            <img
              src={`${IMG}/hand-candle.png`}
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
            ¿Tú también sientes esa voz interior que te pide que{" "}
            <em className="italic">vuelvas a ti?</em>
          </h2>
          <p className="text-[#3a362f]/70 mb-8">Tu tribu te está esperando.</p>
          <a href="#planes">
            <Button className="bg-[#94bae4] hover:bg-[#7da5d1] text-white rounded-none tracking-widest text-xs px-10 py-6">
              QUIERO ENTRAR A ECO
            </Button>
          </a>
        </div>
      </section>

      {/* Decorative closing border */}
      <section
        className="bg-[#faf8f3] pt-12 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${IMG}/tarot-border.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-2xl mx-auto text-center pt-32 pb-24">
          <img
            src={`${IMG}/lotus-woman.png`}
            alt=""
            className="h-24 w-auto mx-auto mb-6"
          />
          <p className="font-serif text-2xl md:text-3xl text-[#3a362f]">
            Tu <em className="italic">tribu</em> para{" "}
            <em className="italic">volver a ti</em>
          </p>
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
