import List from "@/components/list/list";
import ListItem from "@/components/list/list-item";
import Link from "next/link";
import { clerkClient, User } from "@clerk/nextjs/server";

export default async function UsersPage() {
    const clerk = await clerkClient();

    const users = await clerk.users.getUserList({
        limit: 100,
    });
    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Users</h1>
                    <p className="text-sm text-gray-500">Manage users</p>
                </div>

                <Link
                    href="/admin/users/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    + Create User
                </Link>
            </div>

            {/* Empty State */}
            {(!users || users.totalCount === 0) && (
                <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
                    <p className="text-lg font-medium">No users yet</p>
                    <p className="text-sm">
                        Users will appear here once someone submits an inquiry.
                    </p>
                </div>
            )}

            {/* List */}
            {users && users.totalCount > 0 && (
                <List>
                    {users.data.map((user: User) => (
                        <ListItem
                            key={user.id}
                            title={user.fullName ?? "Untitled User"}
                            meta={`${user.primaryEmailAddress?.emailAddress}  ${user.primaryPhoneNumber?.phoneNumber ? `${user.primaryPhoneNumber.phoneNumber + " •"}` : ""}`}
                            href={`/admin/users/${user.id}`}
                        />
                    ))}
                </List>
            )}
        </div>
    );
}
