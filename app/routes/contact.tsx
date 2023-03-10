import { Outlet } from '@remix-run/react';

export default function ContactRoute() {
  return (
    <div className="my-16 mx-auto max-w-xl px-6">
      <h1 className="mb-2 font-serif text-4xl">Contact Us</h1>
      <p className="mb-10 text-black text-opacity-50">
        We will get back to you as soon as possible.
      </p>
      <Outlet />
    </div>
  );
}
