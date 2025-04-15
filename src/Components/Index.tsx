import { useEffect, useState } from "react";

function App() {
  interface Pelicula {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
  }

  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const listado = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=f3874be7bacbd25ee8a4c6ad164eb158&language=es-ES"
      );
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    listado();
  }, []);

  return (
    <>
      <article className="container mx-auto p-30">
        <div className="justify-center items-center text-center mb-4">
          <h1 className="text-7xl font-extrabold ">
            Películas Populares del momento
          </h1>
        </div>
        <main className="py-40">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center h-50 ">
            {peliculas.map((pelicula) => (
              <li key={pelicula.id}>
                <div className="relative group w-[300px] h-[450px] overflow-hidden rounded shadow-lg">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                    alt={pelicula.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                    <h2 className="text-lg font-semibold">{pelicula.title}</h2>
                    <p className="text-sm mt-2">
                      {pelicula.overview?.length > 100
                        ? `${pelicula.overview.slice(0, 100)}...`
                        : pelicula.overview}
                    </p>
                    <p className="text-xs mt-2">{pelicula.release_date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </article>
    </>
  );
}

export default App;
