// create small component as a phone screen, to be a placeholder for the links and info the user inputs intot he customize component
import React from "react";
import styles from "./phone.module.scss";
import Image from "next/image";

interface PhoneProps {
  children: React.ReactNode;
  profileImageUrl?: string;
  name?: string;
  email?: string;
  links?: { label: string; url: string }[];
}

export const Phone = ({ profileImageUrl, name, email, links }: PhoneProps) => {
  return (
    <div className={styles.phoneContainer}>
      <figcaption className={styles.phoneCaption}>
        <Image
          src={profileImageUrl || "/default-profile.png"}
          alt="Phone Screen"
        />
      </figcaption>
    </div>
  );
};
