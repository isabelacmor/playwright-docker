/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import styles from "./page.module.css";

const Page = async () => {
  // Define the path to the keyboards directory
  const keyboardsDir = path.join(process.cwd(), "public/keyboards");

  // Read the directory to get all filenames
  const imageFiles = fs.readdirSync(keyboardsDir);
  const imagePaths = imageFiles.map((file) => `/keyboards/${file}`); // Map filenames to public URLs

  return (
    <>
      <h1>Inside peek at my favorite keyboards ⌨️</h1>
      <div className={styles.keyboardsContainer}>
        {imagePaths.map((imagePath) => (
          <img
            className={styles.keyboardImage}
            key={imagePath}
            src={imagePath}
            // Add this to fix accessibility
            alt={imagePath
              .replace("/keyboards/", "")
              .replaceAll("_", " ")
              .replace(/\.[a-z]+$/, "")}
          />
        ))}
      </div>
    </>
  );
};

export default Page;

// Images from https://www.keyboard.university/100-courses/intro-to-mechanical-keyboards-p6brj and https://www.melgeek.com/collections/keyboards
