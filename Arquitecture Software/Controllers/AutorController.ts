import { AutorDTO } from "../Models/AutorDTO";
import { AutorService } from "../Services/AutorService";

export class AutorController {
    constructor(private autorService: AutorService) {}

    createAutor(data: AutorDTO): AutorDTO {
        const autor = this.autorService.agregarAutor(data.nombre, new Date(data.fechaNacimiento), data.edad);
        return {
            id: autor.id,
            nombre: autor.nombre,
            fechaNacimiento: autor.fechaNacimiento.toISOString(),
            edad: autor.edad
        };
    }

    getAutor(id: number): AutorDTO | undefined {
        const autor = this.autorService.obtenerAutor(id);
        return autor ? {
            id: autor.id,
            nombre: autor.nombre,
            fechaNacimiento: autor.fechaNacimiento.toISOString(),
            edad: autor.edad
        } : undefined;
    }
}
