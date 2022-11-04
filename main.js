// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// // app은 express의 Instance 입니다.
// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // javascript, images, css 파일과 같은 정적 파일을 제공하려면 express.static을 사용하세요.
// // 정적 asstes가 포함된 디렉토리의 이름을 express.static 미들웨어 함수에 전달하면 파일의 직접적인 제공을 시작할 수 있습니다.
// express.static("public");
// app.use("/static", express.static("public"));

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

import express from "express";
import { App } from "./src/App.js";
import { serverRenderer } from "./src/ServerRenderer.js";
import { store } from "./src/store.js";

const app = express();

app.use(express.json());
app.use("/src", express.static("./src"));

// state의 값을 수정할 수 있는 api를 만들어줍니다.
app.put("/api/state", (req, res) => {
  store.hydration(req.body);
  res.status(204).send();
});

// path가 `/`에서 `/*`로 변경되었습니다. 모든 route와 매칭하기 위함입니다.
app.get("/*", (req, res) => {
  res.send(
    serverRenderer(
      // 기존에는 TodoList만 렌더링했는데,
      // 이제 App 컴포넌트를 렌더링하도록 변경했습니다.
      App({
        path: req.path, // 렌더링을 할 때 path 정보를 같이 보냅니다.
      }),
      store.state
    )
  );
});

app.listen(3000, () => {
  console.log("listen to http://localhost:3000");
});
