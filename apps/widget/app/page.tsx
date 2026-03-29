"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

/**
 * Client-side page that fetches a list of users, provides an "Add" button to invoke the add-user mutation, and displays the fetched users as formatted JSON.
 *
 * @returns The component's JSX element containing the controls and the users display.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p>
      <Button onClick={() => addUser()}>
        Add
      </Button>
      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
