import { Response, Request, NextFunction } from "express";
import { prisma, secretKey } from ".."; //accessing model
import { Prisma } from "@prisma/client"; // accessing interface/types

import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
// import { mailer, transport } from "../lib/nodemailer";
import mustache, { render } from "mustache";
import fs from "fs";
import { ReqUser } from "../middlewares/auth-middleware";

type TUser = {
  email: string;
};

const template = fs
  .readFileSync(__dirname + "/../templates/verify.html")
  .toString();

export const userController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, first_name, last_name, gender } = req.body;
      const salt = await genSalt(10);

      const hashedPassword = await hash(password, salt);

      const newUser: Prisma.UserCreateInput = {
        email,
        password: hashedPassword,
        first_name,
        last_name,
        gender,
      };

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

      // mailer({
      //   to: email,
      //   subject: "Verify Account",
      //   text: "",
      //   html: rendered,
      // });

      res.send({
        success: true,
        message: "Registration successful",
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.query;

      const user = await prisma.user.findUnique({
        where: {
          email: String(email),
        },
      });
      if (!user) throw Error("incorrect email or password");
      const checkPassword = await compare(String(password), user.password);
      const resUser = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
        role: user.role,
        avatarUrl: String(req.file?.filename),
      };
      if (checkPassword) {
        const token = sign(resUser, secretKey, {
          expiresIn: "1hr",
        });

        return res.send({
          success: true,
          result: resUser,
          token,
        });
      }
      // npm i jsonwebtoken @types/jsonwebtoken

      throw Error("email or password does not match");
    } catch (error) {
      next(error);
    }
  },
  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { password, email } = req.body;

      const salt = await genSalt(10);

      const hashedPassword = await hash(password, salt);
      const userEditPassword: Prisma.UserUpdateInput = {
        password: hashedPassword,
      };
      await prisma.user.update({
        data: userEditPassword,
        where: {
          email: String(email),
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
      const { email, fullname } = req.query;

      const rendered = mustache.render(template, {
        email,
        fullname,
        verify_url: "",
      });

      // mailer({
      //   to: String(email),
      //   subject: "verify account",
      //   text: "",
      //   html: rendered,
      // });

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
