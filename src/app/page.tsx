import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Navbar } from "@/components/navbar/Navbar";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Only render content if user is authenticated
  return (
    <main>
      <Navbar title="DevLink" />
      <p>This is where the user`&apos;`s links and info will be displayed.</p>
    </main>
  );
}
