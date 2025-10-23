"use client";

import { useState } from "react";
import styles from "./Customize.module.scss";
import { AddLink } from "../AddLink/AddLink";

interface Link {
  id: string;
  url: string;
}

export function Customize() {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", url: "" },
    { id: "2", url: "" },
    { id: "3", url: "" },
  ]);

  const handleAddLink = (linkId: string, newLink: Link) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => (link.id === linkId ? newLink : link)),
    );
  };

  return (
    <div className={styles.customizeContainer}>
      <h1 className={styles.title}>Title</h1>

      <div className={styles.linksContainer}>
        {links.map((link) => (
          <>
            <input
              type="text"
              value={link.url}
              onChange={(e) =>
                handleAddLink(link.id, { ...link, url: e.target.value })
              }
            />
            <AddLink
              key={link.id}
              onAddLink={(newLink) => handleAddLink(link.id, newLink)}
            />
            <select
              className={styles.platformDropdown}
              name="platform"
              id="platform-select"
              aria-placeholder="Select Platform"
            >
              <option value="website">Website</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="github">GitHub</option>
              <option value="youtube">Youtube</option>
              <option value="facebook">Facebook</option>
              <option value="medium">Medium</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="other">Other</option>
            </select>
          </>
        ))}
      </div>

      <button className={styles.addButton}>Save</button>
    </div>
  );
}
