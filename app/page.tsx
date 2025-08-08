import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-end items-start w-360 bg-greyScale-surface-default">
      <Header status="loggedOut" />
      <div className="bg-red-500 text-white p-4">
        If you see this red box, Tailwind is working.
      </div>
    </div>
  );
}
