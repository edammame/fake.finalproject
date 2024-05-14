import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { genSalt, hash } from "bcrypt";

export const manageUserController = {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          gender: true,
          role: true,
          is_verified: true,
        },
      });
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send("Error fetching users");
    }
  },

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(req.params.id) },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          gender: true,
          role: true,
          is_verified: true,
        },
      });
      user
        ? res.status(200).send(user)
        : res.status(404).send("User not found");
    } catch (error) {
      res.status(500).send("Error getting user by ID");
    }
  },

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { first_name, last_name, email, password, gender, role } = req.body;
      const salt = await genSalt(10);

      const hashedPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          first_name,
          last_name,
          email,
          password: hashedPassword,
          gender,
          role,
        },
      });

      await prisma.user.create({
        data: newUser,
      });

      res.status(201).send("User created successfully");
    } catch (error) {
      res.status(500).send("Error creating user");
    }
  },

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { first_name, last_name, email, gender, role } = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: {
          first_name,
          last_name,
          email,
          gender,
          role,
        },
      });
      res.status(200).send("User updated successfully");
    } catch (error) {
      res.status(500).send("Error updating user");
    }
  },

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: {
          is_verified: false,
        },
      });
      res.status(200).send("User deleted successfully");
    } catch (error) {
      res.status(500).send("Error deleting user");
    }
  },
};
