import type { Movies } from '../types';

export const mockMovies: Movies = [
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            },
            {
                id: 16,
                name: 'Animation'
            }
        ],
        id: 1011985,
        overview:
            'Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón. Mientras entrena a un nuevo practicante de kung fu, enfrenta al villano llamado "el Camaleón", que evoca villanos del pasado, desafiando todo lo que Po y sus amigos han aprendido.',
        posterPath: '/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg',
        releaseDate: '2024-03-02',
        title: 'Kung Fu Panda 4',
        voteAverage: 6.942
    },
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            }
        ],
        id: 848538,
        overview:
            'Cuando las tramas de sus libros empiezan a parecerse demasiado a las actividades de un siniestro sindicato clandestino, la introvertida autora de novelas de espías Elly Conway y su gato se ven inmersos en el verdadero mundo del espionaje… donde nada, ni nadie, es lo que parece.',
        posterPath: '/aSm3b2gaDTnt35RekjEEanxIusg.jpg',
        releaseDate: '2024-01-31',
        title: 'Argylle',
        voteAverage: 6.128
    }
];

export const mockExpectedMovies: Movies = [
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            }
        ],
        id: 848538,
        overview:
            'Cuando las tramas de sus libros empiezan a parecerse demasiado a las actividades de un siniestro sindicato clandestino, la introvertida autora de novelas de espías Elly Conway y su gato se ven inmersos en el verdadero mundo del espionaje… donde nada, ni nadie, es lo que parece.',
        posterPath: '/aSm3b2gaDTnt35RekjEEanxIusg.jpg',
        releaseDate: '2024-01-31',
        title: 'Argylle',
        voteAverage: 6.128
    },
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            },
            {
                id: 16,
                name: 'Animation'
            }
        ],
        id: 1011985,
        overview:
            'Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón. Mientras entrena a un nuevo practicante de kung fu, enfrenta al villano llamado "el Camaleón", que evoca villanos del pasado, desafiando todo lo que Po y sus amigos han aprendido.',
        posterPath: '/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg',
        releaseDate: '2024-03-02',
        title: 'Kung Fu Panda 4',
        voteAverage: 6.942
    }
];

export const mockSortedMovies: Movies = [
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            }
        ],
        id: 848538,
        overview:
            'Cuando las tramas de sus libros empiezan a parecerse demasiado a las actividades de un siniestro sindicato clandestino, la introvertida autora de novelas de espías Elly Conway y su gato se ven inmersos en el verdadero mundo del espionaje… donde nada, ni nadie, es lo que parece.',
        posterPath: '/aSm3b2gaDTnt35RekjEEanxIusg.jpg',
        releaseDate: '2024-01-31',
        title: 'Argylle',
        voteAverage: 6.128
    },
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 12,
                name: 'Adventure'
            },
            {
                id: 16,
                name: 'Animation'
            }
        ],
        id: 1011985,
        overview:
            'Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón. Mientras entrena a un nuevo practicante de kung fu, enfrenta al villano llamado "el Camaleón", que evoca villanos del pasado, desafiando todo lo que Po y sus amigos han aprendido.',
        posterPath: '/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg',
        releaseDate: '2024-03-02',
        title: 'Kung Fu Panda 4',
        voteAverage: 6.942
    }
];

export const mockRecommendedMovies: Movies = [
    {
        genres: [
            {
                id: 35,
                name: 'Comedy'
            },
            {
                id: 10749,
                name: 'Romance'
            },
            {
                id: 878,
                name: 'Science Fiction'
            }
        ],
        id: 792307,
        overview:
            'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
        posterPath: '/mm1M6CoN2qLy8BpnrmYEVToQHJR.jpg',
        releaseDate: '2023-12-07',
        title: 'Pobres criaturas',
        voteAverage: 7.868
    },
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 18,
                name: 'Drama'
            },
            {
                id: 53,
                name: 'Thriller'
            }
        ],
        id: 866398,
        overview:
            'La brutal campaña de venganza de Adam Clay adquiere tintes nacionales tras revelarse que es un antiguo agente de una poderosa organización clandestina conocida como Beekeeper',
        posterPath: '/9X8EhbSpYrf6pGFGttWtVDAs9Hr.jpg',
        releaseDate: '2024-01-08',
        title: 'Beekeeper: El protector',
        voteAverage: 7.47
    }
];

export const mockSortedRecommendedMovies: Movies = [
    {
        genres: [
            {
                id: 28,
                name: 'Action'
            },
            {
                id: 18,
                name: 'Drama'
            },
            {
                id: 53,
                name: 'Thriller'
            }
        ],
        id: 866398,
        overview:
            'La brutal campaña de venganza de Adam Clay adquiere tintes nacionales tras revelarse que es un antiguo agente de una poderosa organización clandestina conocida como Beekeeper',
        posterPath: '/9X8EhbSpYrf6pGFGttWtVDAs9Hr.jpg',
        releaseDate: '2024-01-08',
        title: 'Beekeeper: El protector',
        voteAverage: 7.47
    },
    {
        genres: [
            {
                id: 35,
                name: 'Comedy'
            },
            {
                id: 10749,
                name: 'Romance'
            },
            {
                id: 878,
                name: 'Science Fiction'
            }
        ],
        id: 792307,
        overview:
            'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
        posterPath: '/mm1M6CoN2qLy8BpnrmYEVToQHJR.jpg',
        releaseDate: '2023-12-07',
        title: 'Pobres criaturas',
        voteAverage: 7.868
    }
];
