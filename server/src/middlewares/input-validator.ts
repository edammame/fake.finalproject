/** @format */

import Joi from "joi";
import { Response, Request, NextFunction } from "express";

const schema = Joi.object({
  email: Joi.string().required().email().message("email is incorrect"),
  //   repeat_password: Joi.valid(Joi.ref("password")).message(
  //     "password harus sama"
  //   ),
  password: Joi.string()
    .min(5)
    .max(16)
    .pattern(/(?=(?:.*[a-z]){1,16}).+/, "lowercase")
    .pattern(/(?=(?:.*[A-Z]){1,16}).+/, "uppercase")
    .pattern(/(?=(?:.*[0-9]){1,16}).+/, "number")
    .pattern(/(?=(?:.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){1,16}).+/, "special")
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.base":
          case "string.empty":
          case "any.required":
          default:
            err.message = "error ";
            break;
          case "string.min":
            err.message = "Passwords must be less than 5 digits";
            break;
          case "string.max":
            err.message = "Password must be more than 6 digits";
            break;
          case "string.pattern.name":
            switch (err.local.name) {
              case "lowercase":
                err.message = "Password must contain one lowercase";
                break;
              case "uppercase":
                err.message = "Password must contain one uppercase ";
                break;
              case "number":
                err.message = "password must contain one number";
                break;
              case "special":
                err.message = "password must contain one special characters";
                break;
            }
            break;
        }
      });

      return errors;
    }),
  first_name: Joi.string()
    .required()
    .min(5)
    .message("first name must be at least 5 characters"),
  last_name: Joi.string().required(),
  gender: Joi.string(),
});

export const validateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, first_name, last_name, gender, repeat_password } =
      req.body;
    await schema.validateAsync({
      email,
      password,
      first_name,
      last_name,
      //   repeat_password,
      gender,
    });
    next();
  } catch (error) {
    next(error);
  }
};
