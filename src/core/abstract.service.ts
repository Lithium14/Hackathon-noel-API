import { ObjectLiteral, Repository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export abstract class AbstractService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    protected abstract repository: Repository<ObjectLiteral>;
    // Business logic

    /**
     * Cette fonction ressort les subjects triés par leurs valeurs createAt
     * @param order l'ordre de tri, par défaut DESC
     */
    getAllOrdered(order: 'ASC' | 'DESC' | 1 | -1 = 'DESC'): Promise<ObjectLiteral[] | undefined> {
        return this.repository.find({order: {createdAt: order}});
   }

    getAll() {
        return this.repository.find();
    }

    getById(id: any) {
        return this.repository.findOne(id);
    }

    add(element: any) {
        return this.repository.save(element);
    }

    update(idElement: any, element: ObjectLiteral) {
        return this.repository.update(idElement, element);
    }

    delete(id: any) {
        return this.repository.delete(id);
    }

}
