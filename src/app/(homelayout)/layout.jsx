import Header from "@/components/shared/Header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header></Header>

      <div>{children}</div>
    </div>
  );
}
