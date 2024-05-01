import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          CREATE TASK
        </button>
      </div>
    </form>
  );
}
