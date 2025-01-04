import { useEffect, useMemo } from "react";
import { Octokit } from "octokit";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {
  setError,
  setRepos,
  setReposLoading,
} from "../../../redux/modules/repo/Actions.js";
import { useSearchParams } from "react-router-dom";

export default function useFetchRepos(perPage = 10) {
  const dispatch = useDispatch();
  const accessToken = Cookies.get("accessToken");
  const { screenName } = JSON.parse(Cookies.get("userInfo"));
  const [searchParams] = useSearchParams();
  const pageNumber = +searchParams.get("page") || "1";

  const octokit = useMemo(
    () =>
      new Octokit({
        auth: accessToken,
      }),
    [accessToken]
  );

  useEffect(() => {
    const fetchRepos = async () => {
      dispatch(setError(null));
      dispatch(setReposLoading({ type: "reposLoading", loading: true }));
      try {
        const response = await octokit.request("GET /users/{username}/repos", {
          username: screenName,
          per_page: perPage,
          page: pageNumber,
        });

        const linkHeader = response.headers.link;
        let numberOfPages;

        if (linkHeader) {
          const lastPageLink = linkHeader
            .split(",")
            .find((link) => link?.includes('rel="last"'));

          if (lastPageLink) {
            numberOfPages = lastPageLink.match(/page=(\d+)(?=>)/)?.[1];
          }
        }
        if (!numberOfPages) {
          numberOfPages = pageNumber;
        }
        dispatch(
          setRepos({ data: response.data, numberOfPages: +numberOfPages })
        );
      } catch (err) {
        if (err.message.includes("Not Found")) {
          dispatch(setRepos({ data: [], numberOfPages: 0 }));
          return;
        } else {
          dispatch(setError(err.message));
        }
      } finally {
        dispatch(setReposLoading({ type: "", loading: false }));
      }
    };

    fetchRepos();
  }, [perPage, octokit, screenName, dispatch, pageNumber, searchParams]);

  return {
    screenName,
  };
}
