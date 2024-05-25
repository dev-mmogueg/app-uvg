import { useState, useEffect } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { SettingsScreen } from './SettingsScreen';

/* ---- IMPORT's ---- */
// Imgs
import sheep_2 from '../assets/imgs/sheep-2.png'
import sheep_3 from '../assets/imgs/sheep-3.png'
import sheep_4 from '../assets/imgs/sheep-4.png'
import sheep_5 from '../assets/imgs/sheep-5.png'
import sheep_6 from '../assets/imgs/sheep-6.png'
import sheep_7 from '../assets/imgs/sheep-7.png'

// Icons
import { IoSend } from "react-icons/io5";
import { AnswerDefault } from '../components/AnswerDefault';

export const MainScreen = () => {

  /* ---- STATE's ---- */
  const [open_settings, setOpen_settings] = useState(false);
  const [sheep_img, setSheep_img] = useState(sheep_2);
  const [phrases, setPhrases] = useState('Good Morning!!!!!');
  const [answers_defaults, setAnswers_defaults] = useState([' ', ' ', ' '])
  const [sheep_emotion, setSheep_emotion] = useState([
    {
      "img": sheep_2,
      "phrases": [
        {
          "ask": "¿Qué te mantiene despierto por las noches como estudiante universitario?",
          "answers": [
            "La presión por mantener buenas calificaciones.",
            "La carga de trabajo y los plazos de entrega.",
            "Las finanzas y el costo de la educación."
          ]
        },
        {
          "ask": "¿Cuáles son tus principales temores o inquietudes en este momento?",
          "answers": [
            "No encontrar un buen trabajo después de graduarme.",
            "No cumplir con las expectativas de mis padres.",
            "No tener tiempo para una vida social y personal."
          ]
        },
        {
          "ask": "Si pudieras resolver una preocupación en tu vida estudiantil, ¿cuál sería?",
          "answers": [
            "Tener un mejor manejo del estrés y la ansiedad.",
            "Encontrar un equilibrio saludable entre estudios y vida personal.",
            "Conseguir una pasantía o experiencia laboral valiosa."
          ]
        },
      ],
    },
    {
      "img": sheep_3,
      "phrases": [
        {
          "ask": "¿Qué significa el amor para ti como estudiante universitario?",
          "answers": [
            "Cultivar amistades profundas y duraderas.",
            "Encontrar un compañero/a que te apoye en tus metas académicas.",
            "Amar y perseguir tus pasiones e intereses."
          ]
        },
        {
          "ask": "¿Cómo demuestras tu amor a las personas que aprecias en la universidad?",
          "answers": [
            "Siendo un buen oyente y ofreciendo apoyo emocional.",
            "Organizando actividades divertidas y momentos memorables.",
            "Ayudando a otros estudiantes con sus tareas o estudios."
          ]
        },
        {
          "ask": "Describe un momento en el que hayas sentido un amor profundo en la universidad",
          "answers": [
            "Cuando un amigo cercano estuvo ahí para mí en un momento difícil.",
            " Cuando descubrí mi pasión por un tema o área de estudio.",
            "Cuando encontré a una pareja que comparte mis sueños y ambiciones."
          ]
        },
      ],
    },
    {
      "img": sheep_4,
      "phrases": [
        {
          "ask": "¿Qué ha sido lo más difícil que has tenido que enfrentar en la universidad?",
          "answers": [
            "Lidiar con la soledad y el sentirse abrumado.",
            "Reprobar una clase importante o no cumplir con mis expectativas.",
            "Problemas personales o familiares que afectan mis estudios."
          ]
        },
        {
          "ask": "¿Cómo manejas los sentimientos de tristeza y melancolía como estudiante?",
          "answers": [
            "Hablando con un consejero estudiantil o terapeuta.",
            "Practicando actividades relajantes como el yoga o la meditación.",
            "Pasando tiempo con amigos cercanos que me apoyan."
          ]
        },
        {
          "ask": "Describe un momento en el que te hayas sentido profundamente triste en la universidad.",
          "answers": [
            "Cuando tuve que dejar una actividad extracurricular que amaba.",
            "Después de una ruptura amorosa durante el semestre.",
            "Cuando me sentí abrumado por la carga académica.",
          ]
        },
      ],
    },
    {
      "img": sheep_5,
      "phrases": [
        {
          "ask": "¿Qué situaciones suelen hacerte enojar en el ámbito universitario?",
          "answers": [
            "Profesores injustos o parciales.",
            "Compañeros de clase irrespetuosos o poco cooperativos.",
            "Políticas universitarias poco claras o injustas."
          ]
        },
        {
          "ask": "¿Cómo expresas tu enojo de manera saludable como estudiante?",
          "answers": [
            "Hablando con un consejero o autoridad universitaria de manera respetuosa.",
            "Escribiendo en un diario o haciendo ejercicio para liberar frustraciones.",
            "Participando en protestas o movimientos estudiantiles pacíficos."
          ]
        },
        {
          "ask": "Comparte un momento en el que hayas experimentado una intensa ira en la universidad.",
          "answers": [
            "Cuando un profesor calificó injustamente mi trabajo.",
            "Cuando un compañero de clase me plagió o copió sin permiso.",
            "Cuando la universidad aumentó las tasas de matrícula de manera excesiva."
          ]
        },
      ],
    },
    {
      "img": sheep_6,
      "phrases": [
        {
          "ask": "¿Qué te ha hecho sonreír hoy en la universidad?",
          "answers": [
            "Recibir una buena calificación en un examen difícil.",
            "Pasar un buen rato con mis amigos en el campus.",
            "Descubrir un nuevo interés o pasión en una clase."
          ]
        },
        {
          "ask": "¿Cuál ha sido el momento más feliz de tu vida universitaria hasta ahora?",
          "answers": [
            "Ser aceptado en la carrera que siempre soñé.",
            "Ganar una beca o reconocimiento académico importante.",
            "Participar en un proyecto estudiantil exitoso."
          ]
        },
        {
          "ask": "Describe una situación en la universidad que te llene de alegría y entusiasmo.",
          "answers": [
            "Asistir a una conferencia o charla inspiradora.",
            "Descubrir un nuevo tema apasionante en una clase.",
            "Viajar con amigos durante las vacaciones."
          ]
        },
      ],
    },
    {
      "img": sheep_7,
      "phrases": [
        {
          "ask": "¿Cuáles son tus mayores dudas o incertidumbres como estudiante universitario?",
          "answers": [
            "Si estoy eligiendo la carrera correcta para mí.",
            "Si seré capaz de encontrar un trabajo después de graduarme.",
            "Si estoy aprovechando al máximo mi experiencia universitaria."
          ]
        },
        {
          "ask": "¿Cómo manejas las situaciones en las que no tienes todas las respuestas?",
          "answers": [
            "Buscando asesoramiento de profesores o consejeros de carrera.",
            "Investigando y explorando diferentes opciones y recursos.",
            "Manteniéndome abierto a nuevas oportunidades y experiencias."
          ]
        },
        {
          "ask": "Comparte un momento en el que hayas experimentado dudas significativas en la universidad.",
          "answers": [
            "Cuando tuve que elegir mi especialización o concentración.",
            "Cuando estaba considerando cambiar de carrera o universidad.",
            "Cuando tuve que decidir si aceptar una pasantía o seguir estudiando."
          ]
        },
      ],
    },
  ])

  const get_emotion_sheep = () => {
    const sheep = sheep_emotion[Math.floor(Math.random() * sheep_emotion.length)]
    setSheep_img(sheep['img'])
    const ran_ask = Math.floor(Math.random() * sheep['phrases'].length)
    setPhrases(sheep['phrases'][ran_ask]['ask'])
    setAnswers_defaults(sheep['phrases'][ran_ask]['answers'])
  }

  const send_answerd = (e) => {
    e.preventDefault()
    get_emotion_sheep()
  }

  useEffect(() => {
    get_emotion_sheep()
  }, [])

  return (
    <>
      <section
        className={`app`}
      >
        <button
          className={`absolute right-3 top-3 p-2 bg-lime-600 rounded-full text-white`}
          onClick={() => { setOpen_settings(!open_settings) }}
        >
          <FiAlignRight
            size={28}
            className={``}
          />
        </button>
        <div
          className={`min-h-[calc(100vh-56px)] w-full flex flex-col justify-center items-center space-y-3`}
        >
          <div
            className={`px-8 text-center`}
          >
            <h1
              className={`font-semibold font-serif text-lime-600`}
            >
              {phrases}
            </h1>
          </div>
          <img
            className={`w-[68%]`}
            src={sheep_img}
            alt="sheep-emotion"
          />
          <div
            className={`w-full px-7`}
          >
            <label
              htmlFor="chat-sheep"
              className='text-base text-lime-700'
            >
              Responde a Sheepie
            </label>
            <div className={`flex flex-wrap items-center justify-between`}>
              <input
                className='min-w-[86%] px-3 py-2 border-[2px] border-lime-600 bg-transparent rounded-lg outline-none'
                name='answer'
                type={'text'}
              />
              <button
                className={`min-w-[10%] p-3 rounded-full text-lime-600 bg-lime-300`}
                onClick={(e) => { e.preventDefault() }}
              >
                <IoSend size={25} />
              </button>
            </div>
          </div>
          <label
            htmlFor="chat-sheep"
            className='text-base text-lime-700'
          >
            Respuestas Rapidas
          </label>
          <div
            className={`overflow-y-auto w-full px-7 max-h-[200px] space-y-3`}
          >
            {
              answers_defaults.map((text, i) => {
                return (
                  <AnswerDefault
                    key={i}
                    text={text}
                    send_answerd={send_answerd}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
      <SettingsScreen
        open={open_settings}
        setOpen={setOpen_settings}
      />
    </>
  )
}
