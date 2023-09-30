import { Libro } from "../Entities/Libro";
import { LibroRepository } from "../Repositories/LibroRepository";
import { AutorService } from "./AutorService";
///añadido
import { NotFound, ValidationError } from '../utils/Error';



export class LibroService {
    constructor(private libroRepository: LibroRepository, private autorService: AutorService) {}

    agregarLibro(titulo: string, autorId: number): Libro {
        const autor = this.autorService.obtenerAutor(autorId);
        if (!autor) throw new Error("Autor no encontrado.");

        const libro = new Libro(Date.now(), titulo, autor);
        this.libroRepository.agregar(libro);
        return libro;
    }

    obtenerLibro(id: number): Libro | undefined {
        return this.libroRepository.obtenerPorId(id);
    }
}

try {
    throw new NotFound('El libro no fue encontrado');
} catch (error) {
    if (error instanceof NotFound) {
        console.error('Error: Not Found -', error.message);
    } else if (error instanceof ValidationError) {
        console.error('Error de validación -', error.message);
    } 
}



