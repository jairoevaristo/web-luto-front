import React from "react";
import styles from "./Profile.module.css";

interface ProfileProps {
  avatar?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Profile: React.FC<ProfileProps> = ({ avatar, onChange }) => {
  return (
    <div className={styles.image}>
      <div className={styles.avatar}>
        {/* <Avatar className={styles.icon} name="" src={avatar} size="150"/> */}
        <input
          className={styles.input}
          type="file"
          accept="image/*"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
