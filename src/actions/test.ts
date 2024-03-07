"use server";

import util from "util";

import type { Menu } from "@/types";

export async function TestAction(formData: Menu) {
  console.log(
    util.inspect(formData, { showHidden: false, depth: null, colors: true })
  );
}
