import express, {Application, Request, Response, Router } from 'express';
import { AbstractService } from './abstract.service';

export abstract class AbstractController {
    protected abstract route: string;
    protected abstract service: AbstractService;

    constructor(app: Application) {
        const abstractRouter: Router = express.Router();
        this.init(app, abstractRouter);
    }

    init(app: Application, abstractRouter: Router) {
        abstractRouter.get('/', async (req: Request, res: Response) => {
            res.send(await this.service.getAll());
        });

        abstractRouter.get('/:id', async (req: Request, res: Response) => {
            res.send(await this.service.getById(Number(req.params.id)));

        });

        abstractRouter.post('/', async (req: Request, res: Response) => {
            res.send(await this.service.add(req.body));
        });

        abstractRouter.put('/', async (req: Request, res: Response) => {
            res.send(await this.service.update(Number(req.params.id), req.body));
        });

        abstractRouter.delete('/', async (req: Request, res: Response) => {
            res.send(await this.service.delete(Number(req.params.id)));
        });

        app.use('/' + this.route, abstractRouter);
    }
}
