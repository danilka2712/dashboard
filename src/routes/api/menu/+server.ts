import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const menu = [
  { name: "Посты", href: "/", category: "/content" },
  { name: "Пользователи", href: "/", category: "/content" },
  { name: "Статистика", href: "/", category: "/" },
  { name: "Информация", href: "/", category: "/" },
];
export const GET: RequestHandler = async ({}) => {
  return json(menu);
};
