import React from "react";
import API from "../../services/movies";
const api = new API()


export default function SearchMovies({ setMovies }) {
    const [year, setYear] = React.useState('')
    const [title, setTitle] = React.useState('')

    const filterMovies = () => { api.getMovies(title, year).then((result) => { setMovies(result) }) }

    return (
        <div>
            <p className='font-bold lg:text-[40px] md:text-[30px] sm:text-[20px]'>Buscar</p>
            <div className='flex flex-wrap gap-3 w-1/2'>
                <div className='basis-1/3 md:basis-1/8'>
                    <p className='text-lg'>Titulo</p>
                    <input
                        type="text"
                        value={title}
                        className='rounded-md border-4'
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className='basis-1/3 md:basis-1/8'>
                    <p className='text-lg'>Año hasta</p>
                    <input
                        type="text"
                        value={year}
                        className='rounded-md border-4'
                        onChange={(e) => { setYear(e.target.value) }} />
                </div>
                <button
                    className='btn btn-primary basis-1/5 text-white text-sm font-semibold rounded-md bg-sky-500'
                    onClick={filterMovies}>Buscar</button>
            </div>
        </div>
    );
}