import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface ICity {
    name: string;
    state: string;
}

interface IFilter {
    filter?: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(
        yup.object().shape({
            name: yup.string().required().min(3),
            state: yup.string().required().min(3),
        })
    ),
    query: getSchema<IFilter>(
        yup.object().shape({
            filter: yup.string().required().min(3),
        })
    ),
}));

export const create: RequestHandler = async (req, res) => {
    return res.status(StatusCodes.CREATED).json({ message: " created" });
};
