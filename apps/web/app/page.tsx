"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

/**
 * Client React page component that renders an auth-gated user interface.
 *
 * When authenticated, the component shows the app label, a user menu, an "Add" button that triggers the `users.add` mutation, and a JSON view of users from `users.getMany`.
 * When unauthenticated, it shows a sign-in prompt and a sign-in button.
 *
 * @returns A React element containing the authenticated view (user controls and list) or the unauthenticated sign-in prompt.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <Button onClick={() => addUser()}>Add</Button>
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in!</p>
        <SignInButton>Sign in!</SignInButton>
      </Unauthenticated>
    </>
  )
}
