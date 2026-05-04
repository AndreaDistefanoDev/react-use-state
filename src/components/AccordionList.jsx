import { useState } from 'react'
import AccordionItem from './AccordionItem'


export default function AccordionList({ languages }) {

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