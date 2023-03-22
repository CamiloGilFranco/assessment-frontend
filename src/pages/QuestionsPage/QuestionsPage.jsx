import "./QuestionsPage.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Link } from "react-router-dom";

const QuestionsPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="question-page-accordion-container">
        <Accordion allowToggle className="question-page-accordion">
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  1. ¿Cuáles son las ceremonias más importantes de un Sprint y
                  cuál es la idea de cada una?
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                Sprint Planning: se definen la tareas que deben ser cumplidas en
                el siguiente sprint
              </p>
              <p className="question-page-accordion-paragraph-exp">
                Daily: es una reunion diaria en la que se explica de forma corta
                que se hizo el dia anterior, que se va a hacer ese dia y que
                inconvenientes han surgido
              </p>
              <p className="question-page-accordion-paragraph-exp">
                Sprint Review: se hace una revision de las tareas del sprint
                anterior con el fin de aprobarlas o rechazarlas según los
                requerimientos del proyecto
              </p>
              <p className="question-page-accordion-paragraph-exp">
                Retrospective: se aprueban o rechazan las nuevas funcionalidades
                por parte del cliente
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  2. ¿Qué son los Wireframes? Nombra al menos una herramienta
                  que podamos utilizar.
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              Un Wireframe es un diagrama que se hace con el fin de definir la
              estructura visual de una pagina web, algunas de las herramientas
              mas utilizadas para el desarrollo de wireframes son:
              <ol>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Lucidchart</li>
                <li>InVision</li>
                <li>Moqups</li>
              </ol>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  3. Explicar la diferencia entre var, let y const. Y dar un
                  ejemplo en qué caso se utilizará.
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                var: define una variable global a la cual se puede acceder desde
                cualquier contexto del código, por esa misma razón actualmente
                se considera una mala practica su uso
              </p>
              <p className="question-page-accordion-paragraph-exp">
                let: a diferencia de var, con let se definen variables que si
                respetan el contexto en que fueron definidas, es decir, que no
                se pueden usar fuera de su contexto
              </p>
              <p className="question-page-accordion-paragraph-exp">
                const: permite definir una variable cuyo valor no podrá ser
                cambiado a lo largo del flujo del código
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  4. ¿Cuáles son los tres comandos que se pueden utilizar para
                  crear una nueva rama llamada rama-1?
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                git branch X: permite crear una nueva rama de nombre (X)
              </p>
              <p className="question-page-accordion-paragraph-exp">
                git checkout -b X: permite crear una nueva rama de nombre (X) e
                inmediatamente posicionarse en ella
              </p>
              <p className="question-page-accordion-paragraph-exp">
                git checkout -b X Y: permite crear una nueva rama de nombre (X)
                e inmediatamente posicionarse en ella, sin embargo, esta nueva
                rama sera basada en la rama (Y) e lugar de la rama principal
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  5. Explicar la diferencia entre git merge y git rebase.
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                git merge: fusiona dos ramas conservando el historial de la rama
                secundaria
              </p>
              <p className="question-page-accordion-paragraph-exp">
                git rebase: fusiona dos ramas eliminando el historial de la rama
                secundaria
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando
                  git pull?
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                git pull: permite descargar los últimos cambios en un
                repositorio remoto a un repositorio local
              </p>
              <p className="question-page-accordion-paragraph-exp">
                pull request: es una solicitud de incorporación de cambios a un
                repositorio, lo que permite informar al equipo de desarrollo
                cuales son los cambios propuestos
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  7. ¿Qué es el Virtual DOM?
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <p className="question-page-accordion-paragraph-exp">
                El virtual DOM es una herramienta que permite mantener la
                interfaz del usuario en memoria y permite mostrar en el DOM
                ciertos componentes según su estado especifico
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="question-page-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  8. Dado el siguiente codePen, el cual solo tiene un HTML, por
                  medio de css llegar a esta respuesta. Imagen. (Para mostrar
                  los servicios debes usar CSS Flexbox o CSS Grid).
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className="question-page-accordion-paragraph"
            >
              <Link
                to="/css-exercise"
                className="question-page-accordion-paragraph-link"
              >
                VER EL EJERCICIO
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default QuestionsPage;
