import { userRepository } from "../../repositories";
import { getFollowersSuggestionsResponseSchema } from "../../schemas";
import { IGetFollowersSuggestionsResponse } from "../../interfaces/followers.interface";

export const getFollowerSuggestionsService = async (
  pageReq: string | undefined,
  limitReq: string | undefined,
  userLoggedId: string
): Promise<IGetFollowersSuggestionsResponse> => {
  const serverDomain = process.env.SERVER_DOMAIN;
  const baseUrl = `${serverDomain}/followers/suggestions`;

  let page = +pageReq || 1;
  if (page < 1) page = 1;

  let limit = +limitReq || 10;
  if (limit < 1) limit = 10;
  const jump = (page - 1) * limit;

  const userQueryBuilder = userRepository.createQueryBuilder("u");
  const queryForWhere = `
    not 
    exists 
    (
      select 
        * 
      from 
        followers_followings ff 
      where 
        ff."followingId" = u.id 
      and 
        ff."followerId" = :userLoggedId
    )
  `;
  const suggestions = await userQueryBuilder
    .skip(jump)
    .take(limit)
    .select()
    .where(queryForWhere, { userLoggedId })
    .andWhere("u.id != :userLoggedId", { userLoggedId })
    .getMany();

  let prevUrl = `${baseUrl}?page=${page - 1}&limit=${limit}`;
  let nextUrl = `${baseUrl}?page=${page + 1}&limit=${limit}`;

  if (page == 1) prevUrl = null;
  if (suggestions.length < limit) nextUrl = null;

  const dataSuggestionsReturn = {
    next: nextUrl,
    prev: prevUrl,
    count: suggestions.length,
    content: suggestions,
  };

  return await getFollowersSuggestionsResponseSchema.validate(
    dataSuggestionsReturn,
    { stripUnknown: true }
  );
};
