import { hash } from "bcrypt";
import { Repository } from "typeorm";

import { dataSource } from "../database/DataSource";
import { User } from "../database/entity/User";

export class UserService {
  userRepository: Repository<User>;

  constructor(userRepository = dataSource.getRepository(User)) {
    this.userRepository = userRepository;
  }

  async createUser(name: string, email: string, password: string) {
    const user = this.userRepository.create({ name, email, password });
    try {
      await this.userRepository.save(user);
    } catch (err) {
      if (err.code === "23505") {
        throw new Error("duplicidade");
      }
      throw err;
    }
  }
}
