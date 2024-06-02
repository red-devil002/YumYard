'use client';
import { useProfile } from "@/components/UseProfile";
import UserTabs from "../../components/layout/UserTabs"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UserPage(){

    const [users, setUsers] = useState([]);
    const {loading,data} = useProfile();
  
    useEffect(() => {
      fetch('/api/users').then(response => {
        response.json().then(users => {
          setUsers(users);
        });
      })
    }, []);

    if (loading) {
        return 'Loading user info...';
    }

    if (!data.admin){
        return 'Not a admin';
    }

    return(
        <section className="max-w-lg mx-auto mt-8">
            <UserTabs isAdmin={true}/>
            <div className="mt-8">
                {users?.length > 0 && users.map(user => (
                <div
                    key={user._id}
                    className="bg-gray-100 rounded-lg mb-2 p-2 px-4 flex items-center gap-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                    <div className="text-gray-900">
                        {!!user.name && (<span>{user.name}</span>)}
                        {!user.name && (<span className="italic">No name</span>)}
                    </div>
                    <span className="text-gray-500">{user.email}</span>
                    </div>
                    <div>
                    <Link className="border border-black rounded-lg px-2 py-1" href={'/users/'+user._id}>
                        Edit
                    </Link>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}