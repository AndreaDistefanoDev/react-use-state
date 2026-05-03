import languages from '../data/languages'
export default function AppMain() {

    return (
        <>

            {
                languages.map(language => (
                    <div className="card" key={language.id}>
                        <div className="card-body">
                            <button>{language.title}</button>
                            <div className="content">
                                {language.description}
                            </div>
                        </div>
                    </div>

                ))
            }
        </>

    )
}