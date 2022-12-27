import { rest } from "msw";

const todos = [
  {
    id: "1",
    title: `Jimmy 1`,
  },
  {
    id: "2",
    title: `Jimmy 2`,
  },
  {
    id: "3",
    title: `Jimmy 3`,
  },
  {
    id: "4",
    title: `Jimmy 4`,
  },
  {
    id: "5",
    title: `Jimmy 5`,
  },
];

export const handlers = [
  rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
          {
            id: `1-${pageIndex}`,
            name: `Jimmy 1-${pageIndex}`,
          },
          {
            id: `2-${pageIndex}`,
            name: `Jimmy 2-${pageIndex}`,
          },
          {
            id: `3-${pageIndex}`,
            name: `Jimmy 3-${pageIndex}`,
          },
          {
            id: `4-${pageIndex}`,
            name: `Jimmy 4-${pageIndex}`,
          },
          {
            id: `5-${pageIndex}`,
            name: `Jimmy 5-${pageIndex}`,
          },
        ],
        hasMore: pageIndex < 4,
        nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
      })
    );
  }),
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    console.log(todo);
    todos.push(todo);
    return res(ctx.json(true));
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json([
        {
          id: `1${pageIndex}`,
          name: `Jimmy 1-${pageIndex}`,
        },
        {
          id: `2${pageIndex}`,
          name: `Jimmy 2-${pageIndex}`,
        },
        {
          id: `3${pageIndex}`,
          name: `Jimmy 3-${pageIndex}`,
        },
        {
          id: `4${pageIndex}`,
          name: `Jimmy 4-${pageIndex}`,
        },
        {
          id: `5${pageIndex}`,
          name: `Jimmy 5-${pageIndex}`,
        },
      ])
    );
    // return res(ctx.status(400));
  }),
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    // return res(
    //   ctx.json({
    //     name: `Jimmy ${userId}`,
    //   })
    // );
    return res(ctx.status(400));
  }),
  rest.get("/login", async (req, res, ctx) => {
    const param = req.url.searchParams.get("id");
    return res(
      ctx.json({
        id: param,
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        ctx.status(403),
        ctx.json({ errorMessage: "data not found " })
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       { name: "kiseok", age: 145 },
        //     ],
        //   },
        // })
      );
    }
  ),
];
