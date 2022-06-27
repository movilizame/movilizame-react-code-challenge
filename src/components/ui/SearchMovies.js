import React from "react";
import { useDispatch} from "react-redux";
import { fetchMovies} from "../../services/MoviesReducer";

export default function SearchMovies() {
    const dispatch = useDispatch()
    const [year, setYear] = React.useState('')
    const [title, setTitle] = React.useState('')

    const filterMovies = () => { 
        dispatch(fetchMovies({title: title, year: year}))
    }

    return (
        <div>
            <p className='font-bold lg:text-[40px] md:text-[30px] sm:text-[20px]'>Buscar</p>
            <div className='flex flex-row flex-wrap items-end gap-3'>
                <div className=''>
                    <p className='text-lg'>Titulo</p>
                    <input
                        type="text"
                        value={title}
                        className='rounded-md border-4 h-9'
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className=''>
                    <p className='text-lg'>Año hasta</p>
                    <input
                        type="text"
                        value={year}
                        className='rounded-md border-4 h-9'
                        onChange={(e) => { setYear(e.target.value) }} />
                </div>
                <button
                    className='btn btn-primary w-28 h-9 text-white text-sm font-semibold rounded-md bg-sky-500'
                    onClick={filterMovies}>Buscar</button>
            </div>
        </div>
    );
}