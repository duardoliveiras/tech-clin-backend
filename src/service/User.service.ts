import { hash } from "bcrypt";
import { Repository } from "typeorm";

import { dataSource } from "../database/DataSource";
import { User } from "../database/entity/User";

export class UserService {
  userRepository: Repository<User>;

  constructor(userRepository = dataSource.getRepository(User)) {
    this.userRepository = userRepository;
  }

  async createUser(nome: string, email: string, password: string) {
    const user = new User();

    user.email = "duardooliveiras@gmail.com";
    user.password = "teste";

    this.userRepository.save(user);

    return;
  }
}
