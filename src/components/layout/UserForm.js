'use client';
import { useState } from "react";
import EditableImage from "./EditableImage";
import { useProfile } from "../UseProfile";

export default function UserFrom({user, onSave}){


    const [userName, setUserName] = useState(user?.name || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [department, setDepartment] = useState(user?.department || "");
    const [college, setCollege] = useState(user?.college || "");
    const [prn, setPRN] = useState(user?.prn || "");
    const [sem, setSem] = useState(user?.sem || "");
    const [image, setImage] = useState(user?.image || '');
    const [admin, setAdmin] = useState(user?.admin || false);

    const {data: loggedInUserData} = useProfile();

    return(
    <div>
        <h1 className="text-primary text-center text-4xl mb-2">
          Profile section
        </h1>
        <div className="container max-w-screen-lg mx-auto">
          <form
            class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
            onSubmit={ev => onSave(ev, {name: userName, image, phone, department, college, prn, sem, admin})}
          >
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <div className="max-w-[200px] mt-4">
                    <EditableImage link={image} setLink={setImage} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  {/* Full Name   */}
                  <div className="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      // name="full_name"
                      // id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Full name"
                      value={userName}
                      onChange={(ev) => setUserName(ev.target.value)}
                    />
                  </div>

                  {/* Email id */}
                  <div className="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={user.email}
                      disabled={true}
                      placeholder="email@domain.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="md:col-span-3">
                    <label for="phone">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={phone}
                      onChange={(ev) => setPhone(ev.target.value)}
                      placeholder="10-digit Mobile number"
                    />
                  </div>

                  {/* Department */}
                  <div className="md:col-span-2">
                    <label for="department">Department</label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={department}
                      onChange={(ev) => setDepartment(ev.target.value)}
                      placeholder="Ex:- Engineering"
                    />
                  </div>

                  {/* College Name */}
                  <div className="md:col-span-2">
                    <label for="college">College Name</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="text"
                        name="college"
                        id="college"
                        placeholder="College Name"
                        value={college}
                        onChange={(ev) => setCollege(ev.target.value)}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Prn number */}
                  <div className="md:col-span-[1.5]">
                    <label for="prn">PRN Number</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="text"
                        name="prn"
                        id="prn"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={prn}
                        onChange={(ev) => setPRN(ev.target.value)}
                        placeholder="Prn Number"
                      />
                    </div>
                  </div>

                  {/* Class Name / Sem */}
                  <div className="md:col-span-2">
                    <label for="sem">Class/Sem </label>
                    <input
                      type="text"
                      name="sem"
                      id="sem"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={sem}
                      onChange={(ev) => setSem(ev.target.value)}
                      placeholder="CE-1 / 2nd Sem"
                    />
                  </div>

                  {loggedInUserData.admin && (
                    <div>
                      <label className="p-2 inline-flex items-center gap-2" for="adm">
                      <input id="adm" type="checkbox" className="" value={'1'} 
                        checked={admin}
                        onChange={ev => setAdmin(ev.target.checked)}
                      />
                        <span>Admin</span>
                      </label>
                    </div>
                  )}

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end mt-4">
                      <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
    )
}