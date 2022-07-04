export default function SearchMovies () {

    return (
        <div>
            <div>
                <p>Título</p>
                <input
                    onChange={handleTitle} 
                    type="search"
                    placeholder="Ingrese un título"
                />
            </div>
            <div>
                <p>Año hasta</p>
                <input
                    onChange={handleYear} 
                    type="search"
                    placeholder="Ingrese un año"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}