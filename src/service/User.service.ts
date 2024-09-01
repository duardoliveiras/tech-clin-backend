import { compare, genSalt, hash } from "bcrypt";
import { Repository } from "typeorm";

import { dataSource } from "../database/DataSource";
import { User } from "../database/entity/User";

export class UserService {
  userRepository: Repository<User>;
  saultRounds = 10;

  constructor(userRepository = dataSource.getRepository(User)) {
    this.userRepository = userRepository;
  }

  async createUser(name: string, email: string, password: string) {
    const salt = await genSalt(this.saultRounds);
    const hashPassword = await hash(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: hashPassword,
    });
    try {
      await this.userRepository.save(user);
    } catch (err) {
      if (err.code === "23505") {
        throw new Error("duplicidade");
      }
      throw err;
    }
  }

  async validateLogin(email: string, password: string) {
    let result = false;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      result = await compare(password, user.password);
    }

    if (!result) {
      throw Error("Senha ou Email incorretos");
    }
  }
}
