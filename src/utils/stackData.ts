import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import css from "@/public/static/img/imgTask/css.svg";
import html from "@/public/static/img/imgTask/html5.svg";
import git from "@/public/static/img/imgTask/git.svg";
import django from "@/public/static/img/imgTask/icons8-django.svg";
import react from "@/public/static/img/imgTask/reagir.svg";
import javascript from "@/public/static/img/imgTask/javascript.svg";
import typescript from "@/public/static/img/imgTask/typescript.svg";
import nodejs from "@/public/static/img/imgTask/nodejs.svg";
import python from "@/public/static/img/imgTask/python.svg";
import postgreesql from "@/public/static/img/imgTask/postgreesql.svg";

export const stackData = [
  {
    title: "HTML",
    img: html,
  },
  {
    title: "CSS",
    img: css,
  },
  {
    title: "JS",
    img: javascript,
    // img: "src/assents/imagens/javascript.svg",
  },
  { title: "TypeScript", img: typescript },
  {
    title: "Node JS",
    img: nodejs,
  },
  {
    title: "React",
    img: react,
  },
  { title: "Jdango", img: django },
  // { title: "Next.js", img: TbBrandNextjs },
  // { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: postgreesql },
  { title: "Git", img: git },
  { title: "Python", img: python },
];
