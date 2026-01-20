import { useState } from "react";
import TrailerModal from "./TrailerModal";

const movies = [
    {
        id: 1,
        title: "Interstellar",
        genre: "Sci-Fi, Adventure",
        releaseDate: "07 Nov 2014",
        poster: "https://picsum.photos/300/450?random=1",
        trailerId: "zSWdZVtXT7E",
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action, Crime",
        releaseDate: "18 Jul 2008",
        poster: "https://picsum.photos/300/450?random=2",
        trailerId: "EXeTwQWrcwY",
    },
    {
        id: 3,
        title: "Dune: Part One",
        genre: "Sci-Fi",
        releaseDate: "01 Mar 2024",
        poster: "https://picsum.photos/300/450?random=3",
        trailerId: "Way9Dexny3w",
    },
    {
        id: 4,
        title: "Dune: Part Two",
        genre: "Sci-Fi",
        releaseDate: "01 Mar 2024",
        poster: "https://picsum.photos/300/450?random=4",
        trailerId: "Way9Dexny3w",
    },
];

export default function MovieGrid() {
    const [trailer, setTrailer] = useState(null);

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-xl font-semibold mb-6">Now Showing</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="group relative rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition"
                        >
                            {/* Poster */}
                            <div className="relative">
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="h-64 w-full object-cover"
                                />

                                {/* Play Button */}
                                <button
                                    onClick={() => setTrailer(movie.trailerId)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                                >
                                    <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">
                                        ▶
                                    </div>
                                </button>
                            </div>


                            {/* Info */}
                            <div className="p-3">
                                <h3 className="font-semibold text-sm">{movie.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {movie.genre}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Release: {movie.releaseDate}
                                </p>

                                <button className="mt-3 w-full rounded-md bg-red-600 py-2 text-sm text-white hover:bg-red-700">
                                    Get Tickets
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trailer Modal */}
            {trailer && (
                <TrailerModal
                    youtubeId={trailer}
                    onClose={() => setTrailer(null)}
                />
            )}
        </>
    );
}
