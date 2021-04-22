import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository)
        //verificar se o usuario existe

        const userExists = await usersRepository.findOne({
            email
        })

        //se existir, retornar user
        if(userExists) {
            return userExists
        }
        // Se não existir, salvar no DB
        const user = usersRepository.create({
            email
        })

        await usersRepository.save(user)

        return user
    }
}

export { UsersService }