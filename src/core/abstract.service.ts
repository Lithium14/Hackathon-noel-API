import { ObjectLiteral, Repository } from 'typeorm';

export abstract class AbstractService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    protected abstract repository: Repository<ObjectLiteral>;
    // Business logic

    /**
     * Cette fonction ressort les subjects triés par leurs valeurs createAt
     * @param order l'ordre de tri, par défaut DESC
     */

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
