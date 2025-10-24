// create small component as a phone screen, to be a placeholder for the links and info the user inputs intot he customize component
import React from "react";
import styles from "./Phone.module.scss";
// import Image from "next/image";

interface PhoneProps {
  children: React.ReactNode;
  profileImageUrl: string;
  name: string;
  email: string;
  links: { label: string; url: string }[];
}

export const Phone = ({
  children,
  // profileImageUrl,
  name,
  email,
  links,
}: PhoneProps) => {
  return (
    <section className={styles.phoneSection}>
      <div className={styles.phoneContainer}>
        <figcaption className={styles.profilePic}>
          {/* <Image
            src={profileImageUrl || "/default-profile.png"}
            alt="Phone Screen"
          width={100}
          height={600}
          className={styles.phoneImage}
        /> */}
        </figcaption>
        <p>{name}</p>
        <p>{email}</p>
        <div className={styles.linksContainer}>
          {links?.map((link, index) => (
            <a key={index} href={link.url} className={styles.linkItem}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.phoneScreen}>{children}</div>
      </div>
    </section>
  );
};
