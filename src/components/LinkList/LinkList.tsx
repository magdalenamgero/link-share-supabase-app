import styles from "./LinkList.module.scss";

interface Link {
  id: string;
  url: string;
}

interface LinkListProps {
  links: Link[];
  platform?: string;
}

export function LinkList({ links, platform }: LinkListProps) {
  return (
    <div className={styles.linkList}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {link.url}
          {platform ? ` (${platform})` : ""}
        </a>
      ))}
    </div>
  );
}
