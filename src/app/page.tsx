import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Navbar } from "@/components/navbar/Navbar";
import { Customize } from "@/components/customize/Customize";
import styles from "./page.module.scss";
import { LinkList } from "@/components/linkList/LinkList";
import { Phone } from "@/components/phone/Phone";

const links = [
  { id: "1", url: "https://example.com/link1" },
  { id: "2", url: "https://example.com/link2" },
  { id: "3", url: "https://example.com/link3" },
];

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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
