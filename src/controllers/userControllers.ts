const users = [
    {name: 'Paulo', email: 'paulo@teste.com'}
];

export default {
   async index(req: Request, res: Response) {
       return res.json(users);
   }
};