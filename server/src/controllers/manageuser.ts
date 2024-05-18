import { Request, Response, NextFunction } from "express";
import { prisma, secretKey } from "..";
import { genSalt, hash } from "bcrypt";
import mustache, { render } from "mustache";
import { sign, verify } from "jsonwebtoken";
import fs from "fs";
import { mailer, transport } from "../lib/nodemailer";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

type TUser = {
  email: string;
};

const template = fs
  .readFileSync(__dirname + "/../templates/verify.html")
  .toString();

const forgotPass = fs
  .readFileSync(__dirname + "/../templates/forgotPass.html")
  .toString();

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

      const checkUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (checkUser?.id) throw new Error("User already registered");

      await prisma.user.create({
        data: newUser,
      });
      const token = sign({ email }, secretKey, {
        expiresIn: "1hr",
      });

      const rendered = mustache.render(template, {
        email,
        fullname: first_name + " " + last_name,
        verify_url: process.env.verifyURL + token,
      });

      mailer({
        to: email,
        subject: "Verify Account",
        text: "",
        html: rendered,
      });

      res.status(201).send("User created successfully");
    } catch (error) {
      res.status(500).send("Error creating user");
    }
  },

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { first_name, last_name, email, gender, role, password } = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: {
          first_name,
          last_name,
          password,
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
          is_verified: true,
        },
      });
      res.status(200).send("User deleted successfully");
    } catch (error) {
      res.status(500).send("Error deleting user");
    }
  },

  async forgotPassword(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { password, email } = req.body;
      console.log(req.user);

      const salt = await genSalt(10);

      const hashedPassword = await hash(password, salt);
      const userEditPassword: Prisma.UserUpdateInput = {
        password: hashedPassword,
      };
      await prisma.user.update({
        data: userEditPassword,
        where: {
          email: String(req.user?.email),
        },
      });
      res.send({
        success: true,
        message: "successfully changed the password",
      });
    } catch (error) {
      next(error);
    }
  },
  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization) throw Error("unauthorized");

      const verifyUser = verify(authorization, secretKey) as TUser;
      const checkUser = await prisma.user.findUnique({
        select: {
          id: true,
          email: true,
          gender: true,
          first_name: true,
          last_name: true,
          role: true,
        },
        where: {
          email: verifyUser.email,
        },
      });
      if (!checkUser) throw Error("unauthorized 2");

      const token = sign(checkUser, secretKey, {
        expiresIn: "1hr",
      });
      res.send({
        success: true,
        result: checkUser,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
  async sendMail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.query;
      const checkUser = await prisma.user.findUnique({
        where: {
          email: String(email),
        },
      });
      if (!checkUser) throw Error("email is not valid, please check again");
      const token = sign({ email }, secretKey, {
        expiresIn: "1hr",
      });

      const rendered = mustache.render(forgotPass, {
        email,
        first_name: checkUser.first_name,
        last_name: checkUser.last_name,
        verify_url: process.env.forgotPassURL + token,
      });

      mailer({
        to: String(email),
        subject: "Verify Account",
        text: "",
        html: rendered,
      });

      res.send({
        message: "email sent successfully",
      });
    } catch (error) {
      next(error);
    }
  },

  async verifyEmail(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { user } = req;
      const verif: Prisma.UserUpdateInput = {
        is_verified: true,
      };
      if (user?.is_verified) throw Error("user already verified");
      await prisma.user.update({
        data: verif,
        where: {
          id: user?.id,
        },
      });
      console.log("aman");

      res.send({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  },
};
