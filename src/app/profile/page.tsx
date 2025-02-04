import React from "react";
import Header from "../../components/Header";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24">
        <section className="py-10">
          <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Personal Information</h2>
              <p className="mt-4">Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Preferences</h2>
              <p className="mt-4">
                Preferred Opportunities: Technology, Design
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
