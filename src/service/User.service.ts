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

    user.name = nome;
    user.email = email;
    user.password = password;

    this.userRepository.save(user);

    return;
  }
}
