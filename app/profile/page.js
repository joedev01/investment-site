
"use client";

import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Lock,
  Camera,
  Pencil,
  Save,
  X,
  CheckCircle,
} from "lucide-react";

export default function ProfilePage() {
  // Sample user information
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+234 801 234 5678",
    address: "Enugu, Nigeria",
    dateJoined: "January 15, 2026",
  });

  // Controls whether profile editing is enabled
  const [isEditing, setIsEditing] = useState(false);

  // Controls the password form
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Stores password form values
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // Update profile information as the user types
  function handleProfileChange(event) {
    const { name, value } = event.target;

    setProfile((previousProfile) => ({
      ...previousProfile,
      [name]: value,
    }));
  }

  // Save profile information
  function handleProfileSave(event) {
    event.preventDefault();

    setIsEditing(false);
    setMessage("Your profile changes have been saved in this demo.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  // Update password form values
  function handlePasswordChange(event) {
    const { name, value } = event.target;

    setPasswords((previousPasswords) => ({
      ...previousPasswords,
      [name]: value,
    }));
  }

  // Validate the password form
  function handlePasswordSubmit(event) {
    event.preventDefault();

    if (
      !passwords.currentPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      setPasswordMessage("Please complete all password fields.");
      return;
    }

    if (passwords.newPassword.length < 8) {
      setPasswordMessage("Your new password must have at least 8 characters.");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordMessage("Your new passwords do not match.");
      return;
    }

    setPasswordMessage(
      "Demo only: your password has not actually been changed."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Profile Overview */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-sm">

        {/* Cover Section */}
        <div className="h-36 bg-gradient-to-r from-blue-700 to-indigo-900 sm:h-44"></div>

        <div className="px-5 pb-6 sm:px-8">

          <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

            {/* Profile Image Placeholder */}
            <div className="flex items-end gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-blue-100 text-blue-700 shadow-sm sm:h-28 sm:w-28">
                <User size={48} />
              </div>

              <div className="pb-1">
                <h2 className="text-xl font-bold text-slate-800">
                  {profile.fullName}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  InvestPro Member
                </p>

                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  <CheckCircle size={13} />
                  Demo Account
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsEditing(!isEditing);
                setMessage("");
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {isEditing ? <X size={17} /> : <Pencil size={17} />}
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>

          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Personal Information */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <User size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Personal Information
              </h2>

              <p className="text-sm text-slate-500">
                Your basic account information.
              </p>
            </div>
          </div>

          {message && (
            <div className="mb-5 rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {message}
            </div>
          )}

          <form onSubmit={handleProfileSave}>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    required
                    className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    required
                    className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    required
                    className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    required
                    className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            )}

          </form>
        </section>

        {/* Account Details */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Account Details
              </h2>

              <p className="text-sm text-slate-500">
                Your membership information.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            <div>
              <p className="text-xs text-slate-400">
                Account ID
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-700">
                INV-USER-00125
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Membership Type
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-700">
                Standard Member
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Date Joined
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CalendarDays size={16} className="text-slate-400" />
                {profile.dateJoined}
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Account Status
              </p>

              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <CheckCircle size={13} />
                Demo Active
              </span>
            </div>

          </div>
        </section>

      </div>

      {/* Password Settings */}
      <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <Lock size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Password & Security
              </h2>

              <p className="text-sm text-slate-500">
                Manage your account password.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setShowPasswordForm(!showPasswordForm);
              setPasswordMessage("");
            }}
            className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {showPasswordForm ? "Close Form" : "Change Password"}
          </button>

        </div>

        {showPasswordForm && (
          <form
            onSubmit={handlePasswordSubmit}
            className="mt-6 border-t border-slate-100 pt-6"
          >

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Current Password
                </label>

                <input
                  type="password"
                  name="currentPassword"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter current password"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="At least 8 characters"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

            </div>

            {passwordMessage && (
              <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
                {passwordMessage}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Update Password
            </button>

            <p className="mt-3 text-xs text-slate-400">
              Demonstration only. No actual account password is changed.
            </p>

          </form>
        )}

      </section>

      {/* Demo Notice */}
      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm leading-6 text-blue-800">
          This profile currently uses sample user information. Changes are
          stored temporarily in the page and will reset when the page reloads.
          A real account system will require backend integration.
        </p>
      </div>

    </main>
  );
}
