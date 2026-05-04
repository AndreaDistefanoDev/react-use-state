export default function AccordionItem({ language, activeDescription, onToggle }) {

    return (

        <div className="card mb-3">
            <div className="card-body">
                <button onClick={onToggle} className={activeDescription === language.id ? 'btn btn-warning' : 'btn btn-primary'}>{language.title}</button>
                {
                    activeDescription === language.id && (<div className="content mt-4">
                        {language.description}
                    </div>)
                }

            </div>
        </div >
    )
}