"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const password = formData.get("password") as string;
  const expected = process.env.ADMIN_PASSWORD_HASH;

  if (!expected || !password) {
    redirect("/admin/login?error=1");
  }

  const { compare } = await import("bcryptjs");
  const valid = await compare(password, expected);
  if (!valid) redirect("/admin/login?error=1");

  await createSession("admin");
  redirect("/admin");
}
