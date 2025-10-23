import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Navbar } from "@/components/Navbar/Navbar";
import { Customize } from "@/components/Customize/Customize";
import styles from "./page.module.scss";
import { LinkList } from "@/components/LinkList/LinkList";
import { Phone } from "@/components/Phone/Phone";

const links = [
  { id: "1", url: "https://example.com/link1" },
  { id: "2", url: "https://example.com/link2" },
  { id: "3", url: "https://example.com/link3" },
];

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
      <section className={styles.customizeSection}>
        <Phone profileImageUrl={""} name={""} email={""} links={[]}>
          <LinkList links={links} />
        </Phone>
        <Customize />
      </section>
    </main>
  );
}
