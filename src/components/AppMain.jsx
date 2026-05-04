import { useState } from 'react'
import languages from '../data/languages'
import AccordionItem from './AccordionItem'
export default function AppMain() {

    const [activeDescription, setActiveDscriptio] = useState([])
    function toggleDescription(id) {

        if (activeDescription === id) {
            return setActiveDscriptio(null)
        }
        setActiveDscriptio(id)
    }

    return (

        <>

            {
                languages.map(language => (
                    <AccordionItem language={language} activeDescription={activeDescription} onToggle={() => toggleDescription(language.id)} key={language.id} />

                ))
            }
        </>

    )
}