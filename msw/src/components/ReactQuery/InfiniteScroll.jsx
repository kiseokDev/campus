import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

export default function InfiniteSroll() {


  const fetchProjects = what => {
    const { pageParam = 0 } = what;
    return axios
      .get("/api/projects?page=" + pageParam)
      .then(response => response.data);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("projects", fetchProjects, {
    getNextPageParam: (lastPage, pages) => {
      //pages는 이전페이지 전체에 대한 기록을 배열로 가져오고
      //lasPage는 딱 이전페이지만 가져옴
      return lastPage.nextCursor;
    },
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.projects.map(project => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
