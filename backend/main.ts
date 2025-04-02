import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { send } from "jsr:@oak/oak/send";

const router = new Router();

router.get("/", async (ctx) => {
  try {
    await send(ctx, "index.html", {
      root: `${Deno.cwd()}/../frontend`, // Ensure this path is correct
    });
  } catch (error) {
    console.error("Error serving index.html:", error);
    ctx.response.status = 500;
    ctx.response.body = "Internal Server Error";
  }
});

const app = new Application();

app.use(async (ctx, next) => {
  try {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/../frontend`, // Serves frontend assets
      index: "index.html",
    });
  } catch {
    await next();
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
