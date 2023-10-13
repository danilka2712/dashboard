import { error, json } from "@sveltejs/kit";

const menu = [
  { name: "Посты", href: "/", category: "/content" },
  { name: "Пользователи", href: "/", category: "/content" },
  { name: "Статистика", href: "/", category: "/" },
  { name: "Информация", href: "/", category: "/" },
];
export async function load({ params }) {
  const post = "login";
  if (post === params.urlid) {
    return;
  }
  throw error(404, "Not found");
}
