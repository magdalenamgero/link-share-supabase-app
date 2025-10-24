"use client";

import { useState } from "react";
import styles from "./AddLink.module.scss";

interface Link {
  id: string;
  url: string;
}

interface AddLinkProps {
  onAddLink: (link: Link) => void;
}

export function AddLink({ onAddLink }: AddLinkProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    const newLink = {
      id: crypto.randomUUID(),
      url: url,
    };

    onAddLink(newLink);
    setUrl(""); // Clear input after submission
  };

  return (
    <div className={styles.addLinkContainer}>
      <form className={styles.linkForm} onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
        <button type="submit">Add Link</button>
      </form>
    </div>
  );
}
