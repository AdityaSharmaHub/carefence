"use client";
import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "antd";
import Link from "next/link";

export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <div className="flex items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {user && (
        <div className="w-[350px]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold my-10">My Profile</h1>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
          <div>
            <img
              src={user.picture}
              alt="Profile"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
            <h2 className="text-xl font-medium mt-2">{user.name}</h2>
            <p className="mb-4">{user.email}</p>
            {/* <pre className="flex-wrap">{JSON.stringify(user, null, 2)}</pre> */}
          </div>
        </div>
      )}

      {!user && <div>Please login to view your profile</div>}
    </div>
  );
}
