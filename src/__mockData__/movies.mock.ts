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
