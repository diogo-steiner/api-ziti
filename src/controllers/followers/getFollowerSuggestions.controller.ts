import { Request, Response } from "express";
import { IGetFollowersSuggestionsResponse } from "../../interfaces/followers.interface";
import { getFollowerSuggestionsService } from "../../services";

export const getFollowerSuggestionsController = async (
  req: Request,
  res: Response
) => {
  const userLoggedId: string = req.user.id;
  const pageReq = req.query.page as string | undefined;
  const limitReq = req.query.limit as string | undefined;

  const suggestions: IGetFollowersSuggestionsResponse =
    await getFollowerSuggestionsService(pageReq, limitReq, userLoggedId);
  return res.status(200).json(suggestions);
};
